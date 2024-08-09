"use client";

import { Input, PasswordInput } from "@components/elements/Input";
import { Button } from "@components/elements/Button";
import { Back } from "@components/elements/Back";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [isFilled, setIsFilled] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        setIsFilled(
            formData.username !== "" &&
                formData.password !== "" &&
                formData.email !== "" &&
                formData.confirmPassword !== "" &&
                formData.password === formData.confirmPassword
                ? true
                : false
        );
    }, [formData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // register
        const data = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        };

        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                cache: "no-store",
            }
        );

        const result = await response.json();
        window.alert(result.message);
        if (result.message === "User has been created successfully") {
            router.push("/");
        }
    };

    return (
        <main className="bg-gradient h-screen text-white overflow-hidden">
            <div className="top-16 left-[18px] fixed">
                <Link href="/">
                    <Back />
                </Link>
            </div>
            <div className="h-screen overflow-auto no-scroll">
                <div className="h-36" />
                <div className="px-[23px] h-screen">
                    <div>
                        <h3 className="mb-6 ml-4 font-semibold text-2xl">
                            Register
                        </h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="space-y-4 pb-6">
                                <Input
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="username"
                                    placeholder="Create Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <PasswordInput
                                    name="password"
                                    placeholder="Create Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <PasswordInput
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button isFilled={isFilled}>Login</Button>
                        </form>
                        <div className="mt-12 text-center text-sm">
                            <span>Have an account? </span>
                            <Link
                                href="/"
                                className="text-gradient-custom underline"
                            >
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

"use client";

import { Input, PasswordInput } from "@components/elements/Input";
import { Button } from "@components/elements/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
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
            formData.username !== "" && formData.password !== "" ? true : false
        );
    }, [formData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // login
        const data = {
            username: formData.username,
            email: formData.username,
            password: formData.password,
        };

        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL + `/login`,
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
        if (result.access_token) {
            document.cookie = `access_token=${result.access_token}; path=/;`;
            router.push("/profile");
        } else {
            window.alert(result.message);
        }
    };

    return (
        <main className="bg-gradient h-screen text-white overflow-hidden">
            <div className="top-16 left-[18px] fixed"></div>
            <div className="h-screen overflow-auto no-scroll">
                <div className="h-36" />
                <div className="px-[23px] h-screen">
                    <div>
                        <h3 className="mb-6 ml-4 font-semibold text-2xl">
                            Login
                        </h3>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="space-y-4 pb-6">
                                <Input
                                    name="username"
                                    placeholder="Enter Username/Email"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <PasswordInput
                                    name="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button isFilled={isFilled}>Login</Button>
                        </form>
                        <div className="mt-12 text-center text-sm">
                            <span>No account? </span>
                            <Link
                                href="/register"
                                className="text-gradient-custom underline"
                            >
                                Register here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

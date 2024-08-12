"use client";

import { Back } from "@/components/elements/Back";
import { About } from "@/components/fragments/About";
import { Cover } from "@/components/fragments/Cover";
import { Interest } from "@/components/fragments/Interest";
import { getAccessToken } from "@/helper/token";
import { useEffect, useState } from "react";

export default function Profile() {
    const token = getAccessToken() || "";
    const [userData, setUserData] = useState({
        username: "",
        name: "",
        age: 0,
        gender: "Male",
        birthday: "",
        horoscope: "",
        zodiac: "",
        height: "",
        weight: "",
        interests: [],
    });

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, []);

    const logout = () => {
        document.cookie = "access_token=; path=/;";
        window.location.href = "/";
    };

    // set horoscope, zodiac, and age
    const setHoroscope = () => {
        if (!userData.birthday && userData.horoscope !== "") {
            setUserData((prevData) => ({
                ...prevData,
                horoscope: "",
                zodiac: "",
                age: 0,
            }));
        } else if (userData.birthday && userData.age === 0) {
            const today = new Date();
            const birthDate = new Date(userData.birthday);
            let age = today.getFullYear() - birthDate.getFullYear();
            const month = today.getMonth() - birthDate.getMonth();
            if (
                month < 0 ||
                (month === 0 && today.getDate() < birthDate.getDate())
            ) {
                age--;
            }
            setUserData((prevData) => ({
                ...prevData,
                age,
            }));
        }
    };

    useEffect(() => {
        setHoroscope();
    }, [userData]);

    // fetch profile
    const fetchData = async () => {
        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + `/getProfile`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": token,
                    },
                    cache: "no-store",
                }
            );

            const result = await response.json();
            if (response.ok) {
                setUserData((prevData) => ({
                    ...prevData,
                    ...result.data,
                }));
            } else {
                logout();
            }
        } catch (error) {
            logout();
        }
    };

    return (
        <main className="bg-[#09141A] pt-16 min-h-screen text-white">
            <div className="relative px-[18px]">
                <div className="absolute">
                    <Back onClick={logout} />
                </div>
                <div className="text-center">
                    {userData.username ? `@${userData.username}` : ""}
                </div>
                <span />
            </div>
            <div className="space-y-5 px-2 pt-6 pb-10">
                <Cover data={userData} />
                <About
                    data={userData}
                    onClick={() => {
                        fetchData();
                    }}
                />
                <Interest data={userData.interests || []} />
            </div>
        </main>
    );
}

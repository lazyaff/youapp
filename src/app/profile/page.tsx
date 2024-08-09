"use client";

import { Back } from "@/components/elements/Back";
import { About } from "@/components/fragments/About";
import { Cover } from "@/components/fragments/Cover";
import { Interest } from "@/components/fragments/Interest";
import { getAccessToken } from "@/helper/token";
import { useEffect, useState } from "react";

export default function Profile() {
    const token = getAccessToken() || "";
    const [userData, setUserData] = useState<any>({});

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, []);

    const logout = () => {
        document.cookie = "access_token=; path=/;";
        window.location.href = "/";
    };

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
            setUserData(result.data);
        } catch (error) {
            console.log(error);
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
                <Cover />
                <About />
                <Interest data={userData.interests || []} />
            </div>
        </main>
    );
}

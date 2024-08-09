"use client";

import { Back } from "@/components/elements/Back";
import { About } from "@/components/fragments/About";
import { Cover } from "@/components/fragments/Cover";
import { Interest } from "@/components/fragments/Interest";
import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
        setTimeout(() => {
            console.clear();
        }, 2000);
    });

    return (
        <main className="bg-[#09141A] pt-16 min-h-screen text-white">
            <div className="relative px-[18px]">
                <div className="absolute">
                    <Back />
                </div>
                <div className="text-center">
                    {/* {userStore.username ? `@${userStore.username}` : ""} */}
                    @username
                </div>
                <span />
            </div>
            <div className="space-y-5 px-2 pt-6 pb-10">
                <Cover />
                <About />
                <Interest />
            </div>
        </main>
    );
}

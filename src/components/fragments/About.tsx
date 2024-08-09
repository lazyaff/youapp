"use client";

import { Box } from "@/components/elements/Box";
import { Label } from "@/components/elements/Label";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { List } from "../elements/List";

const zodiacs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpius",
    "sagittarius",
    "copricornus",
    "aquarius",
    "pisces",
];

export function About() {
    return (
        <Box title="About" onClick={() => {}} openUpdate={false}>
            <div className="text-[#FFFFFF85] text-sm">
                <span>Add in your your to help others know you better</span>

                {/* <div className="space-y-2.5">
                    <List title="Birthday" value={"Jan 1, 1990"} />
                    <List title="Horoscope" value={"Pig"} />
                    <List title="Zodiac" value={"Capricornus"} />
                    <List title="Height" value={`160 cm`} />
                    <List title="Weight" value={`60 kg`} />
                </div> */}

                {/* <label className="flex items-center gap-4 mt-2 mb-5 cursor-pointer">
                    <div className="place-content-center grid bg-white/[.08] rounded-2xl w-14 h-14">
                        <Image
                            height={56}
                            width={56}
                            layout="fixed"
                            className="rounded-2xl w-14 h-14"
                            src="https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B100158-cover.jpg"
                            alt="Profile"
                            priority
                        />
                    </div>
                    <span className="text-white">Add image</span>
                </label>
                <form className="flex flex-col gap-4" autoComplete="off">
                    <Label id="name" title="Display name">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            minLength={6}
                            placeholder="Enter name"
                        />
                    </Label>
                    <Label id="gender" title="Gender">
                        <select
                            id="gender"
                            name="gender"
                            className={`w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right rounded-lg text-white/30 py-2 px-0`}
                            defaultValue={""}
                        >
                            <option value="" className="hidden" disabled>
                                Select Gender
                            </option>
                            {["Male", "Female"].map((gender) => (
                                <option
                                    key={gender}
                                    className="font-medium font-sans text-black capitalize"
                                    value={gender}
                                >
                                    {gender}
                                </option>
                            ))}
                        </select>
                    </Label>
                    <Label id="birthday" title="Birthday">
                        <input
                            id="birthday"
                            name="birthday"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            minLength={10}
                            maxLength={10}
                            placeholder="DD-MM-YYYY"
                        />
                    </Label>
                    <Label id="horoscope" title="Horoscope">
                        <input
                            id="horoscope"
                            name="horoscope"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            placeholder="--"
                            disabled
                        />
                    </Label>
                    <Label id="zodiac" title="Zodiac">
                        <input
                            id="zodiac"
                            name="zodiac"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            placeholder="--"
                            disabled
                        />
                    </Label>
                    <Label id="height" title="Height">
                        <input
                            id="height"
                            name="height"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            placeholder="Add Height"
                        />
                    </Label>
                    <Label id="weight" title="Weight">
                        <input
                            id="weight"
                            name="weight"
                            type="text"
                            className={
                                "w-48 border border-white/[.06] placeholder:text-white/30 text-white bg-[#D9D9D90F] text-right px-4 py-1.5 rounded-lg"
                            }
                            placeholder="Add Weight"
                        />
                    </Label>
                </form> */}
            </div>
        </Box>
    );
}

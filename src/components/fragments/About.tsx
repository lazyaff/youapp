"use client";

import { Box } from "@/components/elements/Box";
import { Label } from "@/components/elements/Label";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { List } from "../elements/List";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/helper/token";

interface Props {
    data: {
        name: string;
        age: number;
        gender: string;
        birthday: string;
        horoscope: string;
        zodiac: string;
        height: string;
        weight: string;
    };
    onClick: any;
}

export function About({ data, onClick }: Props) {
    const [edited, setEdited] = useState(false);
    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const toggelEdit = async () => {
        if (edited === false) {
            setEdited(true);
        } else {
            if (
                formData.birthday &&
                !/^\d{2}-\d{2}-\d{4}$/.test(formData.birthday)
            ) {
                window.alert("Invalid birthday format");
                return;
            }

            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/updateProfile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": getAccessToken() || "",
                    },
                    cache: "no-store",
                    body: JSON.stringify({
                        name: formData.name,
                        birthday: formData.birthday,
                        height: Number(formData.height),
                        weight: Number(formData.weight),
                    }),
                }
            );

            if (response.ok) {
                await onClick();
                setEdited(false);
                return;
            }

            window.alert("Bad request");
        }
    };

    return (
        <Box title="About" onClick={toggelEdit} openUpdate={edited}>
            <div className="text-[#FFFFFF85] text-sm">
                {!edited ? (
                    !data.birthday ||
                    !data.horoscope ||
                    !data.zodiac ||
                    !data.height ||
                    !data.weight ? (
                        <span>
                            Add in your info to help others know you better
                        </span>
                    ) : (
                        <div className="space-y-2.5">
                            <List
                                title="Birthday"
                                value={data.birthday + ` (${data.age})`}
                            />
                            <List title="Horoscope" value={data.horoscope} />
                            <List title="Zodiac" value={data.zodiac} />
                            <List title="Height" value={data.height + " cm"} />
                            <List title="Weight" value={data.weight + " kg"} />
                        </div>
                    )
                ) : (
                    <>
                        <label className="flex items-center gap-4 mt-2 mb-5 cursor-pointer">
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
                        <form
                            className="flex flex-col gap-4"
                            autoComplete="off"
                        >
                            <Label id="name" title="Display name">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    minLength={6}
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label id="gender" title="Gender">
                                <select
                                    id="gender"
                                    name="gender"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-0 py-2 border rounded-lg w-48 text-white text-white/30 placeholder:text-white/30"
                                    defaultValue={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option
                                        value=""
                                        className="hidden"
                                        disabled
                                    >
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
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    minLength={10}
                                    maxLength={10}
                                    placeholder="MM-DD-YYYY"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label id="horoscope" title="Horoscope">
                                <input
                                    id="horoscope"
                                    name="horoscope"
                                    type="text"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    placeholder="--"
                                    disabled
                                    value={formData.horoscope}
                                />
                            </Label>
                            <Label id="zodiac" title="Zodiac">
                                <input
                                    id="zodiac"
                                    name="zodiac"
                                    type="text"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    placeholder="--"
                                    disabled
                                    value={formData.zodiac}
                                />
                            </Label>
                            <Label id="height" title="Height">
                                <input
                                    id="height"
                                    name="height"
                                    type="number"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    placeholder="Add Height"
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label id="weight" title="Weight">
                                <input
                                    id="weight"
                                    name="weight"
                                    type="number"
                                    className="text-right border-white/[.06] bg-[#D9D9D90F] px-4 py-1.5 border rounded-lg w-48 text-white placeholder:text-white/30"
                                    placeholder="Add Weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </Label>
                        </form>
                    </>
                )}
            </div>
        </Box>
    );
}

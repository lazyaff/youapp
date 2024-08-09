import { useEffect, useState } from "react";
import { Box } from "../elements/Box";
import { Back } from "../elements/Back";
import { getAccessToken } from "@/helper/token";

interface Props {
    data: string[];
}

export function Interest({ data }: Props) {
    const [interest, setInterest] = useState("");
    const [interestList, setInterestList] = useState(data);
    const [editList, setEditList] = useState(data);
    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        setInterestList(data);
        setEditList(data);
    }, [data]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setEditList([...editList, interest]);
        setInterest("");
    };

    const save = async () => {
        await fetch(process.env.NEXT_PUBLIC_API_URL + "/updateProfile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": getAccessToken() || "",
            },
            cache: "no-store",
            body: JSON.stringify({
                interests: editList,
            }),
        });
        setInterestList(editList);
        setIsEdited(!isEdited);
    };

    return (
        <Box
            title="Interest"
            onClick={() => {
                setIsEdited(!isEdited);
            }}
        >
            <div className="text-[#FFFFFF85] text-sm">
                {interestList.length == 0 && (
                    <span>Add in your interest to find a better match</span>
                )}
                <ul className="flex gap-[10px] text-white">
                    {interestList.map((interest, index) => {
                        return (
                            <li
                                key={index}
                                className="bg-white/[.06] px-4 py-2 rounded-full"
                            >
                                {interest}
                            </li>
                        );
                    })}
                </ul>
                {isEdited && (
                    <main className="fixed inset-0 bg-gradient h-screen text-white overflow-hidden">
                        <div className="top-16 right-[18px] left-[18px] fixed flex justify-between items-center">
                            <Back
                                onClick={() => {
                                    setEditList(interestList);
                                    setIsEdited(!isEdited);
                                }}
                            />
                            <button
                                onClick={save}
                                className="px-2 py-1 font-semibold save-button"
                            >
                                Save
                            </button>
                        </div>
                        <div className="h-screen overflow-auto no-scroll">
                            <div className="h-36" />
                            <div className="px-[23px] h-screen">
                                <div className="text-gradient-custom text-sm">
                                    Tell everyone about yourself
                                </div>
                                <h4 className="pt-3 pb-8 font-semibold text-xl">
                                    What interest you?
                                </h4>
                                <form onSubmit={submit} autoComplete="off">
                                    <label
                                        htmlFor="interest"
                                        className="flex flex-wrap items-center gap-2 bg-white/[0.06] px-4 py-2.5 rounded-md"
                                    >
                                        {editList.map((interest, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-center bg-white/10 pl-2.5 rounded"
                                                >
                                                    <div>{interest}</div>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setEditList(
                                                                editList.filter(
                                                                    (i) =>
                                                                        i !==
                                                                        interest
                                                                )
                                                            );
                                                        }}
                                                        className="px-2 py-1.5 cursor-pointer"
                                                    >
                                                        &#10006;
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        <input
                                            value={interest}
                                            onChange={(e) =>
                                                setInterest(e.target.value)
                                            }
                                            id="interest"
                                            type="text"
                                            className="bg-transparent w-36"
                                        />
                                    </label>
                                </form>
                            </div>
                        </div>
                    </main>
                )}
            </div>
        </Box>
    );
}

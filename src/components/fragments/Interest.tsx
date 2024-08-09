import { useState } from "react";
import { Box } from "../elements/Box";
import { Back } from "../elements/Back";

export function Interest() {
    const [interest, setInterest] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <Box title="Interest" onClick={() => {}}>
            <div className="text-[#FFFFFF85] text-sm">
                <span>Add in your interest to find a better match</span>
                <ul className="flex gap-[10px] text-white">
                    {[].map((interest) => {
                        return (
                            <li
                                key={interest}
                                className="bg-white/[.06] px-4 py-2 rounded-full"
                            >
                                {interest}
                            </li>
                        );
                    })}
                </ul>
                {/* <main className="fixed inset-0 bg-gradient h-screen text-white overflow-hidden">
                    <div className="top-16 right-[18px] left-[18px] fixed flex justify-between items-center">
                        <Back onClick={() => {}} />
                        <button
                            onClick={() => {}}
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
                            <form onSubmit={submit}>
                                <label
                                    htmlFor="interest"
                                    className="flex flex-wrap items-center gap-2 bg-white/[0.06] px-4 py-2.5 rounded-md"
                                >
                                    {[].map((interest) => {
                                        return (
                                            <div
                                                key={interest}
                                                className="flex items-center bg-white/10 pl-2.5 rounded"
                                            >
                                                <div>{interest}</div>
                                                <button
                                                    type="button"
                                                    onClick={() => {}}
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
                </main> */}
            </div>
        </Box>
    );
}

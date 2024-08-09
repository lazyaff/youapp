import { TbZodiacVirgo } from "react-icons/tb";

export function Cover() {
    const name = "fulan";

    const backgroundImage =
        "https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B100158-cover.jpg";

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="bg-[#162329] bg-cover bg-center rounded-3xl h-[11.875rem] overflow-hidden"
        >
            <div
                className={`h-full w-full p-4 flex items-end bg-darken-custom`}
            >
                <div>
                    <div>
                        {name}
                        {", 21"}
                    </div>
                    <span className="text-sm">{"Male"}</span>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1 bg-white/[.06] mt-2 px-4 py-1.5 rounded-full w-min">
                            <TbZodiacVirgo className="w-5 h-5" />
                            <span>Virgo</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/[.06] mt-2 px-4 py-1.5 rounded-full w-min">
                            <TbZodiacVirgo className="w-5 h-5" />
                            <span>Pig</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

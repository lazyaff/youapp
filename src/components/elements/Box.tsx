import { BiEditAlt } from "react-icons/bi";

interface Props {
    children: React.ReactNode;
    title: string;
    onClick: () => void;
    openUpdate?: boolean;
}

export function Box({ children, onClick, title, openUpdate = false }: Props) {
    return (
        <div className="relative bg-[#0E191F] pt-[.815rem] pr-4 pb-5 pl-[1.6875rem] rounded-[14px] text-white">
            <div className="pb-4">{title}</div>

            <button
                type="button"
                onClick={onClick}
                className={`${
                    !openUpdate ? "top-2 right-3" : "top-3 right-4"
                } absolute`}
            >
                {!openUpdate ? (
                    <BiEditAlt className="text-xl" />
                ) : (
                    <span className="text-gradient-custom text-sm">
                        Save & Update
                    </span>
                )}
            </button>

            {children}
        </div>
    );
}

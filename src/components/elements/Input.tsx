import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";

interface Props {
    placeholder: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
    placeholder,
    type = "text",
    name,
    value,
    onChange = () => {},
}: Props) {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-md px-4 py-2.5 bg-white/[0.06] placeholder:text-white/40 text-white `}
            />
        </div>
    );
}

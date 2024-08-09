export function Button({
    isFilled,
    children,
}: {
    isFilled: boolean;
    children: React.ReactNode;
}) {
    return (
        <button
            type={isFilled ? "submit" : "button"}
            className={`w-full rounded-md py-2.5 bg-gradient-to-r from-[#62CDCB] to-[#4599DB] 
        ${isFilled ? "shadow-lg shadow-[#62CDCB]/40 " : "opacity-30"} `}
        >
            {children}
        </button>
    );
}

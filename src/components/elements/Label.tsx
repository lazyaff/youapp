type Props = {
    title: string;
    id: string;
    children: React.ReactNode;
};

export function Label({ id, title, children }: Props) {
    return (
        <label
            htmlFor={id}
            className="flex items-center placeholder:text-white/30"
        >
            <div className="flex-1">{title}:</div>
            {children}
        </label>
    );
}

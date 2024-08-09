export function List({ title, value }: { title: string; value: string }) {
    return (
        <div>
            <span className="pr-1.5 text-white/30">{title}:</span>
            <span className="text-white">{value}</span>
        </div>
    );
}

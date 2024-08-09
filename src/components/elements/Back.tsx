import { PiCaretLeftBold } from "react-icons/pi";

export default function Back({ onClick }: { onClick?: () => void }) {
    return (
        <button type="button" onClick={onClick} className="flex items-center">
            <PiCaretLeftBold className="w-6 h-6" />
            <span>Back</span>
        </button>
    );
}

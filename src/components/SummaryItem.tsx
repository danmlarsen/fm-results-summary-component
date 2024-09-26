import { Score } from './App';

export default function SummaryItem({ category, score, icon, color }: Score) {
    return (
        <li className="px-4 h-14 flex justify-between items-center rounded-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundColor: color }}></div>
            <div className="flex items-center gap-3">
                <img className="size-5" src={icon} alt={category + ' icon'} />
                <span className="font-medium" style={{ color: color }}>
                    {category}
                </span>
            </div>
            <div className="space-x-2 font-bold">
                <span>{score}</span>
                <span className="opacity-50">/ 100</span>
            </div>
        </li>
    );
}

import Button from './Button';
import SummaryItem from './SummaryItem';

import { Score } from './App';

export default function Summary({ scores }: { scores: Score[] }) {
    return (
        <div className="p-8 flex flex-col flex-1 text-dark-grey-blue md:px-10 md:py-9">
            <h3 className="mb-6 text-lg font-bold md:text-2xl md:mb-7">Summary</h3>
            <ul className="space-y-4 mb-10">
                {scores.map(item => (
                    <SummaryItem {...item} />
                ))}
            </ul>
            <Button />
        </div>
    );
}

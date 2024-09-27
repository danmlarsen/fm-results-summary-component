import Button from './Button';
import SummaryItem from './SummaryItem';

import { Score } from './App';

export default function Summary({ scores }: { scores: Score[] }) {
    return (
        <div className="px-8 py-6 flex flex-col flex-1 text-dark-grey-blue md:px-10 md:py-9">
            <h3 className="mb-6 text-lg font-bold md:text-2xl md:mb-7">Summary</h3>
            <ul className="space-y-4 mb-6 md:mb-10">
                {scores.map(item => (
                    <SummaryItem {...item} key={item.category} />
                ))}
            </ul>
            <Button />
        </div>
    );
}

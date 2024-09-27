import { Score } from './App';

export default function Result({ scores }: { scores: Score[] }) {
    const avgScore = Math.round(scores.reduce((acc, cat) => acc + cat.score / scores.length, 0));

    return (
        <div className="p-6 pb-10 flex basis-[23rem] justify-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue shadow-3xl md:shadow-none rounded-b-3xl md:rounded-4xl md:px-10 md:py-9">
            <div className="flex flex-col items-center max-w-[16.25rem]">
                <p className="text-light-lavender font-bold mb-6 md:text-2xl md:mb-[2.1875rem] ">Your Result</p>
                <div className="mb-6 md:mb-7 size-[8.75rem] md:size-[12.5rem] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue md:pt-3">
                    <h1 className="text-5xl font-extrabold md:text-7xl ">{avgScore}</h1>
                    <p className="text-light-lavender opacity-50">of 100</p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-center md:text-[2rem] md:leading-normal">Great</h2>
                    <p className="text-base text-center md:text-lg md:leading-tight text-light-lavender">You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </div>
        </div>
    );
}

import { Score } from './App';

export default function Result({ scores }: { scores: Score[] }) {
    const avgScore = Math.round(scores.reduce((acc, cat) => acc + cat.score / scores.length, 0));

    return (
        <div className="p-6 pb-10 flex basis-[368px] justify-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue shadow-3xl md:shadow-none rounded-b-3xl md:rounded-4xl md:px-10 md:py-9">
            <div className="flex flex-col items-center max-w-[260px]">
                <p className="text-light-lavender font-bold md:text-2xl mb-[35px] ">Your Result</p>
                <div className="mb-7 size-[140px] md:size-[200px] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue md:pt-3">
                    <h1 className="text-5xl font-extrabold md:text-7xl ">{avgScore}</h1>
                    <p className="text-light-lavender opacity-50">of 100</p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-center md:text-3xl md:leading-normal">Great</h2>
                    <p className="text-base text-center md:text-lg md:leading-tight text-light-lavender">Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>
        </div>
    );
}

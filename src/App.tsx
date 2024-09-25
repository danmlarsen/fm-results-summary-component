import { ReactNode } from 'react';

import categories from './data.json';

function Button() {
    return <button className="w-full min-h-14 bg-dark-grey-blue text-white rounded-full">Continue</button>;
}

function App() {
    return (
        <div className="min-h-screen bg-very-light-blue text-pale-blue md:flex items-center justify-center">
            <Main>
                <Result />
                <Summary />
            </Main>
        </div>
    );
}

function Main({ children }: { children: ReactNode }) {
    return <main className="flex flex-col bg-white md:min-w-[736px] md:flex-row md:rounded-3xl md:overflow-hidden">{children}</main>;
}

function Result() {
    return (
        <div className="p-6 pb-10 flex justify-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue rounded-b-3xl md:rounded-3xl">
            <div className="flex flex-col gap-6 items-center max-w-[260px]">
                <p>Your Result</p>
                <div className="size-[140px] flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue">
                    <h1 className="text-5xl font-extrabold">76</h1>
                    <p>of 100</p>
                </div>
                <div>
                    <h2 className="text-2xl text-center">Great</h2>
                    <p className="text-base text-center">Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>
        </div>
    );
}

function Summary() {
    return (
        <div className="p-8 flex-1 space-y-6 text-dark-grey-blue">
            <h3 className="text-lg font-bold">Summary</h3>
            <SummaryList />
            <Button />
        </div>
    );
}

function SummaryList() {
    return (
        <ul className="space-y-4">
            {categories.map(item => (
                <SummaryListItem {...item} />
            ))}
        </ul>
    );
}

interface categoryObject {
    category: string;
    score: number;
    icon: string;
    color: string;
}

function SummaryListItem({ category, score, icon, color }: categoryObject) {
    return (
        <li className="p-4 relative flex justify-between items-center rounded-xl" style={{ backgroundColor: color }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-95"></div>
            <div className="flex items-center gap-3 relative">
                <img className="size-5" src={icon} alt="Reaction icon" />
                <span>{category}</span>
            </div>
            <div className="space-x-2 relative">
                <span className="font-bold">{score}</span>
                <span>/ 100</span>
            </div>
        </li>
    );
}

export default App;

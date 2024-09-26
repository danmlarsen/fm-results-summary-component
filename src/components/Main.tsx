import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
    return <main className="min-h-screen md:min-h-[512px] flex flex-col bg-white md:min-w-[736px] md:flex-row md:rounded-4xl md:overflow-hidden md:shadow-3xl">{children}</main>;
}

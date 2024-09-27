export default function Main({ children }: { children: React.ReactNode }) {
    return <main className="min-h-screen md:min-h-[32rem] flex flex-col bg-white w-full md:max-w-[46rem] md:flex-row md:rounded-4xl md:overflow-hidden md:shadow-3xl">{children}</main>;
}

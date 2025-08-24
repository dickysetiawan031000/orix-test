export default function SoalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="max-w-3xl w-full bg-white shadow rounded p-6 mt-6">
                {children}
            </div>
        </div>
    );
}

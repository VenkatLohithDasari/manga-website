import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                {/* Navbar will go here */}
                <h1 className="text-xl font-bold">Manga Website</h1>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>© {new Date().getFullYear()} Manga Website</p>
            </footer>
        </div>
    );
}

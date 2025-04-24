// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <Link href="/"><h1 className="text-2xl font-bold">BLUE MARINHO</h1></Link>
            <nav className="space-x-4">
                <Link href="/midia">Mídia</Link>
                <Link href="/sobre">Sobre</Link>
            </nav>
        </header >
    );
}

// app/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/bluemarinho-logo.png'



export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">

            <Link href="/">
                <div className='w-30 lg:w-50'>
                    <Image src={logo} alt='Blue Marinho Logo'></Image>
                </div>
            </Link>
            <nav className="space-x-4">
                <Link href="/sobre" className='text-xl hover:text-orange-400 transition duration-200'><h2>Quem Somos</h2></Link>
            </nav>
        </header >
    );
}

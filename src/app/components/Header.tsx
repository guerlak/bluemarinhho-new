// app/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/bluemarinho-logo.png'
import { GiGuitar } from 'react-icons/gi';
import { BiInfoCircle } from 'react-icons/bi';



export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <div className='w-30 lg:w-50'>
                <Link href="/"><Image src={logo} alt='Blue Marinho Logo'></Image></Link>
            </div>
            <nav className="space-x-4">
                <Link href="/sobre" className='text-xl hover:text-orange-400 transition duration-200'>Quem Somos</Link>
            </nav>
        </header >
    );
}

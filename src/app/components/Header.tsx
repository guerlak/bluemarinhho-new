
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/bluemarinho-logo.png'

export default function Header() {
    return (
        <header className="flex justify-center items-center p-6 bg-white shadow-md">
            <Link href="/">
                <div className='w-30 lg:w-50'>
                    <Image src={logo} alt='Blue Marinho Logo' />
                </div>
            </Link>
        </header >
    );
}

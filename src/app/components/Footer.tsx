// app/components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-8 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">Blue Marinho</h3>
                    <p className="text-sm text-gray-400">Versões potentes do melhor do Rock n Roll  🎸</p>
                    <h3 className='mt-4'>Contato</h3>
                    <p className="text-sm text-gray-400">Filipe: (21) 98844-4059</p>
                </div>


                <div className="flex flex-col gap-6 items-center">


                    <div className='flex space-x-7'>
                        <a href="https://instagram.com/bandabluemarinho" target="_blank" rel="noreferrer">
                            <FaInstagram className="text-xl hover:text-pink-400" size={40} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-xl hover:text-red-500" size={40} />
                        </a>
                    </div>
                    <Link href="/sobre" className="text-gray-500">Sobre nós</Link>

                </div>
            </div>

            <div className="text-center mt-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Blue Marinho. Todos os direitos reservados.
            </div>

        </footer>
    );
}

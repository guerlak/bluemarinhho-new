'use client'
import Link from "next/link";
//                         <p><strong>Data:</strong> {selecionado.data}</p>'

import { useState } from "react";

export default function Galery() {
    const imagens = [
        '/galeria/img00001.jpeg',
        '/galeria/img00002.jpeg',
        '/galeria/img00003.jpeg',
        '/galeria/img00004.jpeg'
    ];

    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

    return (
        <section id="galeria" className="p-8 sm:w-1/2">
            <Link href="/galeria" >
                <h3 className="text-2xl font-bold mb-6">Galeria</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {imagens.map((src, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-gray-200 overflow-hidden rounded-lg shadow cursor-pointer"
                            onClick={() => setImagemSelecionada(src)}
                        >
                            <img
                                src={src}
                                alt={`Imagem ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                {/* Modal com zoom */}
            </Link>

        </section>
    );
}

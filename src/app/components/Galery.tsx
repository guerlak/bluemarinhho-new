'use client'
//                         <p><strong>Data:</strong> {selecionado.data}</p>'

import { useState } from "react";

export default function Galery() {
    const imagens = [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img5.jpg',

    ];

    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

    return (
        <section id="galeria" className="p-8 sm:w-1/2">
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
            {imagemSelecionada && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setImagemSelecionada(null)}
                >
                    <div
                        className="max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
                    >
                        <button
                            className="text-white text-2xl absolute top-6 right-6 hover:text-gray-300"
                            onClick={() => setImagemSelecionada(null)}
                        >
                            ✕
                        </button>
                        <img
                            src={imagemSelecionada}
                            alt="Imagem ampliada"
                            className="w-full h-auto rounded shadow-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

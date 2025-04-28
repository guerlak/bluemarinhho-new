'use client'
import { BiPlusCircle } from 'react-icons/bi';
import eventos from '../data/eventos.json';
import { useState } from 'react';

type Evento = {
    data: string;
    evento: string;
    local: string;
    link?: string;
    tipo: string;
    descricao: string;
    endereco: string;
};

function parseDate(data: string) {
    const [dia, mes, ano] = data.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
}

export default function Agenda() {
    const [selecionado, setSelecionado] = useState<Evento | null>(null);

    const eventosOrdenados = [...eventos].sort((a, b) => {
        return parseDate(a.data).getTime() - parseDate(b.data).getTime();
    });

    return (
        <section id="agenda" className="p-8 bg-gray-50 sm:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Agenda</h3>
            <ul className="space-y-4">
                {eventosOrdenados.map((item, index) => (
                    <li
                        key={index}
                        className="border p-4 rounded-md shadow-sm bg-white hover:shadow-md transition flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold">{item.data} - {item.evento}</p>
                            <p className="text-gray-600">{item.local}</p>
                        </div>
                        <button
                            onClick={() => setSelecionado(item)}
                            className="text-orange-400 cursor-pointer"
                        >
                            <BiPlusCircle size={30} />
                        </button>
                    </li>
                ))}
            </ul>

            {/* Modal de detalhes simples */}
            {selecionado && (
                <div className="fixed inset-0 bg-black opacity-94 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={() => setSelecionado(null)}
                        >
                            ✕
                        </button>
                        <h4 className="text-xl font-bold mb-2">{selecionado.evento}</h4>

                        <p><strong>Data:</strong> {selecionado.data}</p>

                        <p><strong>Endereço:</strong> {selecionado.endereco}</p>
                        <p className="mt-2">{selecionado.descricao}</p>

                        {selecionado.link && (
                            <a
                                href={selecionado.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4"
                            >
                                <span className='text-orange-400 font-black'>Acessar pagina do evento</span>
                            </a>
                        )}
                    </div>
                </div>
            )}

        </section>
    );
}

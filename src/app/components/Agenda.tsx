'use client'
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { useState } from 'react';
import { Evento } from '../lib/types/types';
import { dateFormatter } from '../utils/tools';

export default function Agenda({ eventos }: { eventos: Evento[] }) {

    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="agenda" className="p-8 bg-gray-50 ">
            <h3 className="text-2xl font-bold mb-4">Agenda</h3>
            <ul className="space-y-4">
                {eventos.map((item, index) => (
                    <li
                        key={item.id}
                        className="border rounded-md shadow-sm bg-white hover:shadow-md transition-all duration-300"
                    >
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left p-4 flex justify-between items-center cursor-pointer focus:outline-none"
                        >
                            <p className="font-semibold text-lg">{dateFormatter.format(item.data_hora)} - {item.nome}</p>
                            {openIndex === index ? (
                                <BiMinusCircle size={30} className="text-orange-400" />
                            ) : (
                                <BiPlusCircle size={30} className="text-orange-400" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 p-4' : 'max-h-0'}`}
                        >
                            <p className="mt-2 text-gray-700">
                                {item.descricao || 'Nenhum detalhe disponível.'}
                            </p>
                            <p className="mt-2 text-gray-700">
                                Endereço: {item.endereco || 'Nenhum detalhe disponível.'}
                            </p>
                            <div className="mt-4 text-orange-400 w-40 flex">
                                {item.link ? <a href={item.link} target='_blank' className='max-md flex'>Mais informações</a> : ''}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

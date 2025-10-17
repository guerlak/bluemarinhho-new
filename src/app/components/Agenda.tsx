'use client'
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { useState } from 'react';
import { formatDateBR } from '../utils/tools';


export default function Agenda({ eventos }: { eventos: any[] }) {

    //console.log(eventos);

    const formatter = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
        // *** AQUI ESTÁ A CHAVE: ESPECIFICAR O FUSO HORÁRIO ***
        timeZone: 'America/Sao_Paulo'
    });


    const [openIndex, setOpenIndex] = useState(null);

    // Função para alternar o estado de um item.
    const handleToggle = (index: any) => {
        // Se o item clicado já estiver aberto, fecha-o.
        // Caso contrário, abre o item clicado.
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <section id="agenda" className="p-8 bg-gray-50 ">
            <h3 className="text-2xl font-bold mb-4">Agenda</h3>
            <ul className="space-y-4">
                {eventos.map((item, index) => (
                    <li
                        key={index}
                        className="border rounded-md shadow-sm bg-white hover:shadow-md transition-all duration-300"
                    >
                        {/* Botão para o cabeçalho do accordion.
                    Toda a área do cabeçalho é clicável. */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left p-4 flex justify-between items-center cursor-pointer focus:outline-none"
                        >

                            <div>
                                <p className="font-semibold text-lg">{item.data_hora.toLocaleDateString('pt-BR')} - {item.nome}</p>

                            </div>
                            {/* Ícone que muda de acordo com o estado do accordion. */}
                            {openIndex === index ? (
                                <BiMinusCircle size={30} className="text-orange-400" />
                            ) : (
                                <BiPlusCircle size={30} className="text-orange-400" />
                            )}
                        </button>

                        {/* Conteúdo que é exibido ou ocultado.
                    As classes 'max-h-0' e 'overflow-hidden' o ocultam. */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 p-4' : 'max-h-0'
                                }`}
                        >
                            {/* Conteúdo adicional que você quer mostrar quando o accordion estiver aberto */}
                            <p className="mt-2 text-gray-700">
                                {item.descricao || 'Nenhum detalhe disponível.'}
                            </p>
                            <p className="mt-2 text-gray-700">
                                Endereço: {item.endereco || 'Nenhum detalhe disponível.'}
                            </p>

                            <p className="mt-4 text-gray-700">
                                <a href={item.link} target='_blank' className='bg-orange-300 p-2 rounded-sm hover:bg-orange-400 transition'>Pagina do evento</a>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    );
}

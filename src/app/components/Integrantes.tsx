'use client';

type Integrante = {
    nome: string;
    funcao: string;
    frase: string;
    imagem: string;
};

const integrantes: Integrante[] = [
    {
        nome: 'Paola Marinho',
        funcao: 'Vocal',
        frase: '"A distorção é a minha voz."',
        imagem: '/integrantes/paola.jpg',
    },
    {
        nome: 'Felipe Campos',
        funcao: 'Guitarra',
        frase: '"Groove é alma, não técnica."',
        imagem: '/integrantes/pinous.jpg',
    },
    {
        nome: 'Fabio Tavares',
        funcao: 'Guitarra',
        frase: '"A batida é o coração do rock."',
        imagem: '/integrantes/fabio.jpg',
    },
    {
        nome: 'Guilherme Braun',
        funcao: 'Baixo',
        frase: '"A batida é o coração do rock."',
        imagem: '/integrantes/braun.jpg',
    },
    {
        nome: 'Rafael Guerlak',
        funcao: 'Bateria',
        frase: '"A batida é o coração do rock."',
        imagem: '/integrantes/guerlak.jpg',
    },

];

export default function Integrantes() {
    return (
        <section className="p-8 bg-white" id="integrantes">
            <h2 className="text-3xl font-bold text-center mb-10">Quem Somos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {integrantes.map((membro, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition"
                    >
                        <img
                            src={membro.imagem}
                            alt={membro.nome}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold">{membro.nome}</h3>
                            <p className="text-sm text-gray-600 mb-2">{membro.funcao}</p>
                            {/* <p className="italic text-gray-500 text-sm">"{membro.frase}"</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

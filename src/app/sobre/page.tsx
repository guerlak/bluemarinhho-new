import Integrantes from '../components/Integrantes';

export default function Sobre() {
    return (
        <>
            <section className="p-8 max-w-4xl mx-auto">
                <section className="p-8 bg-white text-gray-800">
                    <h2 className="text-3xl font-bold mb-4">A Energia do Rock e Blues em versões únicas</h2>
                    <p className="mb-4">
                        Nascida da paixão pela música, a <strong>Blue Marinho</strong> é uma banda formada por cinco amigos unidos por um amor profundo pelos clássicos do rock e blues. Juntos, eles combinam suas habilidades individuais e química coletiva para criar uma <strong>experiência sonora única</strong>.
                    </p>
                    <p className="mb-4">
                        A marca registrada da banda são suas versões carregadas de <strong>energia e personalidade</strong>, que refletem tanto o respeito pela obra original quanto a ousadia de reinventar canções conhecidas e amadas por todos.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">O Que Nos Define</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Cinco amigos unidos pela música</li>
                        <li>Versões e arranjos com dose extra de energia e personalidade para clássicos atemporais</li>
                        <li>Energia contagiante em cada apresentação</li>
                        <li>Repertório diversificado e potente</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Nosso Repertório</h3>
                    <p className="mb-4">
                        A <strong>Blue Marinho</strong> navega por um vasto oceano musical, trazendo o melhor de diferentes épocas e estilos. Dos <em>Beatles</em> ao <em>White Stripes</em>, dos <em>Mutantes</em> à <em>Nina Simone</em>, do blues clássico ao rock contemporâneo. O repertório passa por <em>Led Zeppelin</em>, <em>Stevie Wonder</em>, <em>Guns N’ Roses</em>, <em>Jet</em>, <em>The Animals</em>, <em>Cazuza</em>, <em>Janis Joplin</em> e muito mais.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Nossa Missão</h3>
                    <p className="mb-4">
                        Buscamos não apenas reproduzir, mas <strong>reinventar os clássicos</strong> com o cuidado e respeito que nossas obras favoritas merecem. Cada música em nosso repertório ganha uma nova vida, carregada com nossa <strong>paixão e criatividade</strong>. Nosso objetivo é proporcionar uma <strong>experiência musical</strong> que faça o público redescobrir suas canções favoritas de uma forma totalmente nova e emocionante.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Venha Nos Conhecer</h3>
                    <p className="mb-4">
                        Se você é fã de <strong>boa música</strong>, performances cheias de <strong>energia</strong> e novas interpretações de clássicos atemporais, a Blue Marinho é a banda que você precisa conhecer. Prepare-se para uma jornada musical inesquecível!
                    </p>

                    <p className="mt-4 text-blue-600 font-semibold">#BlueMarinho #MúsicaAoVivo #RockNRoll</p>
                </section>

            </section>
            <Integrantes />
        </>
    );
}

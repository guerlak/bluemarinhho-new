// app/layout.tsx
import './globals.css';
import { Bebas_Neue, Roboto_Condensed } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Blue Marinho',
  description: 'Site oficial da banda Blue Marinho. Versões potentes com o melhor do blues e rock.',
};

const headingFont = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'], // Bebas Neue geralmente só tem o peso regular (400)
  variable: '--font-heading', // Define uma variável CSS para usar a fonte
  display: 'swap',
});

// 2. Configuração da fonte Roboto Condensed para o Corpo do Texto
// É legível e tem um visual "condensado" que complementa o estilo.
const bodyFont = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Carregando pesos Light, Regular e Bold
  variable: '--font-body', // Define uma variável CSS para usar a fonte
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className='max-w-screen-xl mx-auto'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}

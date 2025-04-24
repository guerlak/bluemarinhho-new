// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Blue Marinho',
  description: 'Site oficial da banda Blue Marinho',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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

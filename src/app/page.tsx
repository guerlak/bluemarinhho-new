// app/page.tsx
import Agenda from './components/Agenda';
import Galery from './components/Galery';
import Hero from './components/Hero';
import Videos from './components/Videos';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='sm:flex'>
        <Agenda />
        <Galery />
      </div>
      <Videos />
    </>
  );
}

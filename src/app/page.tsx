// app/page.tsx
import Agenda from './components/Agenda';
import Galery from './components/Galery';
import Hero from './components/Hero';
import Videos from './components/Videos';
import { fetchEvents } from '@/app/lib/data';

export default async function Home() {

  const eventos = await fetchEvents();

  return (
    <>
      <Hero />
      <div className='sm:flex'>
        <Agenda eventos={eventos} />
        <Galery />
      </div>
      <Videos />
    </>
  );
}

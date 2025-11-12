
import { unstable_cache } from 'next/cache';
import Agenda from './components/Agenda';
import Hero from './components/Hero';
import Videos from './components/Videos';
import { getAllEvents } from '@/app/lib/data';

export const revalidate = 1000;

export default async function Home() {

  const eventos = await getAllEvents();

  return (
    <>
      <Hero />
      <Agenda eventos={eventos} />
      <Videos />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (

    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Camada escura por cima do vídeo */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/*<h1 className="text-5xl md:text-6xl font-bold mb-4">Blue Marinho</h1>
                {/* <p className="text-xl md:text-2xl">Rock autoral com alma e presença de palco</p> */}
      </div>
    </section>
  );
}


{/* <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Vídeo de fundo 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Camada escura por cima do vídeo 
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Conteúdo sobreposto 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Blue Marinho</h1>
        <p className="text-xl md:text-2xl">Rock autoral com alma e presença de palco</p>
      </div>
    </section> */}
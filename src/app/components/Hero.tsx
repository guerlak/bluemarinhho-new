import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/home-pics/foto-home.jpg"
      alt="Foto da banda no palco com a plateia atrás"
      className="h-auto object-cover"
      width={1920}
      height={700}
    />
  );
}


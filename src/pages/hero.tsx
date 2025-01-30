'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();

    const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX; // Changed from 'let' to 'const'
    const scrollLeft = scrollRef.current.scrollLeft;

    const onMove = (event: MouseEvent | TouchEvent) => {
      const x = 'clientX' in event ? event.clientX : event.touches[0].clientX;
      const walk = (startX - x) * 1.5;
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft + walk;
      }
    };

    const onEnd = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
  };

  return (
    <div>
      <h1 className="text-5xl text-[#546373] font-bold text-center my-10">OUR SERVICES TO THESE PROBLEMS</h1>
      <div
        ref={scrollRef}
        className="overflow-x-auto flex py-5 space-x-4 px-4 scrollbar-hide snap-x snap-mandatory"
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
        style={{ cursor: 'grab', userSelect: 'none' }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    title: 'COLONES DROPS',
    subtitle: 'Colon Detoxifier',
    description: 'Supports digestion and detoxifies the colon.',
    image: '/assets/myscroll/1.png',
  },
  {
    title: 'PNEUMA DROPS',
    subtitle: 'Detoxifier for Lungs',
    description: 'Strengthens respiratory health and eases breathing.',
    image: '/assets/myscroll/2.png',
  },
  {
    title: 'LYMPHA DROPS',
    subtitle: 'Detoxifier for Lymphatic System',
    description: 'Promotes detoxification and boosts immunity.',
    image: '/assets/myscroll/3.png',
  },
  {
    title: 'OVA-CYST DROPS',
    subtitle: 'For PCOD',
    description: 'Supports ovarian health and balances hormones.',
    image: '/assets/myscroll/4.png',
  },
];

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

function ProductCard({ title, subtitle, description, image }: ProductCardProps) {
  return (
    <div className="relative w-[300px] h-[500px] bg-white rounded-2xl border-2 border-black flex-shrink-0 select-none shadow-lg hover:scale-105 transition-transform snap-center mb-40">
      <div className="relative w-full h-full rounded-2xl border-2 border-black">
        <div className="absolute w-full h-[350px] top-[40px] left-0">
          <p className="absolute w-full top-0 left-0 font-bold text-[#3f3b3b] text-3xl text-center leading-8">
            {title}
            <br />
            <span className="text-[#4c4242] text-xl">{subtitle}</span>
          </p>
          <p className="absolute w-full top-[250px] left-0 font-medium text-[#3f3b3b] text-[18px] text-center leading-6 px-3">
            {description}
          </p>
          <div className="absolute w-64 h-[120px] top-[100px] left-[20px]">
            <Image
              src={image}
              alt={title}
              width={256}
              height={120}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;

import React, { useRef } from "react";

function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    let startX = 0;
    if ('clientX' in e) {
      startX = e.clientX;
    } else {
      startX = e.touches[0].clientX;
    }
    const scrollLeft = scrollRef.current.scrollLeft;

    const onMove = (event: MouseEvent | TouchEvent) => {
      const x = 'clientX' in event ? event.clientX : event.touches[0].clientX;
      const walk = (startX - x) * 1.5;
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft + walk;
      }
    };

    const onEnd = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onEnd);
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto flex py-5 space-x-4 px-4 scrollbar-hide snap-x snap-mandatory"
      onMouseDown={handleDrag}
      onTouchStart={handleDrag}
      style={{ cursor: "grab", scrollBehavior: "smooth", userSelect: "none" }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

const products = [
  {
    title: "COLONES DROPS",
    subtitle: "Colon Detoxifier",
    description:
      "Colon drops are a natural homeopathic remedy designed to support digestive health, relieve constipation, and detoxify the colon, promoting overall gut wellness.",
    image: "/assets/myscroll/1.png",
    elementImage: "/assets/myscroll/1-1.png",
  },
  {
    title: "PNEUMA DROPS",
    subtitle: "Detoxifier for Lungs",
    description:
      "Pneuma drops are a homeopathic remedy crafted to strengthen respiratory health, alleviate breathing difficulties, and support relief from conditions like asthma and bronchitis naturally.",
    image: "/assets/myscroll/2.png",
    elementImage: "/assets/myscroll/2-1.png",
  },
  {
    title: "LYMPHA DROPS",
    subtitle: "Detoxifier for Lymphatic System",
    description:
      "Lympha drops are a homeopathic remedy designed to support lymphatic system health, promote detoxification, and boost immunity for overall well-being.",
    image: "/assets/myscroll/3.png",
    elementImage: "/assets/myscroll/3-1.png",
  },
  {
    title: "OVA-CYST DROPS",
    subtitle: "For PCOD",
    description:
      "Ova-Cyst drops are a homeopathic remedy formulated to support ovarian health, help manage symptoms of ovarian cysts, and promote hormonal balance naturally.",
    image: "/assets/myscroll/4.png",
    elementImage: "/assets/myscroll/4-1.png",
  },
  {
    title: "NEPHRA DROPS",
    subtitle: "Renal Detoxifier",
    description:
      "Nephra drops are a homeopathic remedy designed to support kidney health, assist in detoxification, and promote relief from urinary tract discomforts naturally.",
    image: "/assets/myscroll/5.png",
    elementImage: "/assets/myscroll/5-1.png",
  },
  {
    title: "HAIMATOS DROPS",
    subtitle: "Blood Detoxifier",
    description:
      "Haimatos drops are a homeopathic remedy formulated to support healthy blood circulation, improve hemoglobin levels, and aid in addressing anemia naturally.",
    image: "/assets/myscroll/6.png",
    elementImage: "/assets/myscroll/6-1.png",
  },
  {
    title: "HEPATICUS DROPS",
    subtitle: "Liver Detoxifier",
    description:
      "Hepaticus drops are a homeopathic remedy crafted to support liver health, aid in detoxification, and promote better digestion and overall metabolic balance.",
    image: "/assets/myscroll/7.png",
    elementImage: "/assets/myscroll/7-1.png",
  },
  {
    title: "CALCAREA PHOSPHORICA 6X",
    subtitle: "For Teeth and Bones",
    description:
      "Calcarea Phosphorica is a homeopathic remedy known for supporting healthy bone development, promoting healing of fractures, and addressing calcium deficiencies naturally.",
    image: "/assets/myscroll/8.png",
    elementImage: "/assets/myscroll/8-1.png",
  },
  {
    title: "CHILDREN DROPS",
    subtitle: "For Children",
    description:
      "Children's drops are gentle homeopathic remedies specially formulated to support overall growth, immunity, and relief from common childhood ailments naturally and safely.",
    image: "/assets/myscroll/9.png",
    elementImage: "/assets/myscroll/9-1.png",
  },
];

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  elementImage: string;
}

function ProductCard({ title, subtitle, description, image, elementImage }: ProductCardProps) {
  return (
    <div className="relative w-[300px] h-[500px] bg-white rounded-2xl border-2 border-black flex-shrink-0 select-none shadow-lg hover:scale-105 transition-transform snap-center">
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
          <img
            className="absolute w-64 h-[120px] top-[100px] left-[20px] object-cover rounded-lg"
            alt={title}
            src={image}
          />
          <img
            className="absolute w-[80px] h-[100px] top-[150px] left-[180px] object-contain"
            alt={`${title} Element`}
            src={elementImage}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;

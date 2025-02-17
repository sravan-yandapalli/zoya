import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/app/globals.css";

const diseases = [
  {
    name: "Hormonal Imbalance",
    img: "/assets/discroll/1.png",
    description:
      "A hormonal imbalance occurs when hormone levels are too high or too low, leading to significant changes in your body that may require treatment.",
  },
  {
    name: "Infertility",
    img: "/assets/discroll/2.png",
    description:
      "Infertility affects the ability to conceive or carry a pregnancy to term, often caused by hormonal imbalances, blocked fallopian tubes, or low sperm count.",
  },
  {
    name: "Skin Problems",
    img: "/assets/discroll/3.png",
    description:
      "Skin conditions range from acne to eczema and psoriasis, often triggered by genetics, allergens, or environmental factors.",
  },
  {
    name: "PCOS",
    img: "/assets/discroll/4.png",
    description:
      "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing irregular periods, weight gain, and infertility, manageable with lifestyle changes.",
  },
  {
    name: "Arthritis",
    img: "/assets/discroll/5.png",
    description:
      "Arthritis causes joint inflammation and stiffness, leading to pain and reduced mobility. Treatment focuses on pain management and improving joint function.",
  },
  {
    name: "Diabetes",
    img: "/assets/discroll/6.png",
    description:
      "Diabetes is a chronic condition where the body struggles to regulate blood sugar levels. Management includes a balanced diet, exercise, and medication.",
  },
  {
    name: "Asthma",
    img: "/assets/discroll/7.png",
    description:
      "Asthma is a respiratory condition that causes airway inflammation, leading to breathing difficulties, wheezing, and coughing.",
  },
  {
    name: "Migraine",
    img: "/assets/discroll/8.png",
    description:
      "Migraine is a neurological condition with intense headaches, often accompanied by nausea and sensitivity to light and sound.",
  },
];

interface DiseaseCardProps {
  name: string;
  img: string;
  description: string;
}

const DiseaseCard = ({ name, img, description }: DiseaseCardProps) => (
  <div className="min-w-[320px] max-w-[360px] p-6 bg-[#9584AA]  rounded-2xl shadow-lg flex flex-col items-center text-center border border-gray-300 select-none h-[380px]">
    <Image
      src={img}
      alt={name}
      width={64} // Image width in pixels
      height={64} // Image height in pixels
      className="object-contain select-none pointer-events-none mb-4"
    />
    <h3 className="text-xl font-semibold text-white">{name}</h3>
    <p className="text-md text-gray-400 mt-3 px-4">{description}</p>
  </div>
);

export default function DiseaseSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div id="dis" className="relative w-full max-w-6xl mx-auto p-8 rounded-xl shadow-md mb-20">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-8 select-none">
        Diseases We Treat
      </h2>
      <div className="relative flex items-center">
        <button
          className="absolute left-0 z-10 p-4 bg-white shadow-md rounded-full hover:bg-purple-200 transition"
          onClick={() => scroll(-350)}
        >
          <ChevronLeft size={28} className="text-purple-700" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-12 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {diseases.map((disease) => (
            <DiseaseCard key={disease.name} {...disease} />
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-4 bg-white shadow-md rounded-full hover:bg-purple-200 transition"
          onClick={() => scroll(350)}
        >
          <ChevronRight size={28} className="text-purple-700" />
        </button>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

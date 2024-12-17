import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

export const Carrousel = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Array.isArray(children) ? children : [children];

  const totalItems = childrenArray.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <main className="flex w-[600px] h-[900px] flex-col gap-2 p-4 mx-auto items-center relative">
      <button
        onClick={previous}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black_rain-900 text-white p-2 rounded-full ml-4 z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black_rain-900 text-white p-2 rounded-full mr-4 z-10"
      >
        <ChevronRight />
      </button>

      <section className="relative flex transition-transform duration-500 ease-in-out overflow-hidden w-[360px]">
        {childrenArray.map((c, index) => (
          <div
            className="w-full h-full flex-shrink-0 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            key={index}
          >
            {c}
          </div>
        ))}
      </section>
    </main>
  );
};
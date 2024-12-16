import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useState, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Carrousel = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Children.toArray(children);
  const totalItems = childrenArray.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <main className="flex gap-2 p-4 w-full items-center">
      <section className="flex gap-2 overflow-x-visible px-10">
        {children && Array.isArray(children) && children.map((c) => c)}
        {children && !Array.isArray(children) && children}
      </section>
    </main>
  );
};

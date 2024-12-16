import { ArrowDown, ArrowUp, Bus, MapPin } from "lucide-react";

interface Props {
  name: string;
  returning: boolean;
}

export const BusCard = ({ name, returning }: Props) => {
  return (
    <article className="rounded-md border h-fit flex justify-between items-center p-2 dark:border-shark-900">
      <section className="flex items-center gap-2">
        <Bus size={32} strokeWidth={1} absoluteStrokeWidth />
        <p className="font-bold text-xl">{name}</p>
      </section>
      <section className="flex items-center gap-2">
        {returning ? (
          <ArrowDown size={32} className="text-red-500" strokeWidth={2} absoluteStrokeWidth />
        ) : (
          <ArrowUp size={32} className="text-green-500" strokeWidth={2} absoluteStrokeWidth />
        )}
        
        <button className="w-12 h-12 flex items-center justify-center rounded-md">
          <MapPin size={32} strokeWidth={1} absoluteStrokeWidth />
        </button>
      </section>
    </article>
  );
};

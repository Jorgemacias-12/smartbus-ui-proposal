import { BusFront } from "lucide-react";

interface Props {
  name: string;
  description: string;
}

export const BusStop = ({ name, description }: Props) => {
  return <article className="flex items-center bg-gray-200 dark:bg-black_rain-900 rounded-md p-2 gap-2">
    <BusFront className="dark:text-white" size={32} />
    <p>{name} - {description}</p>
  </article>;
};

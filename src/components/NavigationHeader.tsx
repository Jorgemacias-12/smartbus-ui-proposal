import { ArrowLeft, CreditCard } from "lucide-react";

interface Props {
  label: string;
}

export const NavigationHeader = ({ label }: Props) => {
  return (
    <header className="bg-smartbus_blue p-4 flex justify-between items-center w-full text-white">
      <ArrowLeft />

      <h1 className="flex-1 text-center text-2xl">{label}</h1>

      <CreditCard />
    </header>
  );
};

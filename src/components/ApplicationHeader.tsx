import { CreditCard, Menu, User } from "lucide-react";
import React from "react";

export const ApplicationHeader = () => {
  return (
    <header className="bg-smartbus_blue p-4 flex justify-between items-center w-full">
      <Menu size={32} color="white" />

      <section className="flex gap-2 items-center text-white">
        <CreditCard size={32} />
        <span className="text-sm">$120</span>
      </section>

      <User size={32} color="white" />
    </header>
  );
};

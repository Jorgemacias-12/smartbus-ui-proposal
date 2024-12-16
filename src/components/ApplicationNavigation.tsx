import { Bell, Bus, Headset, MapPin, QrCode } from "lucide-react";
import React from "react";

export const ApplicationNavigation = () => {
  return (
    <nav className="bg-smartbus_blue w-full p-4 text-white flex justify-evenly">
      <Bus size={32} />
      <QrCode size={32} />
      <MapPin size={32} />
      <Bell size={32} />
      <Headset size={32} />
    </nav>
  );
};

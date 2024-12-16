import { CreditCard, LogOut, Menu, Phone, Settings, X } from "lucide-react";
import { useState } from "react";
import { type MouseEvent } from "react";

export const ApplicationSidebar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuShow = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  const handleMenuHide = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    setShowMenu(false);
  };

  const menuHiddenClasses = "pointer-events-none opacity-0 -translate-x-[1rem]";
  const menuShownClasses = "opacity-100 translate-x-0 pointer-events-auto";

  return (
    <>
      <button
        onClick={handleMenuShow}
        className="absolute  right-0 bottom-0 m-4 rounded-md bg-smartbus_blue text-white p-2 z-10"
      >
        {showMenu ? <X /> : <Menu />}
      </button>

      <section className={`w-full h-full bg-black/25`} onClick={handleMenuHide}>
        <aside
          className={`flex flex-col justify-between w-72 h-full p-4 bg-smartbus_blue text-white transform duration-500 ease-in-out ${
            showMenu ? menuShownClasses : menuHiddenClasses
          }`}
        >
          <section>
            <button onClick={handleMenuShow}>
              <X size={32} />
              <span></span>
            </button>
          </section>

          <section className="flex flex-col gap-2">
            <button className="flex items-center gap-2">
              <Phone size={32} />
              <span>Contacto</span>
            </button>
            <button className="flex items-center gap-2">
              <Settings size={32} />
              <span>Ajustes</span>
            </button>
            <button className="flex items-center gap-2">
              <CreditCard size={32} />
              <span>Ajustes</span>
            </button>
            <button className="flex items-center gap-2">
              <Settings size={32} />
              <span>Ajustes</span>
            </button>
          </section>

          <section>
            <button className="flex items-center gap-2 h-10 px-2 rounded-md w-full">
              <LogOut />
              <span>Cerrar sesión</span>
            </button>
          </section>
        </aside>
      </section>
    </>
  );
};

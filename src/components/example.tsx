import React from "react";
import Image from "next/image";
import { Input } from "./Input";

export const example = () => {
  return (
    <div>
      <section className="flex-1 w-full h-full flex justify-center items-center">
        <Image src="/smartbus.png" alt="" width="256" height="256" />
      </section>

      <form className="w-full px-4 h-fit flex flex-col gap-2">
        <section>
          <Input
            type="text"
            id="login"
            placeholder=" "
            label="Correo electrónico o Nombre de usuario"
            rounded
          />

          <Input
            type="password"
            id="password"
            placeholder=" "
            label="Contraseña"
            rounded
          />
        </section>

        <button
          type="button"
          className="bg-smartbus_deepblue dark:bg-smartbus_emerald text-white px-2 rounded-full h-10 mx-8"
        >
          Iniciar sesión
        </button>
      </form>

      <section className="w-full flex flex-col border-t p-4 gap-8 items-center">
        <button
          type="button"
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 h-fit"
        >
          <Image
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
            width={24}
            height={24}
          />
          <span>Iniciar sesión con Google</span>
        </button>

        <p>O</p>

        <a href="#" className="underline text-gray-500">
          Registrarse
        </a>

        <p className="text-sm">
          Todos los derechos reservados SmartBus {new Date().getFullYear()}.
          &copy;
        </p>
      </section>
    </div>
  );
};

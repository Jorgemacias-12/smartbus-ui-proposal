import Image from "next/image";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Carrousel } from "@/components/Carrousel";
import { PhoneCard } from "@/components/PhoneCard";
import { Input } from "@/components/Input";
import { ArrowLeft, CreditCard } from "lucide-react";
import { NumericInput } from "@/components/NumericInput";
import { Select } from "@/components/Select";
import {
  cardTypes,
  quantityToReload,
  routeLocations,
  routes,
  stops,
} from "@/data";
import { Application } from "@/components/Application";
import { BusCard } from "@/components/BusCard";
import { MapView } from "@/components/MapView";
import { ApplicationSidebar } from "@/components/ApplicationSidebar";
import { processPaddingClasses } from "@/utils";
import { NavigationHeader } from "@/components/NavigationHeader";
import { BusStop } from "@/components/BusStop";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <section className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-center">
          Prueba de concepto de UI para SmartBusApp
        </h1>

        <ThemeSwitch />
      </section>

      <Carrousel>
        <PhoneCard className="flex flex-col items-center justify-between">
          <section className="flex-1 w-full flex justify-center items-center">
            <Image src="/smartbus.png" alt="" width="256" height="256" />
          </section>

          <p className="flex flex-col gap-2 justify-center items-center text-gray-500 text-sm mb-10 dark:text-white">
            <span>Powered by Partum Unit Studio.</span>
            <span>
              Copyrights from SmartBus {new Date().getFullYear()}. &copy;
            </span>
          </p>
        </PhoneCard>

        <PhoneCard className="flex flex-col gap-2 justify-between items-center">
          <section className="w-full flex items-center justify-center pt-36">
            <Image src="/smartbus.png" alt="" width="256" height="256" />
          </section>

          <form className="w-full px-4 h-full flex flex-col gap-4">
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

          <section className="w-full flex flex-col h-full border-t p-4 gap-6 items-center">
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
        </PhoneCard>

        <PhoneCard className="flex flex-col gap-6">
          <header className="flex items-center justify-between">
            <ArrowLeft
              className="cursor-pointer"
              size={32}
              strokeWidth={2}
              absoluteStrokeWidth
            />

            <p>Registro 1/2</p>
          </header>

          <section className="flex flex-col gap-2 mx-4">
            <h1 className="font-bold text-center text-2xl">Registro</h1>

            <p className="text-sm">
              ¡Bienvenido! llene los datos pedidos a continuación para terminar
              de crear su cuenta, por favor.
            </p>
          </section>

          <form className="mx-4">
            <section>
              <Input
                type="text"
                id="name"
                placeholder=" "
                label="Nombre *"
                rounded
              />

              <Input
                type="text"
                id="secondName"
                placeholder=" "
                label="Segundo nombre "
                rounded
              />

              <Input
                type="text"
                id="lastName"
                placeholder=" "
                label="Apellido Paterno"
                rounded
              />

              <Input
                type="text"
                id="secondLastName"
                placeholder=" "
                label="Apellido Materno"
                rounded
              />
            </section>
            <section className="">
              <button className="px-2 h-10 rounded-md bg-smartbus_deepblue dark:bg-smartbus_emerald text-white w-full">
                Siguiente paso
              </button>
            </section>
          </form>
        </PhoneCard>

        <PhoneCard className="flex flex-col gap-6">
          <header className="flex items-center justify-between">
            <ArrowLeft
              className="cursor-pointer"
              size={32}
              strokeWidth={2}
              absoluteStrokeWidth
            />

            <h2 className="">Registro 2/2</h2>
          </header>

          <section className="mx-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center">
              Configurar Tarjeta Prepago
            </h1>

            <p className="text-sm">
              A continuación tendrás que introducir en los campos los datos de
              tu tarjeta prepago.
            </p>
          </section>

          <form
            className="mx-4 relative flex flex-col items-center justify-center"
            action=""
          >
            <CreditCard
              className="text-white"
              fill="#205a72"
              size={256}
              strokeWidth={4}
              absoluteStrokeWidth
            />

            <NumericInput
              id="cardNumber"
              label="Número de Tarjeta Prepago"
              placeholder=" "
              rounded
              containerClassNames=""
            />

            <NumericInput
              id="cardAlphanumericValue"
              label="Clave Alfanúmerica"
              placeholder=" "
              rounded
              containerClassNames=""
            />

            <Select
              id="cardType"
              label="Tipo de Tarjeta"
              data={cardTypes}
              rounded
              caption="Selecciona un tipo de tarjeta"
            />

            <button className="px-2 h-10 rounded-md bg-smartbus_deepblue dark:bg-smartbus_emerald text-white w-full mt-10">
              Terminar registro
            </button>
          </form>
        </PhoneCard>

        <Application bodyClassName="flex flex-col">
          <section className="p-2 w-full h-fit flex flex-col gap-2">
            {routes.map(({ name, returning }, index) => (
              <BusCard key={index} returning={returning} name={name} />
            ))}
          </section>

          <hr className="dark:border-shark-900" />

          <section className="p-2 w-full h-full">
            <MapView lat={20.654205} lng={-105.240305} />
          </section>
        </Application>

        <PhoneCard className="flex flex-col gap-2">
          <header>
            <ArrowLeft
              className="cursor-pointer"
              size={32}
              strokeWidth={2}
              absoluteStrokeWidth
            />
          </header>

          <section className="flex items-center justify-center relative text-white">
            <CreditCard
              fill="#205a72"
              size={256}
              strokeWidth={4}
              absoluteStrokeWidth
            />

            <span className="absolute text-2xl mb-24">Tú saldo:</span>
            <span className="absolute text-2xl mt-10">$120</span>
          </section>

          <section className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-center font-bold text-2xl">
              Recarga tu tarjeta
            </h3>

            <div className="grid grid-cols-2 gap-2 w-52 p-2 h-fit">
              {quantityToReload.map(({ amount, currency, prefix }, index) => (
                <button
                  key={index}
                  title={`${prefix}${amount}${currency} M.N`}
                  className="border dark:border-0 bg-smartbus_blue text-white h-10 rounded-md "
                >
                  {prefix}
                  {amount}
                </button>
              ))}
            </div>
          </section>

          <div className="relative inline-block text-center before:content-[''] before:block before:h-px before:bg-gray-200 before:w-full before:absolute before:top-1/2 before:left-0 transform before:-translate-y-1/2 h-8 mx-4">
            <span className="relative text-xl bg-white dark:bg-black_rain-700 px-2 z-10">
              o
            </span>
          </div>

          <section className="flex flex-col gap-2 mx-4">
            <h3 className="text-center font-bold">Coloque el monto deseeado</h3>

            <NumericInput
              type="number"
              id="amount"
              rounded
              label="Cantidad a recargar"
            />

            <button className="rounded-full w-full mx-auto bg-smartbus_blue h-10 text-white">
              Recargar
            </button>
          </section>
        </PhoneCard>

        <PhoneCard
          className={`${processPaddingClasses("p-0", false)} relative`}
        >
          <ApplicationSidebar />
        </PhoneCard>

        <Application id="routes" header={NavigationHeader({ label: "Rutas" })}>
          <section className="grid grid-cols-2 justify-center items-center gap-2 w-full h-full">
            {routeLocations.map(({ name, location }, index) => (
              <div
                key={index}
                className="flex flex-col items-cente w-full h-full"
              >
                <MapView lat={location.lat} lng={location.lng} />

                <h3 className="text-center font-bold text-xl">{name}</h3>
              </div>
            ))}
          </section>
        </Application>

        <Application
          header={NavigationHeader({ label: "Ruta" })}
          bodyClassName="overflow-y-auto flex flex-col gap-4"
        >
          <h3 className="text-center text-2xl font-bold">{routes[0].name}</h3>

          <MapView lat={20.654205} lng={-105.240305} />

          <section>
            <h4 className="text-center text-2xl font-bold">Paradas</h4>

            <div className="flex flex-col gap-2 mt-4">
              {stops.map(({ stopName, description }, index) => {
                return (
                  <BusStop
                    key={index}
                    name={stopName}
                    description={description}
                  />
                );
              })}
            </div>
          </section>
        </Application>
      </Carrousel>
    </>
  );
}

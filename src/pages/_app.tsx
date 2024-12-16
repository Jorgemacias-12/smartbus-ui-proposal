import { $theme } from "@/stores";
import "@/styles/globals.css";
import { Theme } from "@/types";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const unsuscribe = $theme.subscribe(
      (value: Theme | undefined, oldValue: Theme | undefined) => {
        document.documentElement.classList.remove(oldValue!);
        document.documentElement.classList.add(value!);
      }
    );

    document.documentElement.classList.add($theme.get());

    return () => {
      unsuscribe();
    };
  }, []);

  return <Component {...pageProps} />;
}

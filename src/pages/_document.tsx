import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="SmartBusApp UI proposal" />
      <body className="antialiased bg-gray-100 dark:bg-black_rain-500 dark:text-white flex flex-col items-center justify-center duration-300 ease-in-out transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

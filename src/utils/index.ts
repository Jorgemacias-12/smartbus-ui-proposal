import type { Theme } from "@/types";

export const getThemeBasedOnUserPreference = (): Theme => {
  if (typeof window === "undefined") {
    console.error(console.trace("Diavlo"))
    return "light";
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

  return mediaQuery.matches ? "dark" : "light";
};

export function processPaddingClasses(className: string, keepGreater = true) {
  const classes = className.split(" ");

  const paddingClasses = classes.filter((c) => c.startsWith("p-"));

  if (paddingClasses.length === 0) {
    return className;
  }
  const paddingValues = paddingClasses.map((c) =>
    parseInt(c.split("-")[1], 10)
  );

  let selectedPadding;
  if (keepGreater) {
    selectedPadding = Math.max(...paddingValues); // Mantener el valor mayor
  } else {
    selectedPadding = Math.min(...paddingValues); // Mantener el valor menor
  }

  const filteredClasses = classes.filter((c) => !c.startsWith("p-"));

  filteredClasses.push(`p-${selectedPadding}`);
  return filteredClasses.join(" ");
}

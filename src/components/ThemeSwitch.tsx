import { Moon, Sun } from "lucide-react";
import { Switch } from "./Switch";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { $theme } from "@/stores";
import { getThemeBasedOnUserPreference } from "@/utils";

export const ThemeSwitch = () => {
  const theme = useStore($theme);

  const onValueChanged = (state: boolean) => {
    $theme.set($theme.get() === "light" ? "dark" : "light");
  };

  return (
    <Switch
      defaultState={$theme.get() === "light"}
      icons={[<Moon />, <Sun />]}
      title="Theme switch light/dark"
      onClick={onValueChanged}
    />
  );
};

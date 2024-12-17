import { Moon, Sun } from "lucide-react";
import { Switch } from "./Switch";
import { $theme } from "@/stores";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onValueChanged = () => {
    $theme.set($theme.get() === "light" ? "dark" : "light");
  };

  if (!isClient) {
    return null;
  }

  return (
    <Switch
      defaultState={$theme.get() === "light"}
      icons={[<Moon key={1} />, <Sun key={2} />]}
      title="Theme switch light/dark"
      onClick={onValueChanged}
    />
  );
};

import { useEffect, useState, type ReactNode } from "react";

interface Props {
  icons?: ReactNode[];
  title?: string;
  defaultState?: boolean;
  onClick?: (state: boolean) => void;
}

export const Switch = ({
  defaultState = false,
  icons = ["", ""],
  onClick,
  title = "Switch component",
}: Props) => {
  const [state, setState] = useState(defaultState);

  const toggleState = () => {
    setState(!state);

    if (onClick) {
      onClick(state);
    }
  };

  const animationFalse = "translate-x-9";
  const animationTrue = "translate-x-2";


  return (
    <button
      type="button"
      title={title}
      className={`inline-flex rounded-2xl w-16 relative h-8 border bg-white dark:bg-shark-950 `}
      onClick={toggleState}
    >
      <span
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${
          state ? animationTrue : animationFalse
        }`}
      >
        {state ? icons[0] : icons[1]}
      </span>
    </button>
  );
};

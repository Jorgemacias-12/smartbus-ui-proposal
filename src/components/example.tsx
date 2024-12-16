import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import styles from "@/styles/Select.module.css";
import { useState } from "react";
import "@/types";
import type { Data } from "@/types";

interface SelectProps {
  id: string;
  label?: string;
  caption?: string;
  data: Data[];
  rounded?: boolean;
}

export const Select = ({ id, label, data, rounded, caption }: SelectProps) => {
  const theme = useStore($theme);
  const [option, setOption] = useState<Data | null>(null);
  const [IsOpen, setIsOpen] = useState(false);

  const applyRoundedStyles = rounded ? "rounded-md" : "";

  const lightClassNames = "border bg-seasalt-900";
  const darkClassNames = "border-raisin-black-600 bg-raisin-black";

  const themeClassNames = theme === "light" ? lightClassNames : darkClassNames;

  const containerBorder =
    theme === "light" ? "border" : "border-raisin-black-600";

  const optionsContainerHiddenStyles = "invisible opacity-0 translate-y-0";
  const optionsContainerShowStyles = "visible opacity-100 translate-y-1";

  const optionsModalClassNames = IsOpen
    ? optionsContainerShowStyles
    : optionsContainerHiddenStyles;

  const handleClick = () => {
    setIsOpen(!IsOpen);
  };

  const handleSelectOptions = (option: any) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <section className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className="flex items-center">
        {option && (
          <input
            title={id}
            type="text"
            onFocus={handleClick}
            onClick={handleClick}
            className={`${styles.selectorButton} ${applyRoundedStyles} ${themeClassNames} ${containerBorder}`}
            readOnly
            value={option.name}
          />
        )}

        {!option && (
          <input
            title={id}
            type="text"
            onClick={handleClick}
            onFocus={handleClick}
            className={`${styles.selectorButton} ${applyRoundedStyles} ${themeClassNames} ${containerBorder}`}
            readOnly
            value={caption}
          />
        )}

        {option && <input value={option.value} name={id} type="hidden" />}
        <span
          className={`absolute right-3 bottom-5  fas fa${
            IsOpen ? "-angle-down" : "-angle-up"
          }`}
        ></span>
      </div>

      <div
        className={`${styles.optionContainer} ${applyRoundedStyles} ${themeClassNames} ${containerBorder} ${optionsModalClassNames}`}
        data-theme={theme}
      >
        {data &&
          data.map((el, index) => {
            const { name } = el;
            return (
              <button
                onClick={() => {
                  handleSelectOptions(el);
                }}
                className={styles.optionButton}
                type="button"
                key={index}
                data-theme={theme}
              >
                {name}
              </button>
            );
          })}
      </div>
    </section>
  );
};
import type { Data } from "@/types";
import { useState, type SelectHTMLAttributes } from "react";

import styles from "@/styles/Select.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  caption?: string;
  data: Data[];
  rounded?: boolean;
}

export const Select = ({ id, label, data, rounded, caption }: Props) => {
  const [option, setOption] = useState<Data | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOptions = (option: Data) => {
    setOption(option);
    setIsOpen(false);
  };

  const optionsModalClassNames = isOpen
    ? "visible opacity-100 translate-y-1"
    : "invisible opacity-0 translate-y-0";

  const themeClassNames = "dark:bg-black_rain dark:border-black_rain-900";

  return (
    <section
      className={`${styles.container}`}
    >
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
            readOnly
            value={option.name}
            className={`${styles.selectorButton} ${themeClassNames} ${rounded ? "rounded-md" : ""}`}
          />
        )}

        {option && <input value={option.value} name={id} type="hidden" />}

        {!option && (
          <input
            title={id}
            type="text"
            onClick={handleClick}
            onFocus={handleClick}
            className={`${styles.selectorButton} text-gray-500 ${themeClassNames} ${rounded ? "rounded-md" : ""}`}
            readOnly
            value={caption}
          />
        )}

        <div className="absolute transform top-1/2 -translate-y-1/2 right-3 text-black dark:text-white">
          {isOpen ? (
            <ChevronDown onClick={handleClick} />
          ) : (
            <ChevronUp onClick={handleClick} />
          )}
        </div>
      </div>

      <div
        className={`${styles.optionContainer} ${optionsModalClassNames} dark:bg-black_rain-800 dark:border-black_rain-950 border z-10`}
      >
        {data &&
          data.map((el, index) => {
            const { name } = el;
            return (
              <button
                onClick={() => {
                  handleSelectOptions(el);
                }}
                className={`${styles.optionButton} hover:bg-gray-200 hover:dark:bg-black_rain-900 dark:border-black_rain-950`}
                type="button"
                key={index}
              >
                {name}
              </button>
            );
          })}
      </div>
    </section>
  );
};

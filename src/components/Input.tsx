import type { ValidationCriteria } from "@/types";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";

import styles from "@/styles/Input.module.css";
import { Eye, EyeOff } from "lucide-react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rounded?: boolean;
  disabled?: boolean;
  validationCriteria?: ValidationCriteria;
  initialValue?: string;
  required?: boolean;
  containerClassNames?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onValidationError?: (id: string, hasError: boolean) => void;
  onClear?: () => void;
}

export const Input = ({
  type,
  id,
  placeholder,
  label,
  disabled,
  rounded,
  validationCriteria,
  initialValue,
  required,
  containerClassNames,
  onInput,
  onKeyDown,
  onValidationError,
  onClear,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [value, setValue] = useState<string>(initialValue ?? "");
  const [inputValidationClass, setInputValidationClass] = useState<string>("");
  const [labelValidationClass, setLabelValidationClass] = useState<string>("");

  const regex = new RegExp(validationCriteria?.pattern!);

  const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputEl = event.target as HTMLInputElement;
    const { value } = inputEl;

    setValue(value);
    setLabelValidationClass("");
    setInputValidationClass("");
    setError("");

    let hasError = false;

    if (value.trim() === "") {
      setLabelValidationClass("");
      setInputValidationClass("");
      setError("");
    } else {
      if (required && value.trim() === "") {
        setLabelValidationClass("text-red-500");
        setInputValidationClass("border-red-500");
        setError(`El campo ${label} es obligatorio`);
        hasError = true;
      } else if (
        validationCriteria &&
        validationCriteria.min &&
        value.length < validationCriteria.min
      ) {
        setLabelValidationClass("text-red-500");
        setInputValidationClass("border-red-500");
        setError(
          `El campo ${label} debe tener al menos ${validationCriteria.min} caracteres.`
        );
        hasError = true;
      } else if (
        validationCriteria &&
        validationCriteria.max &&
        value.length > validationCriteria.max
      ) {
        setLabelValidationClass("text-red-500");
        setInputValidationClass("border-red-500");
        setError(
          `El campo ${label} no debe exceder los ${validationCriteria.max} caracteres.`
        );
        hasError = true;
      } else if (validationCriteria && !regex.test(value)) {
        setLabelValidationClass("text-red-500");
        setInputValidationClass("border-red-500");
        setError(validationCriteria.patternNotMatchMessage);
        hasError = true;
      } else {
        setLabelValidationClass("text-teal-500");
        setInputValidationClass("border-teal-500");
      }
    }

    if (onValidationError) {
      onValidationError(id!, hasError);
    }

    if (!hasError && onInput) {
      onInput(event);
    }
  };

  const handleToggleRevealPassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === "password";
  const applyRoundedStyles = rounded ? "rounded-md" : "";

  useEffect(() => {
    if (onClear) {
      setValue(initialValue ?? "");
      setError("");
      setInputValidationClass("");
      setLabelValidationClass("");
    }
  }, [onClear]);

  return (
    <section className={`flex flex-col gap-2 w-full ${containerClassNames}`}>
      <div className={styles.container}>
        <input
          value={value}
          readOnly={disabled}
          title={label}
          placeholder={placeholder ?? " "}
          className={`${styles.input} ${applyRoundedStyles} ${inputValidationClass} dark:bg-black_rain dark:border-shark-900`}
          type={isPasswordField ? (showPassword ? "text" : "password") : type}
          id={id}
          name={id}
          required={required}
          onChange={handleOnInput}
          onKeyDown={onKeyDown}
        />

        <label
          data-disabled={disabled}
          className={`${styles.label} ${labelValidationClass}`}
          htmlFor={id}
        >
          {label}
        </label>

        {type === "password" && (
          <button
            type="button"
            className={styles.revealButton}
            onClick={handleToggleRevealPassword}
            disabled={disabled}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>

      <p className="text-sm text-red-500 mb-2" data-error-id={`error-${id}`}>
        {error}
      </p>
    </section>
  );
};

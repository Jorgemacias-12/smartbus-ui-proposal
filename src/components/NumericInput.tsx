import type { ValidationCriteria } from "@/types";
import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import { Input } from "./Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rounded?: boolean;
  disabled?: boolean;
  required?: boolean;
  validationCriteria?: ValidationCriteria;
  initialValue?: string;
  containerClassNames?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onValidationError?: (id: string, error: boolean) => void;
  onClear?: () => void;
}

export const NumericInput = ({
  id,
  label,
  placeholder,
  rounded,
  validationCriteria,
  required,
  disabled,
  initialValue,
  containerClassNames,
  onInput,
  onValidationError,
  onClear,
}: Props) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;

    const invalidChars = ["-", ".", "e", "E", "+", "~", "^", "´", ".e"];
    const controlKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Delete",
      "Enter",
      "Escape",
    ];
    const isNumber = /\d/.test(char);

    if (controlKeys.includes(char)) return;

    if (invalidChars.includes(char)) {
      event.preventDefault();
    }

    if (invalidChars.includes(char) || !isNumber) {
      console.trace(isNumber, invalidChars.includes(char));
      event.preventDefault();
    }
  };

  return (
    <Input
      id={id}
      label={label}
      placeholder={placeholder}
      type={"number"}
      rounded={rounded}
      disabled={disabled}
      validationCriteria={validationCriteria}
      onInput={onInput}
      initialValue={initialValue}
      onKeyDown={handleKeyDown}
      required={required}
      onValidationError={onValidationError}
      onClear={onClear}
      containerClassNames={containerClassNames}
    />
  );
};

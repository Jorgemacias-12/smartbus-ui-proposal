import { processPaddingClasses } from "@/utils";
import { type HTMLAttributes, type ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[];
}

export const PhoneCard = ({ id, children, className }: Props) => {
  return (
    <article
      id={id}
      className={processPaddingClasses(
        `border w-[360px] rounded-md h-[800px] p-2 bg-white dark:bg-black_rain-700 ${className} dark:border-shark-900`,
        false
      )}
    >
      {children && Array.isArray(children) && children.map((c) => c)}
      {children && !Array.isArray(children) && children}
    </article>
  );
};

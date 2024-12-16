import { type ReactNode, type ComponentType, type HTMLAttributes } from "react";
import { PhoneCard } from "./PhoneCard";
import { ApplicationHeader } from "./ApplicationHeader";
import { ApplicationNavigation } from "./ApplicationNavigation";

interface Props extends HTMLAttributes<HTMLElement>{
  children?: ReactNode;
  bodyClassName?: string;
  header?: ReactNode | ComponentType;
  navigation?: ReactNode | ComponentType;
}

export const Application = ({
  id,
  children,
  bodyClassName,
  header,
  navigation,
}: Props) => {
  const renderElement = (element?: ReactNode | ComponentType) => {
    if (typeof element === "function") {
      const Component = element;
      return <Component />;
    }
    return element;
  };

  return (
    <PhoneCard id={id} className="p-0 items-center justify-between flex flex-col">
      {header ? renderElement(header) : <ApplicationHeader />}
      <section className={`w-full h-full p-4 ${bodyClassName} `}>
        {children} 
      </section>
      {navigation ? renderElement(navigation) : <ApplicationNavigation />}
    </PhoneCard>
  );
};

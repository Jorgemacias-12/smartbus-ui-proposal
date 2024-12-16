export type Theme = "light" | "dark";

export interface ValidationCriteria {
  required: boolean;
  min: number;
  max: number;
  pattern?: string;
  patternNotMatchMessage: string;
}

export interface Data {
  name: string;
  value: string;
}
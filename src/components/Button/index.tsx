import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "transparent";
  fullWidth?: boolean;
};

export function Button({
  children,
  variant = "default",
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <S.Button variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
}

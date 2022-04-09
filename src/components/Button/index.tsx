import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  S.ButtonStyleProps & {};

export function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
}

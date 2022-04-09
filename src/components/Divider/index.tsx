import * as S from "./styles";

export type DividerProps = {
  marginTop?: "small" | "medium" | "large";
  marginBottom?: "small" | "medium" | "large";
};

export function Divider({ marginTop, marginBottom, ...props }: DividerProps) {
  return (
    <S.DividerStyle
      marginBottom={marginBottom}
      marginTop={marginTop}
      {...props}
    />
  );
}

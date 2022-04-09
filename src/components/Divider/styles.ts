import { DividerProps } from "./index";
import { lighten } from "polished";
import styled, { css } from "styled-components";

export const DividerStyle = styled.div<DividerProps>`
  ${({ theme, marginBottom, marginTop }) => css`
    background-color: ${lighten(0.2, theme.font.colors.gray)};
    width: 100%;
    height: 0.1rem;

    margin-top: ${!!marginTop ? theme.spacings[marginTop] : 0};
    margin-bottom: ${!!marginBottom ? theme.spacings[marginBottom] : 0};
  `}
`;

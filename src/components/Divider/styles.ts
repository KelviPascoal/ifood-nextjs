import { DividerProps } from './index';
import { lighten } from 'polished';
import styled, { css } from "styled-components";

export const DividerStyle = styled.div<DividerProps>`
    ${({theme, marginBotton, marginTop}) => css`
    background-color: ${ lighten(0.2,theme.font.colors.gray)};
    width: 100%;
    height: 0.1rem;

    margin-top: ${marginTop ? marginTop : 0};
    margin-bottom: ${marginBotton ? marginBotton : 0};
    `}
`
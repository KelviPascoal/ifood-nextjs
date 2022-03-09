import { ButtonHTMLAttributes } from "react";
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: JSX.Element;
    variant: 'red' | 'white' | 'transparent';
    size: 'default' | 'full'
}

export function Button({children, variant, size, icon, ...props}: ButtonProps) {
    return (
        <S.Button {...props}>{children}</S.Button>
    )
}
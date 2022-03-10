import { InputHTMLAttributes } from "react";
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: JSX.Element;
}

export function Input({ icon, ...props }: InputProps) {
    return (
        <S.InputContainer>
            {icon && icon}
            <input {...props} />
        </S.InputContainer>
    )
}
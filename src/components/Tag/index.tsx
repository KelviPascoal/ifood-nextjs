import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { MdVerified } from "react-icons/md";
import * as S from "./styles";

type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    subTitle?: string;
    image: string;
    alt?: string;
    checked?: boolean;
};

export function Tag({
    subTitle,
    title,
    alt,
    image,
    checked = false,
    ...props
}: TagProps) {
    return (
        <S.TagStyle {...props}>
            {checked && <MdVerified />}
            <S.ImageStyled src={image} alt={alt} width={56} height={56} />
            <div>
                <strong>{title}</strong>
                <span>{subTitle}</span>
            </div>
        </S.TagStyle>
    );
}

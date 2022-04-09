import { ImageProps } from "next/image";
import { ButtonHTMLAttributes } from "react";
import { MdVerified } from "react-icons/md";
import * as S from "./styles";

type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subTitle?: string;
  image: ImageProps;
  checked?: boolean;
  onClick?: () => void;
};

export function Tag({
  subTitle,
  title,
  image,
  checked = false,
  onClick,
  ...props
}: TagProps) {
  return (
    <S.Tag onClick={onClick} {...props}>
      {checked && <MdVerified />}
      <S.TagImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <S.TagText>
        <strong>{title}</strong>
        <span>{subTitle}</span>
      </S.TagText>
    </S.Tag>
  );
}

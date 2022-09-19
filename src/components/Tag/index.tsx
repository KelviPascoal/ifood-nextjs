import { ButtonHTMLAttributes } from "react";
import { MdVerified } from "react-icons/md";
import * as S from "./styles";

export type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subTitle?: string;
  image: {
    src: string;
    alt: string;
  };
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
      <S.TagImage src={image.src} alt={image.alt} width={56} height={56} />
      <S.TagText>
        <strong>{title}</strong>
        <span>{subTitle}</span>
      </S.TagText>
    </S.Tag>
  );
}

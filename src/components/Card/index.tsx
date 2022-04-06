import * as S from "./styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AnchorHTMLAttributes } from "react";
import Image from "next/image";

export type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  textButton?: string;
  variant?: "primary" | "secondary";
  image: string;
  altImg: string;
};

export function Card({
  image,
  variant = "primary",
  href = "/",
  title,
  textButton,
  altImg,
  ...props
}: CardProps) {
  return (
    <S.Card href={href} variant={variant} {...props}>
      <h2>{title}</h2>
      <S.ImgContainer>
          <Image src={image} alt={altImg} width={225} height={157} />
      </S.ImgContainer>
      <button>
        {textButton}
        <MdOutlineKeyboardArrowRight />
      </button>
    </S.Card>
  );
}

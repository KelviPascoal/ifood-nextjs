import * as S from "./styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image, { ImageProps } from "next/image";

export type CardProps = {
  title: string;
  textButton?: string;
  variant?: "primary" | "secondary";
  image: ImageProps;
  onClick?: () => void;
};

export function Card({
  image,
  variant = "primary",
  title,
  onClick,
  textButton,
  ...props
}: CardProps) {
  return (
    <S.Card onClick={onClick} variant={variant} {...props}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardImage>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </S.CardImage>
      <S.CardButton variant={variant}>
        {textButton}
        <MdOutlineKeyboardArrowRight />
      </S.CardButton>
    </S.Card>
  );
}

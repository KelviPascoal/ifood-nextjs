import Image, { ImageProps } from "next/image";
import { ButtonHTMLAttributes } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import * as S from "./styles";

export type MiniCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "yellow" | "pink" | "red" | "purpure";
  image: ImageProps;
  text: string;
  onClick?: () => void;
};

export function MiniCard({
  variant,
  image,
  text,
  onClick,
  ...props
}: MiniCardProps) {
  return (
    <S.ContainerMiniCard onClick={onClick} {...props}>
      <S.MiniCard variant={variant}>
        <S.ContainerImage>
          <Image
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt}
          />
        </S.ContainerImage>
      </S.MiniCard>
      <span>
        {text}
        <RiArrowRightSLine />
      </span>
    </S.ContainerMiniCard>
  );
}

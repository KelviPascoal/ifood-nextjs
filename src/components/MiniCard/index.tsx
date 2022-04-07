import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import * as S from "./styles";

export type MiniCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "drinks" | "pharmacy" | "express" | "petshop";
};

// drinks: () => css`
// max-width: 14rem;
// max-height: 9.6rem;
// `,
// pharmacy: () => css`
// max-width: 10rem;
// max-height: 8.6rem;
// `,
// express: () => css`
// max-width: 9.7rem;
// max-height: 9.3rem;
// `,
// petshop: () => css`
// max-width: 13.5rem;
// max-height: 7.7rem;
// `,

export function MiniCard({ variant, ...props }: MiniCardProps) {
  return (
    <S.ContainerMiniCard {...props}>
      <S.MiniCard variant={variant}>
        <S.ContainerImage variant={variant}>
          {variant === "pharmacy" ? (
            <Image src="/img/pharmacy.webp" alt="" height={86} width={100} />
          ) : variant === "petshop" ? (
            <Image src="/img/petshop.webp" alt="" height={77} width={135} />
          ) : variant === "express" ? (
            <Image src="/img/express.webp" alt="express.webp" height={93} width={97} />
          ) : (
            <Image src="/img/drinks.webp" alt="" height={96} width={140} />
          )}
        </S.ContainerImage>
      </S.MiniCard>
      <span>
        {variant === "pharmacy"
          ? "Farmácia"
          : variant === "petshop"
          ? "Pet shop"
          : variant === "express"
          ? "Express"
          : "Bebidas"}
        <RiArrowRightSLine />
      </span>
    </S.ContainerMiniCard>
  );
}

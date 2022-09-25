import { Button } from "components/Button";
import Image, { ImageProps } from "next/image";
import * as S from "./styles";

export type BannerProps = {
  title: string;
  description: string;
  image: ImageProps;
  variant?: "fullWidth" | "normal";
};

export function Banner({
  description,
  image,
  title,
  variant = "normal",
}: BannerProps) {
  return (
    <S.BannerContent variant={variant}>
      <div>
        <Image {...image} />
      </div>
      <S.BannerInfo variant={variant}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>Saiba mais</Button>
      </S.BannerInfo>
    </S.BannerContent>
  );
}

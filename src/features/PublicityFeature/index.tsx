import { Divider } from "components/Divider";
import { Tag, TagProps } from "components/Tag";
import Image, { ImageProps } from "next/image";
import * as S from "./styles";

export type PublicityFeatureProps = {
  restaurants: {
    title: string;
    list: TagProps[];
  };
  supermarkets: {
    title: string;
    list: TagProps[];
  };
  banners: ImageProps[];
};

export function PublicityFeature({
  banners,
  restaurants,
  supermarkets,
}: PublicityFeatureProps) {
  return (
    <>
      <S.Section>
        <h3>{restaurants.title}</h3>
        <S.Row>
          {restaurants.list.map((restalrant, index) => (
            <Tag
              key={`${index}-${restalrant.title}`}
              image={restalrant.image}
              title={restalrant.title}
              subTitle={restalrant.subTitle}
              checked={restalrant.checked}
            />
          ))}
        </S.Row>
      </S.Section>

      <S.Row>
        {banners.map((banner, index) => (
          <Image
            key={`${index}`}
            src={banner.src}
            alt={banner.alt}
            height={banner.height}
            width={banner.width}
          />
        ))}
      </S.Row>

      <Divider marginTop="small" />

      <S.Section>
        <h3>{supermarkets.title}</h3>
        <S.Row>
          {supermarkets.list.map((supermarket, index) => (
            <Tag
              key={`${index}-${supermarket.title}`}
              image={supermarket.image}
              title={supermarket.title}
            />
          ))}
        </S.Row>
      </S.Section>
    </>
  );
}

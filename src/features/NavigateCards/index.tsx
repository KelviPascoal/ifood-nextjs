import { Card, CardProps } from "components/Card";
import { MiniCard, MiniCardProps } from "components/MiniCard";
import * as S from "./styles";

type NavigateCardsProps = {
  cardsData: CardProps[];
  miniCardsData: MiniCardProps[];
};

export function NavigateCardsFeature({
  cardsData,
  miniCardsData,
}: NavigateCardsProps) {
  return (
    <>
      <S.Cards>
        {cardsData.map((cardItem, index) => (
          <Card
            key={`${index}-${cardItem.title}`}
            image={cardItem.image}
            title={cardItem.title}
            variant={cardItem.variant}
            textButton={cardItem.textButton}
          />
        ))}
      </S.Cards>
      <S.MiniCards>
        {miniCardsData.map((miniCardItem, index) => (
          <MiniCard
            key={`${index}-${miniCardItem.text}`}
            image={{
              src: miniCardItem.image.src,
              height: miniCardItem.image.height,
              width: miniCardItem.image.width,
              alt: miniCardItem.image.alt,
            }}
            variant={miniCardItem.variant}
            text={miniCardItem.text}
          />
        ))}
      </S.MiniCards>
    </>
  );
}

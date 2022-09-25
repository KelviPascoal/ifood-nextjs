import * as S from "./styles";
import { Banner } from "components/Banner";

export function BannersFeature() {
  return (
    <S.BannerContainer>
      <Banner
        title={"Quer fazer entregas pelo iFood?"}
        description={"Faça agora o seu cadastro e comece o quanto antes."}
        image={{
          src: "/img/delivery-man.svg",
          alt: "quer se tornar entregador ifood? faça seu cadastro",
          height: 208,
          width: 201,
        }}
      />
      <Banner
        title={"A sua fome de crescer ta no iFood"}
        description={"Cadastre seu restaurante ou o seu mercado"}
        image={{
          src: "/img/store.svg",
          alt: "cadastre seu restaurante ou mercado no ifood",
          height: 175,
          width: 201,
        }}
      />

      <Banner
        variant="fullWidth"
        title={"Você tem fome do quê?"}
        description={
          "Descubra como é ser um FoodLover e faça parte da nossa revolução!"
        }
        image={{
          src: "/img/food-lover-banner.webp",
          alt: "Descubra como é ser um FoodLover e faça parte da nossa revolução",
          width: 731,
          height: 371,
        }}
      />
    </S.BannerContainer>
  );
}

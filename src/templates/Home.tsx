import { Button } from "components/Button";
import { CardProps } from "components/Card";
import { Container } from "components/Container";
import { Divider } from "components/Divider";
import { Header } from "components/Header";
import { NavigationList } from "components/NavigationList";
import {
  cidadesListMock,
  ifoodMarketingList,
  descubraList,
} from "components/NavigationList/list.mock";
import { MiniCardProps } from "components/MiniCard";
import { Tag } from "components/Tag";
import Image from "next/image";
import * as S from "../styles/HomeStyles";

import { ImFacebook } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import {
  TitleAndSearchFeature,
  TitleAndSearchFeatureProps,
} from "features/TitleAndSearchFeature";
import { NavigateCardsFeature } from "features/NavigateCards";
import {
  PublicityFeature,
  PublicityFeatureProps,
} from "features/PublicityFeature";
import { BannersFeature } from "features/Banners";

export type HomeTemplateProps = {
  cardsData: CardProps[];
  miniCardsData: MiniCardProps[];
  titleAndSearchData: TitleAndSearchFeatureProps;
  publicityData: PublicityFeatureProps;
};

export function HomeTemplate({
  cardsData,
  miniCardsData,
  titleAndSearchData,
  publicityData,
}: HomeTemplateProps) {
  return (
    <>
      <Header />

      <TitleAndSearchFeature
        title={titleAndSearchData.title}
        subtitle={titleAndSearchData.subtitle}
        inputPlaceholder={titleAndSearchData.inputPlaceholder}
        button={titleAndSearchData.button}
      />

      <Container>
        <NavigateCardsFeature
          cardsData={cardsData}
          miniCardsData={miniCardsData}
        />

        <Divider />

        <PublicityFeature
          restaurants={publicityData.restaurants}
          supermarkets={publicityData.supermarkets}
          banners={publicityData.banners}
        />

        <BannersFeature />

        <S.IfoodBeneficiosImg />
        <NavigationList
          title="Explore por cidades"
          items={cidadesListMock}
          numberOfSizes={5}
          viwerAll={{
            active: true,
            path: "/",
          }}
        />

        <Divider />

        <S.NavigationsList>
          <NavigationList title="iFood" items={ifoodMarketingList} />
          <NavigationList title="Descubra" items={descubraList} />
          <S.SocialNetwork>
            <h5>Social</h5>
            <nav>
              <Link href="/" passHref>
                <ImFacebook />
              </Link>
              <Link href="/" passHref>
                <GrTwitter />
              </Link>
              <Link href="/" passHref>
                <BsYoutube />
              </Link>
              <Link href="/" passHref>
                <BsInstagram />
              </Link>
            </nav>
          </S.SocialNetwork>
        </S.NavigationsList>
      </Container>
    </>
  );
}

import { cardsMock } from "components/Card/index.mock";
import { miniCardsMock } from "components/MiniCard/index.mock";
import { publicityMock } from "features/PublicityFeature/index.mock";
import { titleAndSearchFeateMock } from "features/TitleAndSearchFeature/index.mock";
import { NextPage } from "next";
import { HomeTemplate, HomeTemplateProps } from "templates/Home";

const Home = ({
  cardsData,
  miniCardsData,
  titleAndSearchData,
  publicityData,
}: HomeTemplateProps) => {
  return (
    <HomeTemplate
      cardsData={cardsData}
      miniCardsData={miniCardsData}
      titleAndSearchData={titleAndSearchData}
      publicityData={publicityData}
    />
  );
};

export async function getServerSideProps() {
  return {
    props: {
      cardsData: cardsMock,
      miniCardsData: miniCardsMock,
      titleAndSearchData: titleAndSearchFeateMock,
      publicityData: publicityMock,
    },
  };
}

export default Home;

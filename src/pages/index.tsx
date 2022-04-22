import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Divider } from "components/Divider";
import { Header } from "components/Header";
import { Input } from "components/Input";
import { NavigationList } from "components/NavigationList";
import {
  cidadesListMock,
  ifoodMarketingList,
  descubraList,
} from "components/NavigationList/listMock";
import { MiniCard } from "components/MiniCard";
import { Tag } from "components/Tag";
import type { NextPage } from "next";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import * as S from "../styles/HomeStyles";

import { ImFacebook } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Home: NextPage = () => {
  const restalranteImage = {
    src: "/img/restaurant.webp",
    width: 225,
    height: 157,
    alt: "imagem de um sanduiche para representar restaurantes",
  };

  const supermercadoImage = {
    src: "/img/market.webp",
    width: 225,
    height: 169,
    alt: "imagem de um carrinho de compras para representar supermercados",
  };

  return (
    <>
      <Header />
      <S.Background>
        <Container>
          <S.Content>
            <S.Tilte>
              <h1>Tudo pra facilitar seu dia a dia</h1>
              <h2>O que você precisa está aqui. Peça e receba onde estiver.</h2>
            </S.Tilte>

            <S.SearchArea>
              <Input
                placeholder="Endereço de entrega e número"
                icon={<FiMapPin />}
              />
              <Button>Buscar</Button>
            </S.SearchArea>
          </S.Content>
        </Container>
      </S.Background>
      <Container>
        <S.Cards>
          <Card
            image={restalranteImage}
            title="Restaurante"
            variant="primary"
            textButton="Ver opções"
          />
          <Card
            image={supermercadoImage}
            title="Mercado"
            variant="secondary"
            textButton="Buscar lojas"
          />
        </S.Cards>
        <S.MiniCards>
          <MiniCard
            image={{
              src: "/img/drinks.webp",
              height: 95,
              width: 140,
              alt: "imagem de duas bebidas, refrigerante e cerveja",
            }}
            variant="yellow"
            text="Bebidas"
          />
          <MiniCard
            image={{
              src: "/img/pharmacy.webp",
              height: 85,
              width: 100,
              alt: "imagem de um quite de primeiros socorros, representando farmácias",
            }}
            variant="pink"
            text="Farmácia"
          />
          <MiniCard
            image={{
              src: "/img/express.webp",
              height: 96,
              width: 92,
              alt: "foto de um celular escrito na tela entregas ate em 15 minutos",
            }}
            variant="red"
            text="Farmácia"
          />
          <MiniCard
            image={{
              src: "/img/petshop.webp",
              height: 77,
              width: 135,
              alt: "foto de um pote de ração com biscoitos de cachorro",
            }}
            variant="purpure"
            text="Pet shop"
          />
        </S.MiniCards>

        <Divider />

        <S.Section>
          <h3>Os melhores restaurantes</h3>
          <S.Row>
            <Tag
              image={{
                src: "/img/outback.webp",
                alt: "asdasd",
              }}
              title="Outback Steakhouse"
              subTitle="Lanches"
              checked={true}
            />
            <Tag
              image={{
                src: "/img/habibs.webp",
                alt: "asdasd",
              }}
              title="Habib's"
              subTitle="Lanches"
              checked={true}
            />
            <Tag
              image={{
                src: "/img/chinaInBox.webp",
                alt: "asdasd",
              }}
              title="China in Box"
              subTitle="Chinesa"
              checked={true}
            />
            <Tag
              image={{
                src: "/img/cocoBambu.webp",
                alt: "asdasd",
              }}
              title="Coco Bambu"
              subTitle="Frutos Do Mar"
              checked={true}
            />
            <Tag
              image={{
                src: "/img/mcdonalds.webp",
                alt: "asdasd",
              }}
              title="Mcdonald's"
              subTitle="Lanches"
              checked={true}
            />
          </S.Row>
        </S.Section>

        <S.Row>
          <Image
            src="/img/landing-banner-1.webp"
            alt="banner promocional, almoço a partir de 10 reais"
            height={200}
            width={390}
          />
          <Image
            src="/img/landing-banner-2.webp"
            alt="banner promocional, pratos com até 70% de desconto"
            height={200}
            width={390}
          />
          <Image
            src="/img/landing-banner-3.webp"
            alt="banner de propaganda, pesquisar pelos melhores restaurantes"
            height={200}
            width={390}
          />
        </S.Row>

        <Divider marginTop="small" />

        <S.Section>
          <h3>Os melhores mercados</h3>
          <S.Row>
            <Tag
              image={{
                src: "/img/dio.webp",
                alt: "asdasd",
              }}
              title="Dia Supermercado"
            />
            <Tag
              image={{
                src: "/img/big.webp",
                alt: "asdasd",
              }}
              title="Big"
            />
            <Tag
              image={{
                src: "/img/etaly.webp",
                alt: "asdasd",
              }}
              title="Eataly"
            />
            <Tag
              image={{
                src: "/img/dio.webp",
                alt: "asdasd",
              }}
              title="Dia Supermercado"
            />
            <Tag
              image={{
                src: "/img/big.webp",
                alt: "asdasd",
              }}
              title="Big"
            />
          </S.Row>
        </S.Section>

        <S.BannerContainer>
          <S.BannerContent>
            <div>
              <Image
                src="/img/delivery-man.svg"
                alt="quer se tornar entregador ifood? faça seu cadastro"
                height={208}
                width={201}
              />
            </div>

            <S.BannerInfo>
              <h3>Quer fazer entregas pelo iFood?</h3>
              <p>Faça agora o seu cadastro e comece o quanto antes.</p>
              <Button>Saiba mais</Button>
            </S.BannerInfo>
          </S.BannerContent>
          <S.BannerContent>
            <div>
              <Image
                src="/img/store.svg"
                alt="cadastre seu restaurante ou mercado no ifood"
                height={175}
                width={201}
              />
            </div>
            <S.BannerInfo>
              <h3>A sua fome de crescer ta no iFood</h3>
              <p>Cadastre seu restaurante ou o seu mercado</p>
              <Button>Saiba mais</Button>
            </S.BannerInfo>
          </S.BannerContent>
        </S.BannerContainer>

        <S.AdvertisingCover>
          <aside>
            <h3>Você tem fome do quê?</h3>
            <p>
              Descubra como é ser um FoodLover e faça parte da nossa revolução!
            </p>
            <Button>Saiba mais</Button>
          </aside>
          <Image
            src="/img/food-lover-banner.webp"
            alt="Descubra como é ser um FoodLover e faça parte da nossa revolução"
            width={731}
            height={371}
          />
        </S.AdvertisingCover>
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
};

export default Home;

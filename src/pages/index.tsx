import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Divider } from "components/Divider";
import { Header } from "components/Header";
import { Input } from "components/Input";
import { MiniCard } from "components/MiniCard";
import { Tag } from "components/Tag";
import type { NextPage } from "next";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import * as S from "./styles";

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

  const miniCardImagesMock = {
    drinks: {
      src: "/img/drinks.webp",
      height: 95,
      width: 140,
      alt: "imagem de duas bebidas, refrigerante e cerveja",
    },

    pharmacy: {
      src: "/img/drinks.webp",
      height: 95,
      width: 140,
      alt: "imagem de duas bebidas, refrigerante e cerveja",
    },

    express: {
      src: "/img/drinks.webp",
      height: 95,
      width: 140,
      alt: "imagem de duas bebidas, refrigerante e cerveja",
    },

    petshop: {
      src: "/img/drinks.webp",
      height: 95,
      width: 140,
      alt: "imagem de duas bebidas, refrigerante e cerveja",
    },
  };

  return (
    <>
      <Header />
      <Container>
        <S.Containt>
          <S.Tilte>
            <h1>Tudo pra facilitar seu dia a dia</h1>
            <h2>O que você precisa está aqui. Peça e receba onde estiver.</h2>
          </S.Tilte>

          <S.Busca>
            <Input
              placeholder="Endereço de entrega e número"
              icon={<FiMapPin />}
            />
            <Button>Buscar</Button>
          </S.Busca>

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

          <MiniCard
            image={miniCardImagesMock.drinks}
            variant="yellow"
            text="Bebidas"
          />
        </S.Containt>

        <Divider />

        <S.Section>
          <h3>Os melhores restaurantes</h3>
          <S.Row>
            <Tag
              image="/img/outback.webp"
              title="Outback Steakhouse"
              subTitle="Lanches"
              checked={true}
            />
            <Tag
              image="/img/habibs.webp"
              title="Habib's"
              subTitle="Lanches"
              checked={true}
            />
            <Tag
              image="/img/chinaInBox.webp"
              title="China in Box"
              subTitle="Chinesa"
              checked={true}
            />
            <Tag
              image="/img/cocoBambu.webp"
              title="Coco Bambu"
              subTitle="Frutos Do Mar"
              checked={true}
            />
            <Tag
              image="/img/mcdonalds.webp"
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
            <Tag image="/img/dio.webp" title="Dia Supermercado" />
            <Tag image="/img/big.webp" title="Big" />
            <Tag image="/img/etaly.webp" title="Eataly" />
            <Tag image="/img/dio.webp" title="Dia Supermercado" />
            <Tag image="/img/big.webp" title="Big" />
            {/* <Tag
            image="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/595f29c3-3264-4e74-8089-cec0421420fb/202002101723_dmdz_i.jpg"
            title="Eataly"
          /> */}
          </S.Row>
        </S.Section>

        <S.Banner>
          <main>
            <div>
              <Image
                src="/img/delivery-man.svg"
                alt="quer se tornar entregador ifood? faça seu cadastro"
                height={208}
                width={201}
              />
            </div>

            <aside>
              <h3>Quer fazer entregas pelo iFood?</h3>
              <p>Faça agora o seu cadastro e comece o quanto antes.</p>
              <Button>Saiba mais</Button>
            </aside>
          </main>
          <main>
            <div>
              <Image
                src="/img/store.svg"
                alt="cadastre seu restaurante ou mercado no ifood"
                height={175}
                width={201}
              />
            </div>
            <aside>
              <h3>A sua fome de crescer ta no iFood</h3>
              <p>Cadastre seu restaurante ou o seu mercado</p>
              <Button>Saiba mais</Button>
            </aside>
          </main>
        </S.Banner>

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

        <Image
          src="/img/ifood-benefits-desktop.webp"
          alt="o vale que vai mudar a sua relação com benefícios, cartão ifood"
          width={1278}
          height={106}
        />
      </Container>
    </>
  );
};

export default Home;

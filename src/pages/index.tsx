import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Input } from "components/Input";
import { Logo } from "components/Logo/styles";
import { MiniCard } from "components/MiniCard";
import { miniCardMock } from "components/MiniCard/mock";
import type { NextPage } from "next";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import * as S from './styles';

const Home: NextPage = () => {
  
  return (
    <Container>

      <S.Header>
        <Logo src="https://logopng.com.br/logos/ifood-43.svg" alt="logo ifood"/>

        <nav>
          <Link href="/">Entregador</Link>
          <Link href="/">Restaurante e Mercado</Link>
          <Link href="/">Carreiras</Link>
          <Link href="/">iFood Card</Link>
        </nav>

        <>
          <Button variant="transparent">criar conta</Button>
          <Button>Entrar</Button>
        </>
      </S.Header>
    <S.Containt>

      <S.Tilte>
          <h1>Tudo pra facilitar seu dia a dia</h1>
          <h2>O que você precisa está aqui. Peça e receba onde estiver.</h2>
      </S.Tilte>

      <S.Busca>
        <Input 
        placeholder="Endereço de entrega e número"
        icon={<FiMapPin />} />
        <Button>Buscar</Button>
      </S.Busca>

      <S.Cards>
        <Card
        image="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"
        title="Restaurante"
        variant="primary"
        textButton="Ver opções"
        />
        <Card 
        image="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png"
        title="Mercado"
        variant="secondary"
        textButton="Buscar lojas"
        />
      </S.Cards>
      <S.MiniCards>
        <MiniCard {...miniCardMock.yellow}/>
        <MiniCard {...miniCardMock.pink}/>
        <MiniCard {...miniCardMock.red}/>
        <MiniCard {...miniCardMock.purpure}/>
      </S.MiniCards>

    </S.Containt>


      <section>minicards</section>

      <section>mini etiquetas de restaurantes</section>

      <section>images de promoções</section>

      <section>sessões de marcas</section>

      <div>trabalhe conosco... saiba mais</div>

      <div>FoodLover wtf... saiba mais</div>

      {/* <img src="" alt="vale ifood" /> */}

      <table>explore por cidades</table>
      <table>trabalhe conosco e etc</table>
    </Container>
  );
};

export default Home;

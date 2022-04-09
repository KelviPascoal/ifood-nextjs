import { Button } from "components/Button";
import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { VscThreeBars } from "react-icons/vsc";
import { Container } from "components/Container";

export function Header() {
  return (
    <S.HeaderContainer>
      <Container>
        <S.Header>
          <S.NavgationDropDown>
            <VscThreeBars />
          </S.NavgationDropDown>
          <S.HeaderImage>
            <Image
              src="/ifood-img.png"
              alt="logo do ifood"
              width={80}
              height={43}
            />
          </S.HeaderImage>

          <S.NavigationBar>
            <Link href="/">Entregador</Link>
            <Link href="/">Restaurante e Mercado</Link>
            <Link href="/">Carreiras</Link>
            <Link href="/">iFood Card</Link>
          </S.NavigationBar>

          <S.AccessArea>
            <Button variant="transparent">criar conta</Button>
            <Button>Entrar</Button>
          </S.AccessArea>
        </S.Header>
      </Container>
    </S.HeaderContainer>
  );
}

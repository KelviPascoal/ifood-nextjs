import { Button } from "components/Button";
import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";
import { VscThreeBars } from "react-icons/vsc";
import { Container } from "components/Container";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <Container>
        <S.Header>
          <S.NavgationDropDown onClick={() => setMenuIsOpen(true)}>
            <VscThreeBars aria-label="Abrir menu de navegação" />
          </S.NavgationDropDown>

          <S.MenuMobileContainer
            aria-hidden={!menuIsOpen}
            menuIsOpen={menuIsOpen}
          >
            <S.MenuMobile menuIsOpen={menuIsOpen}>
              <S.MenuMobileHeader>
                <Image
                  src="/ifood-img.png"
                  alt="logo do ifood, uma figura de rosto sorrindo formados pelas duas letras O e uma seta"
                  width={80}
                  height={43}
                />
                <Button
                  variant="transparent"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <GrClose aria-label="Fechar menu" />
                </Button>
              </S.MenuMobileHeader>
              <S.MenuMobileNavigation>
                <Link href="#">Entregador</Link>
                <Link href="#">Restaurante e Mercado</Link>
                <Link href="#">Carreiras</Link>
                <Link href="#">iFood Card</Link>
              </S.MenuMobileNavigation>

              <Button fullWidth>Entrar</Button>
              <Button fullWidth variant="transparent">
                criar conta
              </Button>
            </S.MenuMobile>
          </S.MenuMobileContainer>

          <S.HeaderImage>
            <Image
              src="/ifood-img.png"
              alt="logo do ifood, uma figura de rosto sorrindo formados pelas duas letras O e uma seta"
              width={80}
              height={43}
            />
          </S.HeaderImage>

          <S.NavigationBar>
            <Link href="#">Entregador</Link>
            <Link href="#">Restaurante e Mercado</Link>
            <Link href="#">Carreiras</Link>
            <Link href="#">iFood Card</Link>
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

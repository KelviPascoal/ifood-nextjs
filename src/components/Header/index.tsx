import { Button } from "components/Button";
import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";

export function Header() {
  return (
    <S.Header>
      <S.ContainerImage>
        <Image
          src="/ifood-img.png"
          alt="logo do ifood"
          width={80}
          height={43}
        />
      </S.ContainerImage>

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
  );
}

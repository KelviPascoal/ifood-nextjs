import * as S from "./styles";
import Image from "next/image";
import { Button } from "components/Button";

export function BannersFeature() {
  return (
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
  );
}

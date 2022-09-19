import { Button } from "components/Button";
import { Container } from "components/Container";
import { Input } from "components/Input";
import { FiMapPin } from "react-icons/fi";
import * as S from "./styles";

export type TitleAndSearchFeatureProps = {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  button: {
    text: string;
    ariaLabel?: string;
  };
};

export function TitleAndSearchFeature({
  button,
  inputPlaceholder,
  subtitle,
  title,
}: TitleAndSearchFeatureProps) {
  return (
    <S.Background>
      <Container>
        <S.Content>
          <S.Tilte>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </S.Tilte>

          <S.SearchArea>
            <Input placeholder={inputPlaceholder} icon={<FiMapPin />} />
            <Button aria-label={button.ariaLabel}>{button.text}</Button>
          </S.SearchArea>
        </S.Content>
      </Container>
    </S.Background>
  );
}

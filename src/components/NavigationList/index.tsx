import { Button } from "components/Button";
import Link from "next/link";
import * as S from "./styles";

export type ItemListProps = {
  label: string;
  path: string;
};

export type ListProps = {
  title?: string;
  items: ItemListProps[];
  numberOfSizes?: number;
  viwerAll?: {
    path: string;
    active: boolean;
  };
};

export function NavigationList({
  title,
  items,
  numberOfSizes,
  viwerAll,
  ...props
}: ListProps) {
  return (
    <S.ListContainer>
      <S.ListHeader>
        <S.ListTitle>{title}</S.ListTitle>
        {viwerAll?.active && <Link href={viwerAll.path}>Ver todas</Link>}
      </S.ListHeader>
      <S.ListContent numberOfSizes={numberOfSizes} {...props}>
        {items.map((item, index) => (
          <S.ListItem key={index + item.label}>
            <Link href={item.path}>{item.label}</Link>
          </S.ListItem>
        ))}
      </S.ListContent>
    </S.ListContainer>
  );
}

import * as S from './styles'

export type DividerProps = {
    marginTop?: string;
    marginBotton?: string;
}

export function Divider({...props}: DividerProps) {
    return <S.DividerStyle {...props} />
} 
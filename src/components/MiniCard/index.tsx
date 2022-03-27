import { ButtonHTMLAttributes } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import * as S from './styles'

export type MiniCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    bgColor: 'yellow' | 'pink' | 'red' | 'purpure';
    image: string;
    imageAlt: string;
}

export function MiniCard({ image, text, bgColor, imageAlt, ...props }: MiniCardProps) {
    return (
        <S.ContainerMiniCard {...props}>
        <S.MiniCard bgColor={bgColor}>
                <img src={image} alt={imageAlt} />
        </S.MiniCard>
                <span>{text}<RiArrowRightSLine /></span>
        </S.ContainerMiniCard>
    )
}
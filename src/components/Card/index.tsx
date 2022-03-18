import * as S from './styles'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AnchorHTMLAttributes } from 'react';

export type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    title: string;
    textButton?: string;
    variant?: 'primary' | 'secondary';
    image: string;
}

export function Card({ image, variant = 'primary', href = "/", title, textButton, ...props }: CardProps) {
    return (
        <S.Card
            href={href}
            variant={variant}
            {...props}>
            <div>
                <h2>{title}</h2>
                <button>{textButton}<MdOutlineKeyboardArrowRight /></button>
            </div>
            <img src={image} />
        </S.Card>
    )
}
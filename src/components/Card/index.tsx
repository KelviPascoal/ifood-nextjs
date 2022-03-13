import * as S from './styles'
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export type CardProps = {
    title: string;
    textButton?: string;
    path?: string;
    bgColor: 'primary' | 'secondary';
    image: string;
    hoverImage?: string;
}

export function Card({ image, bgColor, path, hoverImage, title, textButton }: CardProps) {
    return (
        <Link href="/">
            <S.Cart bgColor={bgColor}>
                <div>
                    <h2>{title}</h2>
                    <button>{textButton}<MdOutlineKeyboardArrowRight /></button>
                </div>
                <img src={image} />
            </S.Cart>
        </Link>
    )
}
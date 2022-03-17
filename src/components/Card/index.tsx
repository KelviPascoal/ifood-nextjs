import * as S from './styles'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AnchorHTMLAttributes, useState } from 'react';

export type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    title: string;
    textButton?: string;
    bgColor?: 'primary' | 'secondary';
    image: string;
    hoverImage?: string;
}

export function Card({ image, bgColor = 'primary', href = "/" , hoverImage, title, textButton }: CardProps) {
    const [isHover, setIsHover] = useState(false)

    return (
            <S.Card
             onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
               isHover={isHover} 
               href={href} bgColor={bgColor}
               >
                <div>
                    <h2>{title}</h2>
                    <button>{textButton}<MdOutlineKeyboardArrowRight /></button>
                </div>
                <img src={image} />

                <img className="hover-image" src={hoverImage}/>
            </S.Card>
    )
}
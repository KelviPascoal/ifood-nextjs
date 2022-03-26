import { MiniCardProps } from ".";

interface MiniCardMockProps {
    yellow: MiniCardProps
    pink: MiniCardProps
    red: MiniCardProps
    purpure: MiniCardProps
}

export const miniCardMock: MiniCardMockProps = {
    yellow: {
        image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/drinks.png",
        imageAlt: 'bebidas',
        bgColor: "yellow",
        text: "Bebidas",
    },
    pink: {
        image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/pharmacy.png",
        imageAlt: 'farmacia',
        bgColor: "pink",
        text: "Farmacia",
    },
    red: {
        image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/express.png",
        imageAlt: 'express',
        bgColor: "red",
        text: "Express",
    },
    purpure: {
        image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/petshop.png",
        imageAlt: 'pet shop',
        bgColor: "purpure",
        text: "Pet shop",
    }
}
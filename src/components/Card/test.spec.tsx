import { screen } from "@testing-library/react"
import { theme } from "styles/theme"
import { render } from "utils/testUtils"
import { Card } from "."

describe('<Card />', () => {
    it('should be render a card default', () => {
        render(<Card
            image="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"
            title="Restaurante"
            textButton="Ver opções" />)

        // expect(screen.getByRole('ancor'))).toHaveStyle({
        //     "background-color": theme.colors.primary
        //     // 'font-size': '3.6rem'
        // })
    })
})
import { screen } from "@testing-library/react"
import { theme } from "styles/theme"
import { render } from "utils/testUtils"
import { Card } from "."

const props = {
    image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png",
    title: "Restaurante",
    textButton: "Ver opções"
}

describe('<Card />', () => {
    it('should be render a card default', () => {
        const { container } = render(<Card {...props} />)

        expect(container.firstChild).toHaveStyle({
            backgroundColor: theme.colors.primary
        })
        expect(screen.getByRole("button", { name: /Ver opções/i })).toHaveStyle({
            backgroundColor: "#cc1825"
        })
    })
    it('should be render a card with variant secundary', () => {
        const { container } = render(<Card {...props} variant="secondary" />)

        expect(container.firstChild).toHaveStyle({
            backgroundColor: theme.colors.secondary
        })
        expect(screen.getByRole("button", { name: /Ver opções/i })).toHaveStyle({
            backgroundColor: "#9eb53e"
        })
    })

    it('testing property if href is rendered', () => {
        const { container } = render(<Card {...props} href="/page-test" />
        )
        expect(container.firstChild).toHaveAttribute('href', '/page-test')
    })
})
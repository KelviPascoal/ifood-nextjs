import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { screen } from "@testing-library/react"
import { MiniCard } from ".";
import userEvent from "@testing-library/user-event";


describe("<MiniCard />", () => {
    it('should be render a miniCard yellow', () => {
        const { container } = render(<MiniCard variant="drinks" />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.yellow
        })
    })

    it('should be render a miniCard pink', () => {
        const { container } = render(<MiniCard variant="pharmacy" />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.pink
        })
    })

    it('should be render a miniCard red', () => {
        const { container } = render(<MiniCard variant="express" />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.red
        })
    })

    it('should be render a miniCard purpure', () => {
        const { container } = render(<MiniCard variant="petshop" />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.purpure
        })
    })

    it('testing onClick', () => {
        const functionTest = jest.fn();
        render(<MiniCard data-testid="mini-card" onClick={functionTest} variant="drinks" />)
        
        userEvent.click(screen.getByTestId('mini-card'))

        expect(functionTest).toBeCalled()
    })

    it('testing if hover change component size', () => {
        const functionTest = jest.fn();
        render(<MiniCard data-testid="mini-card" onClick={functionTest} variant="drinks" />)
        
        userEvent.click(screen.getByTestId('mini-card'))
        expect(functionTest).toBeCalled()
    })
})
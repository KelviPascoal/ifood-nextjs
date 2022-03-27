import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { screen } from "@testing-library/react"
import { MiniCard } from ".";
import { miniCardMock } from './mock';
import userEvent from "@testing-library/user-event";

describe("<MiniCard />", () => {
    it('should be render a miniCard yellow', () => {
        const { container } = render(<MiniCard {...miniCardMock.yellow} />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.yellow
        })
    })

    it('should be render a miniCard pink', () => {
        const { container } = render(<MiniCard {...miniCardMock.pink} />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.pink
        })
    })

    it('should be render a miniCard red', () => {
        const { container } = render(<MiniCard {...miniCardMock.red} />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.red
        })
    })

    it('should be render a miniCard purpure', () => {
        const { container } = render(<MiniCard {...miniCardMock.purpure} />)
        
        expect(container.firstChild?.firstChild).toHaveStyle({
            backgroundColor: theme.colors.purpure
        })
    })

    it('testing onClick', () => {
        const functionTest = jest.fn();
        render(<MiniCard data-testid="mini-card" onClick={functionTest} {...miniCardMock.purpure} />)
        
        userEvent.click(screen.getByTestId('mini-card'))

        expect(functionTest).toBeCalled()
    })
})
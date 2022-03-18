import { screen, waitFor } from "@testing-library/react"
import { render } from "utils/testUtils"
import userEvent from '@testing-library/user-event'
import { Input } from "."
import { AiFillAlert } from 'react-icons/ai'

describe("<Input />", () => {
    it("shold should be render an Input", () => {
        render(<Input />)

        expect(screen.getByRole('textbox')).toBeDefined()
    })

    it("shold should be render an Input with placeholder", () => {
        render(<Input placeholder="teste placeholder" />)

        expect(screen.getByPlaceholderText('teste placeholder')).toBeInTheDocument()
    })

    it("shold should be render an Input with icon", () => {
        render(<Input icon={<AiFillAlert data-testid="icon" />} />)

        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it("Changes its value when typing", async () => {
        const onInputChange = jest.fn()
        render(
            <Input
                placeholder="teste de digitação"
                onChange={onInputChange}
            />
        )

        const input = screen.getByPlaceholderText('teste de digitação')
        const text = "O rato roeu a ropa do rei de Roma "

        userEvent.type(input, text)

        await waitFor(() => {
            expect(input).toHaveValue(text)
            expect(onInputChange).toHaveBeenCalledTimes(text.length)
        })
    })
})
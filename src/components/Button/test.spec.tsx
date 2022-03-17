import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { Button } from ".";

describe("<Button />", () => {
  it("shold render a Button default", () => {
    render(
      <Button>Teste Button</Button>
    );

    expect(screen.getByRole("button", { name: /Teste Button/i })).toHaveStyle({
      backgroundColor: theme.colors.primary,
      color: theme.font.colors.white,
    });
  });

  it("shold render a Button transparent", () => {
    render(
      <Button variant="transparent">Teste Button</Button>
    );

    expect(screen.getByRole("button", { name: /Teste Button/i })).toHaveStyle({
      backgroundColor: "transparent",
      color: theme.colors.primary,
    });
  });


  it("testing onClick", () => {
    const functionTest = jest.fn()
    render(
      <Button onClick={functionTest}>Teste Button</Button>
    );
    const button = screen.getByRole("button", { name: /Teste Button/i })
    userEvent.click(button)

    expect(functionTest).toBeCalled()

  });
});

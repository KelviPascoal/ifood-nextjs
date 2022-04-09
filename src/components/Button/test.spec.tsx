import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { Button } from ".";

describe("<Button />", () => {
  it("shold render a Button default", () => {
    render(<Button>Test button</Button>);

    expect(screen.getByRole("button", { name: /Test button/i })).toHaveStyle({
      backgroundColor: theme.colors.primary,
      color: theme.font.colors.white,
    });
  });

  it("shold render a Button transparent", () => {
    render(<Button variant="transparent">Test button</Button>);

    expect(screen.getByRole("button", { name: /Test button/i })).toHaveStyle({
      backgroundColor: "transparent",
      color: theme.colors.primary,
    });
  });

  it("testing onClick", () => {
    const functionTest = jest.fn();
    render(<Button onClick={functionTest}>Test button</Button>);
    const button = screen.getByRole("button", { name: /Test button/i });
    userEvent.click(button);

    expect(functionTest).toBeCalled();
  });
});

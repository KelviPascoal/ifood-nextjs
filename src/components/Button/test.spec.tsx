import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Button } from ".";

describe("<Button />", () => {
  it("shold render a Button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste Button</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button", { name: /Teste Button/i })).toHaveStyle({
      backgroundColor: theme.colors.primary,
      color: theme.font.colors.white,
    });
  });
});

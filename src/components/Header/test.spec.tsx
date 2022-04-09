import userEvent from "@testing-library/user-event";
import { render } from "utils/testUtils";
import { Header } from ".";
import { screen } from "@testing-library/react";
import { theme } from "styles/theme";

describe("<Header />", () => {
  it("checks if the image is being displayed correctly", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveProperty("src");
    expect(screen.getByRole("img")).toHaveProperty("height");
    expect(screen.getByRole("img")).toHaveProperty("width");
  });

  it("checks if the access area is being displayed correctly", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeDefined;
    expect(screen.getByRole("button", { name: /criar conta/i })).toBeDefined;
  });

  it("checks if the navigation bar is being displayed correctly", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Entregador/i })).toBeDefined;
    expect(screen.getByRole("link", { name: /restaurante e mercado/i }))
      .toBeDefined;
    expect(screen.getByRole("link", { name: /Carreiras/i })).toBeDefined;
    expect(screen.getByRole("link", { name: /iFood Card/i })).toBeDefined;
  });
});

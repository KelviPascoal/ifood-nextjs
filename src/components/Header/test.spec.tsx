import userEvent from "@testing-library/user-event";
import { render } from "utils/testUtils";
import { Header } from ".";
import { screen, fireEvent } from "@testing-library/react";

describe("<Header />", () => {
  it("deve renderizar um Header", () => {
    render(<Header />);
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument();
  });

  it("verifica se o menu fica visivel ao ser clicado", () => {
    render(<Header />);
    const fullMenuElement = screen.getByRole("navigation", { hidden: true });

    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");

    fireEvent.click(screen.getByLabelText(/Abrir menu de navegação/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");

    fireEvent.click(screen.getByLabelText(/fechar menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
  });

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

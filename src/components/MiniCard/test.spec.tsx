import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { screen } from "@testing-library/react";
import { MiniCard } from ".";
import userEvent from "@testing-library/user-event";

const imageMock = {
  src: "/img/drinks.webp",
  height: 95,
  width: 140,
  alt: "imagem de duas bebidas, refrigerante e cerveja",
};

describe("<MiniCard />", () => {
  it("should be render a miniCard yellow", () => {
    const { container } = render(
      <MiniCard variant="yellow" image={imageMock} text="test" />
    );

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: theme.colors.yellow,
    });
  });

  it("should be render a miniCard pink", () => {
    const { container } = render(
      <MiniCard variant="pink" image={imageMock} text="test" />
    );

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: theme.colors.pink,
    });
  });

  it("should be render a miniCard red", () => {
    const { container } = render(
      <MiniCard variant="red" image={imageMock} text="test" />
    );

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: theme.colors.red,
    });
  });

  it("should be render a miniCard purpure", () => {
    const { container } = render(
      <MiniCard variant="purpure" image={imageMock} text="test" />
    );

    expect(container.firstChild?.firstChild).toHaveStyle({
      backgroundColor: theme.colors.purpure,
    });
  });

  it("testing onClick", () => {
    const functionTest = jest.fn();
    render(
      <MiniCard
        data-testid="mini-card"
        onClick={functionTest}
        variant="yellow"
        image={imageMock}
        text="test"
      />
    );

    userEvent.click(screen.getByTestId("mini-card"));

    expect(functionTest).toBeCalled();
  });
});

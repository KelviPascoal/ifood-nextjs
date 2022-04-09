import { screen } from "@testing-library/react";
import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { Card } from ".";
import userEvent from "@testing-library/user-event";

const props = {
  image: {
    src: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png",
    width: 225,
    height: 157,
  },
  title: "Restaurante",
  textButton: "Ver opções",
};

describe("<Card />", () => {
  it("should be render a card default", () => {
    const { container } = render(<Card {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.colors.primary,
    });
    expect(screen.getByText(/Ver opções/i)).toHaveStyle({
      backgroundColor: "#cc1825",
    });
  });
  it("should be render a card with secundary variant", () => {
    const { container } = render(<Card {...props} variant="secondary" />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
    expect(screen.getByText(/Ver opções/i)).toHaveStyle({
      backgroundColor: "#9eb53e",
    });
  });

  it("testing onClick", () => {
    const functionTest = jest.fn();
    render(<Card {...props} onClick={functionTest} />);
    const card = screen.getByRole("button");
    userEvent.click(card);

    expect(functionTest).toBeCalled();
  });
});

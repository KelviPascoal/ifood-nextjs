import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { theme } from "styles/theme";
import { render } from "utils/testUtils";
import { Divider } from ".";

describe("<Divider />", () => {
  it("shold render a Divider default", () => {
    render(<Divider data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: 0,
      marginBottom: 0,
    });
  });

  it("should render a divider with small marginTop", () => {
    render(<Divider marginTop="small" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: theme.spacings.small,
      marginBottom: 0,
    });
  });

  it("should render a divider with medium marginTop", () => {
    render(<Divider marginTop="medium" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: theme.spacings.medium,
      marginBottom: 0,
    });
  });

  it("should render a divider with large marginTop", () => {
    render(<Divider marginTop="large" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: theme.spacings.large,
      marginBottom: 0,
    });
  });

  it("should render a divider with small marginBottom", () => {
    render(<Divider marginBottom="small" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: 0,
      marginBottom: theme.spacings.small,
    });
  });

  it("should render a divider with medium marginBottom", () => {
    render(<Divider marginBottom="medium" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: 0,
      marginBottom: theme.spacings.medium,
    });
  });

  it("should render a divider with large marginBottom", () => {
    render(<Divider marginBottom="large" data-testid="divider" />);

    expect(screen.getByTestId("divider")).toHaveStyle({
      marginTop: 0,
      marginBottom: theme.spacings.large,
    });
  });
});

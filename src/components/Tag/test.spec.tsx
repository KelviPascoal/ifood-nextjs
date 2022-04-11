import userEvent from "@testing-library/user-event";
import { render } from "utils/testUtils";
import { Tag } from ".";
import { screen } from "@testing-library/react";
import { theme } from "styles/theme";

const tagMock = {
  image: {
    src: "/img/big.webp",
    alt: "test alt",
  },
  title: "Habib's",
  subTitle: "Lanches",
};

describe("<Tag />", () => {
  it("testing onClick", () => {
    const functionTest = jest.fn();
    render(
      <Tag
        image={tagMock.image}
        title={tagMock.title}
        subTitle={tagMock.subTitle}
        onClick={functionTest}
      />
    );
    const tag = screen.getByRole("button");
    userEvent.click(tag);

    expect(functionTest).toBeCalled();
  });

  it("should render a tag with true checked", () => {
    const { container } = render(
      <Tag
        image={tagMock.image}
        title={tagMock.title}
        subTitle={tagMock.subTitle}
        checked={true}
      />
    );

    expect(container.firstChild?.firstChild).toHaveStyle({
      position: "absolute",
      top: "1rem",
      right: "1rem",
      fontSize: "1.4rem",
      color: theme.colors.primary,
    });
  });

  it("should render the image correctly", () => {
    render(
      <Tag
        image={tagMock.image}
        title={tagMock.title}
        subTitle={tagMock.subTitle}
        checked={true}
      />
    );

    expect(screen.getByRole("img")).toHaveProperty("src");
  });
});

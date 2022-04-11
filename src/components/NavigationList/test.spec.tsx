import { screen } from "@testing-library/react";
import { render } from "utils/testUtils";
import { ItemListProps, NavigationList } from ".";

const navigationListMockTest: ItemListProps[] = [
  {
    label: "item test 1",
    path: "/",
  },
  {
    label: "item test 2",
    path: "/",
  },
  {
    label: "item test 3",
    path: "/",
  },
];

describe("<NavigationList />", () => {
  it("should render a default NavigationList", () => {
    const { container } = render(
      <NavigationList
        title="Test NavigationList"
        items={navigationListMockTest}
      />
    );
    expect(container).toBeDefined;
  });

  it("should render a NavigationList with limit of lines", () => {
    render(
      <NavigationList
        title="Test NavigationList"
        items={navigationListMockTest}
        numberOfSizes={2}
        data-testid="test-navigation-list"
      />
    );
    expect(screen.getByTestId("test-navigation-list")).toHaveStyle({
      "max-height": "calc(2 * 4em)",
    });
  });

  it("should render a NavigationList with property viwerAll", () => {
    render(
      <NavigationList
        title="Test NavigationList"
        items={navigationListMockTest}
        viwerAll={{
          active: true,
          path: "/test",
        }}
      />
    );
    expect(screen.getAllByRole("link", { name: /ver todas/i })).toBeDefined();
  });
});

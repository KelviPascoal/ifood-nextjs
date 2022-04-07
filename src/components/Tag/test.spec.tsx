import userEvent from "@testing-library/user-event";
import { render } from "utils/testUtils";
import { Tag } from ".";
import { tagMock } from "./mock";

describe('<Tag />', () => {
    it("testing onClick", () => {
        const functionTest = jest.fn()
        const tag = render(
          <Tag {...tagMock} onClick={functionTest} />
        );

        userEvent.click(tag.container.firstChild as any)
    
        expect(functionTest).toBeCalled()
      });
    });
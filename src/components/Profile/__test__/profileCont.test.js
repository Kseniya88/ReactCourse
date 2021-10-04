import { React } from "react";
import { render, fireEvent } from "@testing-library/react";

import { Text } from "../profileCont";
import ProfileView from "../profileView";

describe("Profile", () => {
  it("matches snapshot", () => {
    const component = render(<Text />);
    expect(component).toMatchSnapshot();
  });

  it("render Hello + name", () => {
    const name = "Vladlena";
    const component = render(<Text name={name} />);

    component.getByText(`HELLO, ${name}`);
  });

  it("render button", () => {
    const handleClick = jest.fn();
    const component = render(<ProfileView onClick={handleClick}></ProfileView>);

    const clickable = component.getByRole("checkbox");
    fireEvent(clickable, new MouseEvent("click", { bubbles: true }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

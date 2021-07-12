import React from "react";
import FilterMenu from "../FilterMenu";
import { renderWithTheme } from "../../../setupTests";

describe("FilterMenu Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWithTheme(<FilterMenu />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

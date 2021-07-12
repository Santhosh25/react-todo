import React from "react";

import Search from "../Search";
import { renderWithTheme } from "../../../setupTests";

describe("Search component", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderWithTheme(
        <Search />
      );
    });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
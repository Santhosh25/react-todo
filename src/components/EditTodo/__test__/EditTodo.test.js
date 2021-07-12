import React from "react";

import EditTodo from "../EditTodo";
import { renderWithTheme } from "../../../setupTests";

describe("Search component", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderWithTheme(
        <EditTodo open={true} />
      );
    });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
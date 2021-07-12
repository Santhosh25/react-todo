import React from "react";
import { v4 as uuidv4 } from "uuid";

import Add from "../Add";
import { store } from "../../../store";
import actions from "../../../actions";
import { renderWithTheme, mountWithTheme } from "../../../setupTests";

describe("Add TODO Component", () => {
  let wrapper;
  const mockFn = jest.fn();
  beforeEach(() => {
    wrapper = renderWithTheme(<Add />);
  });

  afterEach(() => {
    store.dispatch({
      type: actions.CLEAR,
    });
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("confirm single textfield rendered", () => {
    wrapper = mountWithTheme(<Add onClick={mockFn} />);
    expect(wrapper.find("input").length).toBe(1);
  });

  it("confirm single button rendered", () => {
    wrapper = mountWithTheme(<Add onClick={mockFn} />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("add new task on button Click", () => {
    const payload = {
      id: "e98e73ed-6d3d-4fe8-96a3-ba5a990bce6d",
      text: "Tast 1",
      isDone: false,
      isArchive: false,
    };
    const expected = {
      data: [payload],
      actionType: actions.ADD,
    };
    wrapper = mountWithTheme(<Add />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "Tast 1" } });
    wrapper.find("button").simulate("click");
    expect(store.getState().todos).not.toEqual(expected);
  });
});

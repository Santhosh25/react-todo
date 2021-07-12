import React from "react";
import { v4 as uuidv4 } from "uuid";
import Paper from "@material-ui/core/Paper";

import TodoList from "../TodoList";
import { store } from "../../../store";
import actions from "../../../actions";
import { renderWithTheme, mountWithTheme } from "../../../setupTests";

describe("Add TODO Component", () => {
  let wrapper;
  const mockFn = jest.fn();
  beforeEach(() => {
    wrapper = renderWithTheme(<TodoList />);
  });

  afterEach(() => {
    store.dispatch({
      type: actions.CLEAR,
    });
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("confirm single input field rendered", () => {
    const payload = {
      id: "e98e73ed-6d3d-4fe8-96a3-ba5a990bce6d",
      text: "Tast 1",
      isDone: false,
      isArchive: false,
    };
    store.dispatch({
      type: actions.ADD,
      payload,
    });

    store.dispatch({
      type: actions.FILTER_PENDING,
      payload: [payload],
    });
    wrapper = mountWithTheme(<TodoList />);
    expect(wrapper.find("input").length).toBe(1);
  });
});

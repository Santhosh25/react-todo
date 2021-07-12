import { render, screen } from "@testing-library/react";

import App from "../App";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../store";

describe("App component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}><App /></Provider>);
  });
  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

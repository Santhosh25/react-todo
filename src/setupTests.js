// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow, mount, render } from "enzyme";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "./store";

React.useLayoutEffect = React.useEffect;
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));
// const constantDate = new Date('2017-06-13T04:41:20');
// global.Date = class extends Date {
//   constructor(value) {
//     return constantDate;
//   }
// };
configure({ adapter: new Adapter() });

const wrapChildWithThemeProvider = (children) => (
  <Provider store={store}>{children}</Provider>
);

const shallowWithTheme = (children) =>
  shallow(wrapChildWithThemeProvider(children));
const mountWithTheme = (children) =>
  mount(wrapChildWithThemeProvider(children));
const renderWithTheme = (children) =>
  render(wrapChildWithThemeProvider(children));

export { shallowWithTheme, mountWithTheme, renderWithTheme };

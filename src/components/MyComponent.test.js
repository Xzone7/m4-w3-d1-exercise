import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  let component;

  beforeEach(() => {
    component = shallow(<MyComponent />);
  });

  it("should render correctly", () => {
    expect(component).not.toBe.null;
  });

  it("should render initial layout", () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  it("should create an entry in component state", () => {
    component.find("input").props().onChange({
      target: {
        name: "myName",
        value: "myValue"
      }
    });
    expect(component.state("input")).toBeDefined();
  });

  it("should create an entry in component state with the event value", () => {
    component.find("input").props().onChange({
      target: {
        name: "myName",
        value: "myValue"
      }
    });
    expect(component.state("input")).toEqual("myValue");
  });
});

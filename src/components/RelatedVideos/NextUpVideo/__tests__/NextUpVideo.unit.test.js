import React from "react";
import { shallow } from "enzyme";
import { NextUpVideo } from "../NextUpVideo";

describe("NextUpVideo", () => {
  it("renders", () => {
    const wrapper = shallow(<NextUpVideo />);
    expect(wrapper).toMatchSnapshot();
  });
});

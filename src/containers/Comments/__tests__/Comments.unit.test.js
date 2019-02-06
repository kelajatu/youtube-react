import React from "react";
import { shallow } from "enzyme";
import { Comments } from "../Comments";

describe("Comments", () => {
  it("renders Comments without props", () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders wihout amountComments", () => {
    const wrapper = shallow(<Comments amountComments={123456} />);
    expect(wrapper).toMatchSnapshot();
  });
});

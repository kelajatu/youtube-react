import React from "react";
import { shallow } from "enzyme";
import { CommentsHeader } from "../CommentsHeader";

describe("CommentsHeader", () => {
  it("renders with amountComments set to null", () => {
    const wrapper = shallow(<CommentsHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Comments renders with amountComments = 0", () => {
    const wrapper = shallow(<CommentsHeader amountsComments={123} />);
    expect(wrapper).toMatchSnapshot();
  });
});

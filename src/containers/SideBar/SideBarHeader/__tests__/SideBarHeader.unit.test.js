import React from "react";
import { SideBarHeader } from "../SideBarHeader";
import { shallow } from "enzyme";

describe("SideBarHeader", () => {
  it("renders", () => {
    const wrapper = shallow(<SideBarHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders with empty title", () => {
    const wrapper = shallow(<SideBarHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders with title", () => {
    const wrapper = shallow(<SideBarHeader title="Title" />);
    expect(wrapper).toMatchSnapshot();
  });
});

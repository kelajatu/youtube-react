import { VideoInfoBox } from "../VideoInfoBox";
import { shallow } from "enzyme";
import React from "react";

describe("VideoInfoBox", () => {
  it("renders collapsed", () => {
    const wrapper = shallow(<VideoInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders expanded", () => {
    const wrapper = shallow(<VideoInfoBox />);
    wrapper.setState({ collapsed: false });
    expect(wrapper).toMatchSnapshot();
  });
});

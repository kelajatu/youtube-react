import { VideoInfoBox } from "../VideoInfoBox";
import { shallow } from "enzyme";
import React from "react";

describe("VideoInfoBox", () => {
  it("renders collapesed", () => {
    const wrapper = shallow(<VideoInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });
});

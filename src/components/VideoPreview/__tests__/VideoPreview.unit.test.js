import React from "react";
import { shallow } from "enzyme";
import { VideoPreview } from "../VideoPreview";

describe("VideoPreview", () => {
  it("renders", () => {
    const wrapper = shallow(<VideoPreview />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders horizontally", () => {
    const wrapper = shallow(<VideoPreview horizontal={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

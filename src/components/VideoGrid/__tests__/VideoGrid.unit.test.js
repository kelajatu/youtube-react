import React from "react";
import { shallow } from "enzyme";
import { VideoGrid } from "../VideoGrid";

describe("VideoGrid", () => {
  it("renders without props", () => {
    const wrapper = shallow(<VideoGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with title prop", () => {
    const wrapper = shallow(<VideoGrid title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without divider", () => {
    const wrapper = shallow(<VideoGrid hiderDivider={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

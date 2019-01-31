import React from "react";
import { shallow } from "enzyme";
import { VideoGridHeader } from "../VideoGridHeader";

describe("VideoGridHeder", () => {
  it("renders without props", () => {
    const wrapper = shallow(<VideoGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with empty string header", () => {
    const wrapper = shallow(<VideoGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with title", () => {
    const wrapper = shallow(<VideoGridHeader title="Autos & Vehicles" />);
    expect(wrapper).toMatchSnapshot();
  });
});

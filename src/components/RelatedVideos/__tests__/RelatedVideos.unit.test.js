import React from "react";
import { shallow } from "enzyme";
import { RelatedVideos } from "../RelatedVideos";

describe("RelatedVideos", () => {
  it("renders", () => {
    const wrapper = shallow(<RelatedVideos />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { Video } from "../Video";
import { shallow } from "enzyme";

it("renders video component", () => {
  const wrapper = shallow(<Video id="HAuXJVI_bUs" />);
  expect(wrapper).toMatchSnapshot();
});

it("renders null if id invideo component no specified", () => {
  const wrapper = shallow(<Video />);
  expect(wrapper).toMatchSnapshot();
});

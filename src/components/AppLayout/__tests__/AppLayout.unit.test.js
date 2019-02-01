import React from "react";
import { shallow } from "enzyme";
import { AppLayout } from "../AppLayout";

it("renders empty <AppLayout/>", () => {
  const wrapper = shallow(<AppLayout />);
  expect(wrapper).toMatchSnapshot();
});

it("renders <AppLayout/> with one child", () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child 1</div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders <AppLayout/> with children", () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child</div>
      <div>
        <span>Child</span>
      </div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});

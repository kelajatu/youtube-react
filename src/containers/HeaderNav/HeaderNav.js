import React, { Component } from "react";
import { Form, Icon, Image, Input, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/logo.jpg";

export default class HeaderNav extends Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input placeholder="Search" size="small" action="Go" />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

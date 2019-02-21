import React from "react";
import HeaderNav from "../../containers/HeaderNav/HeaderNav";
import "./AppLayout.scss";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export function AppLayout(props) {
  return (
    <ScrollToTop>
      <div className="app-layout">
        <HeaderNav />
        {props.children}
      </div>
    </ScrollToTop>
  );
}

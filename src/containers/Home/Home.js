import React from "react";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { bindActionsCreator } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { SideBar } from "../SideBar/SideBar";
import { HomeContent } from "./HomeContent/HomeContent";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <HomeContent />
      </React.Fragment>
    );
  }
}

export default Home;

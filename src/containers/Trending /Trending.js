import React from "react";
import "./Trending.scss";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import { SideBar } from "../SideBar/SideBar";
import * as videoActions from "../../store/actions/video";
import { getMostPopularVideos } from "../../store/reducers/videos";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class Trending extends React.Component {
  render() {
    const previews = this.getVideoPreviews();
    return (
      <React.Fragment>
        <SideBar />
        <div className="trending">{previews}</div>
      </React.Fragment>
    );
  }

  getVideoPreviews() {
    return this.props.videos.map(video => (
      <VideoPreview
        horizontal={true}
        expanded={true}
        video={video}
        key={video.id}
        pathname={"/watch"}
        search={"?v=" + video.id}
      />
    ));
  }
}

function mapStateToProps(state) {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);

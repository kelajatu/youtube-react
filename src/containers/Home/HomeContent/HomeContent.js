import { VideoGrid } from "../../../components/VideoGrid/VideoGrid";
import React from "react";
import "./HomeContent.scss";
import {
  getMostPopularVideos,
  getVideosByCategory
} from "../../../store/reducers/videos";
import { connect } from "react-redux";

const AMOUNT_TRENDING_VIDEOS = 12;

class HomeContent extends React.Component {
  render() {
    const trendingVideos = this.getTrendingVideos();
    return (
      <div className="home-content">
        <div className="responsive-video-grid-container">
          <VideoGrid title="Trending" videos={trendingVideos} />
        </div>
      </div>
    );
  }

  getTrendingVideos() {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }
}

function mapStateToProps(state) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(HomeContent);

import React from "react";
import "./Tredning.scss";
import { VideoPreview } from "../../components/VideoPreview";
import { SideBar } from "../SideBar/SideBar";

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

export default Trending;

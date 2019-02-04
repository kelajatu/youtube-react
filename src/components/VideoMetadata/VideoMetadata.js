import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./VideoMetadata.scss";

export function VideoMetadata(props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";
  return (
    <div className="video-medtadata">
      <h3>Video title</h3>
      <div className="video-stats">
        <span>{viewCount} views</span>
      </div>
      <Divider />
    </div>
  );
}

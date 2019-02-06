import React from "react";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentsHeader amoountComments={this.props.amoountComments} />
      </div>
    );
  }
}

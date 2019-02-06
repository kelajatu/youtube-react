import React from "react";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentsHeader amoountComments={this.props.amoountComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

import videosReducer from "../videos";
import { MOST_POPULAR } from "../../actions/video";
import { SUCCESS } from "../../actions";
import mostPopularResponse from "./responses/MOST_POPULAR_SUCCESS";
import mostPopularSuccessState from "./states/MOST_POPULAR_SUCCESS";
import videos from "../videos";

const initialState = {
  byId: {},
  mostPopular: {}
};

describe("videos reducer", () => {
  it("test undefined action type initial state with videos reducer", () => {
    const expectedEndState = { ...initialState };
    expect(videosReducer(undefined, { type: "some-unused-type" })).toEqual(
      expectedEndState
    );
  });
});

import apiReducer from "../api";
import { YOUTUBE_LIBRARY_LOADED } from "../../actions/api";

const initialState = {
  libraryLoaded: false
};

describe("api Reducer", () => {
  it("tests unised type with default initial state", () => {
    const unusedActionType = "unused-action-type";
    const expectedEndState = { ...initialState };
    expect(apiReducer(undefined, { type: unusedActionType })).toEqual(
      expectedEndState
    );
  });
});

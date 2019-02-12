import apiReducer from "../api";
import { YOUTUBE_LIBRARY_LOADED } from "../../actions/api";

const initialState = {
  libraryLoaded: false
};

describe("api Reducer", () => {
  it("tests unused type with default initial state", () => {
    const unusedActionType = "unused-action-type";
    const expectedEndState = { ...initialState };
    expect(apiReducer(undefined, { type: unusedActionType })).toEqual(
      expectedEndState
    );
  });

  it("test api reducer with YOUTUBE_LIBRARY_LOADED action", () => {
    const startState = { ...initialState };
    const expectedEndState = {
      libraryLoaded: true
    };
    expect(apiReducer(startState, { type: YOUTUBE_LIBRARY_LOADED })).toEqual(
      expectedEndState
    );
  });

  it("test api reducer for idempotence with YOUTUBELIBRARYLOADED action", () => {
    const startState = {
      libraryLoaded: true
    };
    expect(apiReducer(startState, { type: YOUTUBE_LIBRARY_LOADED })).toEqual(
      startState
    );
  });
});

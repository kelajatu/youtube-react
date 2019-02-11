import { createRequestTypes } from "./index";

export const YOUTUBE_LIBRARY_LOADED = "YOUTUBE_LIBRARY_LOADED";

export const youtubeLibraryLoaded = createRequestTypes.bind(
  null,
  YOUTUBE_LIBRARY_LOADED
);

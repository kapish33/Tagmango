import { CUSTOM_PLAYLIST, SETDATA } from "./actionTypes";

const initialState = { songs: [], constArray: [] };

export const getDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETDATA:
      return { songs: payload, constArray: payload };

    case CUSTOM_PLAYLIST:
      return {
        songs: state.songs.filter(
          (song) =>
            song.artists.toLowerCase().trim() === payload.toLowerCase().trim()
        ),
      };

    default:
      return state;
  }
};

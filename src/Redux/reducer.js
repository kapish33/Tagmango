import { CUSTOM_PLAYLIST, SETDATA } from "./actionTypes";

const initialState = { songs: [] };

export const getDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETDATA:
      return { songs: payload };

    case CUSTOM_PLAYLIST:
      console.log(payload);
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

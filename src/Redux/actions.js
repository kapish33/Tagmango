import { CUSTOM_PLAYLIST, SETDATA } from "./actionTypes";

export const getData = (dispatch) => {
  fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SETDATA,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

export const setData = (data) => {
  return {
    type: SETDATA,
    data,
  };
};

export const customPlaylist = (query) => {
  return {
    type: CUSTOM_PLAYLIST,
    payload: query,
  };
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customPlaylist, getData } from "./Redux/actions";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const constArray = useSelector((state) => state.constArray);
  const [playlist, setPlaylist] = React.useState([]);
  const handelSelect = (e) => {
    const id = e;
    console.log(id);
    const song = songs.filter((song) => song.artists === id);
    setPlaylist([...song]);
  };
  useEffect(() => {
    dispatch(getData);
  }, []);
  return (
    <div>
      <select
        onChange={(e) => {
          //   dispatch(customPlaylist(e.target.value));
          handelSelect(e.target.value);
        }}
      >
        <option value="">Select Artist</option>
        {constArray.map((song) => {
          return (
            <option key={uuidv4()} value={song.artists}>
              {song.artists}
            </option>
          );
        })}
      </select>

      <div className="allSongs">
        {playlist.map((song) => {
          return (
            <div className="audioBox" key={uuidv4()}>
              <h1>{song.song}</h1>
              <p>{song.artists}</p>
              <img className="image" src={song.cover_image} alt="song" />
              <audio className="audioPlayer" controls>
                <source src={song.url} type="audio/mpeg" />
              </audio>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

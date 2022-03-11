import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { customPlaylist, getData } from "./Redux/actions";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  console.log(songs);

  useEffect(() => {
    dispatch(getData);
  }, []);

  return (
    <div className="App">
      <button onClick={() => dispatch(customPlaylist("atif Aslam"))}>
        sort by artits
      </button>
      <div>
        {songs.map((song) => {
          return (
            <div key={uuidv4()}>
              <h1>{song.song}</h1>
              <p>{song.artists}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

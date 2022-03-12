import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getData } from "./Redux/actions";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home.jsx";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  localStorage.setItem("songs", JSON.stringify(songs));
  useEffect(() => {
    dispatch(getData);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button
                className="playlistBtn"
                onClick={() => {
                  navigate("/playlist");
                }}
              >
                Go To Playlist
              </button>
              <div className="allSongs">
                {songs.map((song) => {
                  return (
                    <div className="audioBox" key={uuidv4()}>
                      <h1>{song.song}</h1>
                      <p>{song.artists}</p>
                      <img
                        className="image"
                        src={song.cover_image}
                        alt="song"
                      />
                      <audio className="audioPlayer" controls>
                        <source src={song.url} type="audio/mpeg" />
                      </audio>
                    </div>
                  );
                })}
              </div>
            </>
          }
        />
        <Route path="/playlist" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

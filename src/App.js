import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import Playlists from './components/Playlist';
import PlaylistSongs from './components/PlaylistSongs';

function App() {
  const playlistObj = useSelector((state) => state.playlist.playlistState);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Playlists playlist={playlistObj} />} />
        <Route path="/:playlistName/:playlistId" element={<PlaylistSongs />} />
      </Routes>
    </>
  );
}

export default App;

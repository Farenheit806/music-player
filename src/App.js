import { Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header";
import Home from "./pages/Home";
import { MusicList } from "./pages/MusicList";
import { Playlist } from "./pages/Playlist";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/music" element={<MusicList />} />
    </Routes>
  </>
);

export default App;

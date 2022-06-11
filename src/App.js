import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newmeetups" element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;

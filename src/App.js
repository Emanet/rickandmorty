import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Residents from "./pages/Residents";
import "../src/app.css"
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Locations />}></Route>
          <Route path="/residents/:location_id" element={<Residents />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./pages/Locations";
import Residents from "./pages/Residents";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/locations" element={<Locations />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

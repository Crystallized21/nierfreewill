import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import OSPage from "./components/pages/OSPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loados" element={<OSPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
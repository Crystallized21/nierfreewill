import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import OSPage from "./components/pages/OSPage.tsx";
import TestSite from "./components/pages/TestSite.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loados" element={<OSPage/>} />
        <Route path="/test" element={<TestSite/>} />
      </Routes>
    </Router>
  );
}

export default App;
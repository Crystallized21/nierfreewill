// File: `src/App.tsx`
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import OSPage from "./components/pages/OSLoad.tsx";
import TestSite from "./components/pages/TestSite.tsx";
import OsMap from "./components/pages/os/OSMap.tsx";
import OSQuest from "./components/pages/os/OSQuest.tsx";
import OSLayout from "./components/pages/os/OSLayout.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loados" element={<OSPage/>}/>
        <Route path="/test" element={<TestSite/>}/>

        <Route path="/os" element={<OSLayout/>}>
          <Route path="/os/map" element={<OsMap/>}/>
          <Route path="/os/quest" element={<OSQuest/>}/>
          <Route path="/os/items" element={<TestSite/>}/>
          <Route path="/os/weapons" element={<TestSite/>}/>
          <Route path="/os/skills" element={<TestSite/>}/>
          <Route path="/os/intel" element={<TestSite/>}/>
          <Route path="/os/system" element={<TestSite/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
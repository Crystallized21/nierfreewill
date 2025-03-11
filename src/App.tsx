import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import OSPage from "./components/pages/OSLoad.tsx";
import TestSite from "./components/pages/TestSite.tsx";
import OsMap from "./components/pages/os/OSMap.tsx";
import OSQuest from "./components/pages/os/OSQuest.tsx";
import OSLayout from "./components/pages/os/OSLayout.tsx";
import OSItems from "./components/pages/os/OSItems.tsx";
import OSWeapons from "./components/pages/os/OSWeapons.tsx";
import OSSkills from "./components/pages/os/OSSkills.tsx";
import OSIntel from "./components/pages/os/OSIntel.tsx";
import {IntelModule} from "./components/uiElements/osInterface/Intel/IntelModule.tsx";
import ActiveIntelModule from "./components/uiElements/osInterface/Intel/ActiveIntelModule.tsx";
import OSSystem from "./components/pages/os/OSSystem.tsx";

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
          <Route path="/os/items" element={<OSItems/>}/>
          <Route path="/os/weapons" element={<OSWeapons/>}/>
          <Route path="/os/skills" element={<OSSkills/>}/>
          <Route path="/os/intel" element={<OSIntel/>}>
            <Route path={':type'} element={<IntelModule/>}>
              <Route path={":intelid"} element={<ActiveIntelModule/>}></Route>
            </Route>
          </Route>
          <Route path="/os/system" element={<OSSystem/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
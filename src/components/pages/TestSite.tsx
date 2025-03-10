import ErrorPopup from "../uiElements/error/ErrorPopup.tsx";
import {NavbarModule} from "../modules/NavBarModule.tsx";
import {YorhaNavLink} from "../uiElements/osInterface/NavBar/YorhaNavLink.tsx";

const TestSite = () => {
  return (
    <div>
      <h1 className="text-white">Test Site</h1>
      <ErrorPopup text="Error: Systems Abnormal" x={2} y={2}/>
      <NavbarModule/>
      <YorhaNavLink/>
    </div>
  );
};

export default TestSite;
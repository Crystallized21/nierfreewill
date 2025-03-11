import {Outlet, useParams} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import OSstyles from "./OS.module.scss";

const OSWeapons = () => {
  const param = useParams();

  const TypeChecker = () => {
    if (!param.list) {
      return "";
    } else {
      return "- Weapons";
    }
  };
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="WEAPONS"
        subtitle={TypeChecker()}
        child={
          <PagesChildTemplate
            lessRightSpace={true}
            extraMidSpace={true}
            LeftContent={
              <>
                <YorhaNavLink disabled={true} text="Weapons"/>
                <YorhaNavLink disabled={true} text="Weapons Set 1"/>
                <YorhaNavLink disabled={true} text="Weapons Set 2"/>
              </>
            }
            MiddleContent={<Outlet/>}
            RightContent={<></>}
          />
        }
        footer="Your weapon is broken. What are you fighting for now?"
      />
    </div>
  );
};

export default OSWeapons;
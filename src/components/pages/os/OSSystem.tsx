import PagesTemplate from "../../PagesTemplete.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import OSstyles from "./OS.module.scss";

const OSSystem = () => {

  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`QUESTS`}
        footer="Are you sure you want to end it all? Nothing will be left. No one will be left."
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                <YorhaNavLink
                  text="Delete OS"
                />
              </>
            }
          />
        }
      />
    </div>
  );
};

export default OSSystem;
import {Outlet, useParams} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";

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
                {["Weapons", "Weapons Set 1", "Weapons Set 2"].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.1 + index * 0.05, ease: [.25, .75, .2, 1]}}
                  >
                    <YorhaNavLink disabled={true} text={text}/>
                  </motion.div>
                ))}
              </>
            }
            MiddleContent={<Outlet/>}
            RightContent={<></>}
          />
        }
        footer="FCS System Unavailable. What are you fighting for now?"
      />
    </div>
  );
};

export default OSWeapons;
import PagesTemplate from "../../PagesTemplete.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";

const OSSystem = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`SYSTEM`}
        footer="Are you sure you want to end it all? Nothing will be left. No one will be left."
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                <motion.div
                  initial={{x: -100, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.4, delay: 0.1, ease: [.25, .75, .2, 1]}}
                >
                  <YorhaNavLink
                    text="Delete OS"
                  />
                </motion.div>
              </>
            }
          />
        }
      />
    </div>
  );
};

export default OSSystem;
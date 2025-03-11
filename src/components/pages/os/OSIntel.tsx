import {Outlet} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";

// TODO: add pod dialogue open link entry
// TODO: add free will stuff to the intel

const IntelList = [
  {
    name: "Archives",
    link: "/os/intel/archives/?type=",
    type: "archives",
  },
  {
    name: "Unit Data",
    link: "/os/intel/unitdata/?type=",
    type: "unitdata",
  },
  {
    name: "Tutorials",
    link: "/os/intel/tutorials/?type=",
    type: "tutorials",
  },
  {
    name: "Weapon Stories",
    link: "/os/intel/weaponstories/?type=",
    type: "weaponstories",
  },
  {
    name: "Picture Books",
    link: "/os/intel/picturebooks/?type=",
    type: "picturebooks",
  },
  {
    name: "Fishing Encyclopedia",
    link: "/os/intel/fishingencyclopedia/?type=",
    type: "fishing"
  },
  {
    name: "Novel",
    link: "/os/intel/novel/?type=",
    type: "novel",
  }
];

const OSIntel = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="INTEL"
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                {IntelList.map((item, index) => (
                  <motion.div
                    key={item.link}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.1 + index * 0.05, ease: [.25, .75, .2, 1]}}
                  >
                    <YorhaNavLink
                      key={item.link}
                      text={item.name}
                      to={item.link}
                      filter={item.type}
                      filterType={"type"}
                    />
                  </motion.div>
                ))}
              </>
            }
            Outlet={<Outlet/>}
            RightContent={<StatusModule/>}
          />
        }
        footer="They only thing that remains is your memories, and the knowledge you have gained. This is for the truth."
      />
    </div>
  );
};

export default OSIntel;
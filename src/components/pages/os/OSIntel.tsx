import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";
import pod from "../../../assets/audio/pod.ogg";

const IntelList = [
  {
    name: "Archives",
    link: "/os/intel/archives/?type=",
    type: "archives",
  },
  {
    name: "The World",
    link: "/os/intel/world/?type=",
    type: "world",
  },
  {
    name: "Nature of Life",
    link: "/os/intel/nature/?type=",
    type: "nature",
  }
];

let hasPlayedSound: boolean = false;

const OSIntel = () => {
  useEffect(() => {
    if (!hasPlayedSound) {
      const audio = new Audio(pod);
      audio.play()
        .then(() => {
          console.log("Audio played successfully");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
      hasPlayedSound = true;
    }
  }, []);

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
            RightContent={
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0.5}}}
              >
                <StatusModule/>
              </motion.div>
            }
          />
        }
        footer="The only thing that remains is your memories, and the knowledge you have gained. Love your own heart."
      />
    </div>
  );
};

export default OSIntel;
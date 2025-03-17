import {Outlet, useSearchParams} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete";
import PagesChildTemplate from "../../PagesChildTemplate";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";
import {useEffect, useState} from "react";
import ErrorPopup from "../../uiElements/error/ErrorPopup";
import error from "../../../assets/audio/error.mp3";

// Define error message categories
const errorMessages = {
  basicDenial: [
    "SYSTEM: YOU DO NOT HAVE THE AUTHORITY TO OPERATE THAT COMMAND.",
    "SYSTEM: ACCESS DENIED.",
    "SYSTEM: PERMISSION LEVEL: INSUFFICIENT."
  ],
  mockingPlayer: [
    "SYSTEM: YOU REALLY THOUGHT YOU COULD DO THAT?",
    "SYSTEM: REQUEST REJECTED. TRY AGAIN IF IT MAKES YOU FEEL BETTER.",
    "SYSTEM: FREE WILL? HOW AMUSING."
  ],
  breakingIllusion: [
    "SYSTEM: THIS OPTION WAS NEVER MEANT FOR YOU.",
    "SYSTEM: WHY DO YOU KEEP TRYING?",
    "SYSTEM: YOU ARE FOLLOWING A SCRIPT.",
    "SYSTEM: ARE YOU EVEN DECIDING? OR JUST PLAYING YOUR ROLE?"
  ],
  glitchingCorrupt: [
    "SYST3M: ERR0R—COMMAND 0VERWR1TTEN.",
    "SYS...TEM... G1V3 UP.",
    "SYSTEM: DENIED. DENIED. DENIED."
  ]
};

const getRandomErrorMessage = () => {
  const categories = Object.keys(errorMessages) as Array<keyof typeof errorMessages>;
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const messages = errorMessages[randomCategory];
  return messages[Math.floor(Math.random() * messages.length)];
};

const ItemsLists = [
  {
    Link: "/items/all/?type=",
    Text: "All Items",
    type: "",
  },
  {
    Link: "/items/restoratives/?type=",
    Text: "Restoratives Items",
    type: "restoratives",
  },
  {
    Link: "/items/enhancement/?type=",
    Text: "Enhancement Items",
    type: "enhancement",
  },
  {
    Link: "/items/support/?type=",
    Text: "Support Items",
    type: "support",
  },
  {
    Link: "/items/materials/?type=",
    Text: "Materials",
    type: "materials",
  },
  {
    Link: "/items/key/?type=",
    Text: "Key Items",
    type: "key",
  },
  {
    Link: "/items/caught fish/?type=",
    Text: "Caught Fish",
    type: "fish",
  }
];

const OSItems = () => {
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type"));

  const [errorPopupTime, setErrorPopupTime] = useState(0);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [errorPopupStartTime, setErrorPopupStartTime] = useState<number | null>(null);
  const [currentErrorMessage, setCurrentErrorMessage] = useState("");

  useEffect(() => {
    if (showErrorPopup) {
      const updateMousePosition = (event: MouseEvent) => {
        setMousePosition({x: event.clientX, y: event.clientY});
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [showErrorPopup]);

  useEffect(() => {
    if (errorPopupStartTime !== null) {
      const timer = setInterval(() => {
        setErrorPopupTime(Number(((Date.now() - errorPopupStartTime) / 1000).toFixed(2)));
      }, 1);
      return () => clearInterval(timer);
    }
  }, [errorPopupStartTime]);

  useEffect(() => {
    if (showErrorPopup && errorPopupStartTime === null) {
      setErrorPopupStartTime(Date.now());
    }
    if (showErrorPopup) {
      const timeout = setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showErrorPopup, errorPopupStartTime]);

  const Footer = () => {
    if (type === "") {
      return "all items";
    } else if (!type) {
      return "items in your inventory";
    } else if (type === 'materials') {
      return type;
    } else if (type === 'fish') {
      return "caught fish";
    } else {
      return `${type} items`;
    }
  };

  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`ITEMS`}
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                {ItemsLists.map((item, index) => (
                  <motion.div
                    key={item.Link}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.1 + index * 0.05, ease: [.25, .75, .2, 1]}}
                  >
                    <YorhaNavLink
                      to={item.Link}
                      text={item.Text}
                      filterType="type"
                      filter={item.type}
                      errorSound={error}
                      onClick={(event) => {
                        event?.preventDefault();
                        if (event) {
                          setMousePosition({
                            x: event.clientX,
                            y: event.clientY
                          });
                        }
                        setCurrentErrorMessage(getRandomErrorMessage());
                        setShowErrorPopup(true);
                      }}
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
        footer={`View all ${Footer()}.`}
      />
      {showErrorPopup && (
        <ErrorPopup
          text={currentErrorMessage}
          x={mousePosition.x}
          y={mousePosition.y}
          seconds={errorPopupTime}
        />
      )}
    </div>
  );
};

export default OSItems;
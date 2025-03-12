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
                        setShowErrorPopup(true);
                      }}
                    />
                  </motion.div>
                ))}
              </>
            }
            Outlet={<Outlet/>}
            RightContent={<StatusModule/>}
          />
        }
        footer={`View all ${Footer()}.`}
      />
      {showErrorPopup && (
        <ErrorPopup
          text="You do not have the authority to operate that command."
          x={mousePosition.x}
          y={mousePosition.y}
          seconds={errorPopupTime}
        />
      )}
    </div>
  );
};

export default OSItems;
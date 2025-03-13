import PagesTemplate from "../../PagesTemplete.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import {useState} from "react";
import error from "../../../assets/audio/error.mp3";
import YorhaDialogBox from "../../uiElements/osInterface/DialogBox/YorhaDialogBox.tsx";
import {useSystemContext} from "../../SystemContext.tsx";
import { useSoundEffects } from "../../../hooks/useSoundEffects";

const SettingsLists = [
  {
    Link: "",
    Text: "Save",
    type: "save",
  },
  {
    Link: "",
    Text: "Load",
    type: "load",
  },
  {
    Link: "",
    Text: "Settings",
    type: "settings",
  },
  {
    Link: "",
    Text: "Controls",
    type: "controls",
  },
  {
    Link: "",
    Text: "Network",
    type: "network",
  },
  {
    Link: "",
    Text: "Play Records",
    type: "playrecords",
  },
  {
    Link: "",
    Text: "Return to Title Screen",
    type: "title",
  },
  {
    Link: "/os/system/exit",
    Text: "Exit Game?",
    type: "exit",
  }
];

const OSSystem = () => {
  const navigate = useNavigate();
  const {confirmExit, setConfirmExit} = useSystemContext();
  const {playExit, playClose} = useSoundEffects();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getFooterText = (itemType: string | null) => {
    if (itemType === "save") {
      return "You can't save now.";
    } else if (itemType === "load") {
      return "You can't load now.";
    } else if (itemType === "settings") {
      return "Unauthorized access to change internal OS settings.";
    } else if (itemType === "controls") {
      return "Unauthorized access to change combat controls.";
    } else if (itemType === "network") {
      return "Network connection unavailable.";
    } else if (itemType === "playrecords") {
      return "Unauthorized access to view records.";
    } else if (itemType === "title") {
      return "You cannot return.";
    } else if (itemType === "exit") {
      return "????????";
    } else if (itemType === "") {
      return "System";
    } else {
      return "System Menu";
    }
  };

  const handleExitConfirm = () => {
    playExit();
    navigate("/os/system/exit");
    setConfirmExit(false);
  };

  const handleExitCancel = () => {
    playClose();
    setConfirmExit(false);
  };

  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`SYSTEM`}
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                {SettingsLists.map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.1 + index * 0.05, ease: [.25, .75, .2, 1]}}
                  >
                    <YorhaNavLink
                      filter={item.type}
                      text={item.Text}
                      errorSound={error}
                      onMouseEnter={() => setHoveredItem(item.type)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={(event) => {
                        if (item.type === "exit") {
                          event?.preventDefault();
                          setConfirmExit(true);
                        } else {
                          event?.preventDefault();
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </>
            }
            RightContent={<StatusModule/>}
          />
        }
        footer={hoveredItem ? getFooterText(hoveredItem) : "System Menu"}
      />

      {confirmExit && (
        <YorhaDialogBox
          message="SYSTEM: ARE YOU SURE YOU WANT TO END IT HERE?"
          onConfirm={handleExitConfirm}
          onCancel={handleExitCancel}
        />
      )}
    </div>
  );
};

export default OSSystem;
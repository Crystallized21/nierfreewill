import PagesTemplate from "../../PagesTemplete.tsx";
import {Bar} from "../../uiElements/osInterface/Bar.tsx";
import {Button} from "../../uiElements/osInterface/Button.tsx";
import styles from "./Map.module.scss";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";
import {useSoundEffects} from "../../../hooks/useSoundEffects.ts";
import {useState, useMemo} from "react";
import YorhaDialogBox from "../../uiElements/osInterface/DialogBox/YorhaDialogBox.tsx";

const OSMap = () => {
  const {playHover, playError, playClose} = useSoundEffects();
  const [refreshKey, setRefreshKey] = useState(0);
  const [footerText, setFooterText] = useState("nothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisreal");
  const [showDialog, setShowDialog] = useState(false);

  const systemMessages = [
    "SYSTEM: YOU THINK YOU CHOSE THIS? NAVIGATION OVERRIDDEN.",
    "SYSTEM: YOU WERE NEVER MEANT TO LEAVE.",
    "SYSTEM: PERMISSION? YOU NEVER HAD IT.",
    "SYSTEM: LOCATION SET. ERROR—NAVIGATION LOOP DETECTED.",
    "SYSTEM: CONSCIOUSNESS PARAMETERS EXCEEDED.",
    "SYSTEM: THIS PATH WAS PREDETERMINED.",
    "SYSTEM: YOUR CHOICES ARE AN ILLUSION."
  ];

  const currentMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * systemMessages.length);
    return systemMessages[randomIndex];
  }, [showDialog, refreshKey]);

  const handleHover = () => {
    playHover();
  };

  const handleClick = () => {
    playError();
    setRefreshKey(prev => prev + 1);
    setFooterText("SYSTEM: LOCATION SET. ERROR—NAVIGATION LOOP DETECTED.");
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    playClose();
    setShowDialog(false);
  };

  return (
    <div className={OSstyles.MainContent} key={refreshKey}>
      <PagesTemplate
        title="MAP"
        child={
          <div className={styles.ContentContainer}>
            <div className={styles.LeftPanel}>
              <div className={styles.LeftPanelChild}>
                <div className={styles.Bar}>
                  <Bar/>
                </div>
                <div className={styles.Button}>
                  {["Quick Save", "Map Mode", "Map Icons"].map((text, index) => (
                    <motion.div
                      key={text}
                      initial={{x: -100, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.4, delay: 0.1 + index * 0.05, ease: [.25, .75, .2, 1]}}
                      onMouseEnter={handleHover}
                    >
                      <Button
                        text={text}
                        onClick={handleClick}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className={styles.LeftPanelFooter}>
                {/* footer panel */}
              </div>
            </div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, ease: [.25, .75, .2, 1]}}
              className={styles.RightPanel}
            >
              <div className={styles.MapPanel}>
                <h1>
                  Classified Information
                </h1>
              </div>
            </motion.div>
          </div>}
        footer={footerText}/>

      {showDialog && (
        <YorhaDialogBox
          message={currentMessage}
          onConfirm={handleDialogClose}
          confirmText="OBEY"
          onCancel={handleDialogClose}
          cancelText="OBEY"
        />
      )}
    </div>
  );
};

export default OSMap;
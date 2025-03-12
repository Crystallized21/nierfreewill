import PagesTemplate from "../../PagesTemplete.tsx";
import {Bar} from "../../uiElements/osInterface/Bar.tsx";
import {Button} from "../../uiElements/osInterface/Button.tsx";
import styles from "./Map.module.scss";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";
import {useSoundEffects} from "../../../hooks/useSoundEffects.ts";
import {useState} from "react";

const OSMap = () => {
  const {playHover, playError} = useSoundEffects();
  const [refreshKey, setRefreshKey] = useState(0);
  const [footerText, setFooterText] = useState("nothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisreal");

  const handleHover = () => {
    playHover();
  };

  const handleClick = () => {
    playError();
    setRefreshKey(prev => prev + 1);
    setFooterText("SYSTEM: LOCATION SET. ERROR—NAVIGATION LOOP DETECTED.");
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
            <div className={styles.RightPanel}>
              <div className={styles.MapPanel}>
                <h1>
                  Classified Information
                </h1>
              </div>
            </div>
          </div>}
        footer={footerText}/>
    </div>
  );
};

export default OSMap;
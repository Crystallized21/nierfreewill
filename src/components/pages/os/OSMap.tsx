import PagesTemplate from "../../PagesTemplete.tsx";
import {Bar} from "../../uiElements/osInterface/Bar.tsx";
import {Button} from "../../uiElements/osInterface/Button.tsx";
import styles from "./Map.module.scss";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";

const OsMap = () => {
  return (
    <div className={OSstyles.MainContent}>
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
                    >
                      <Button disabled={true} text={text}/>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className={styles.LeftPanelFooter}>
                {/* footer panel  */}
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
        footer="nothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisrealnothingisreal`"/>
    </div>
  );
};

export default OsMap;
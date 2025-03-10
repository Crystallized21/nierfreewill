import PagesTemplate from "../../PagesTemplete.tsx";
import {Bar} from "../../uiElements/osInterface/Bar.tsx";
import {Button} from "../../uiElements/osInterface/Button.tsx";
import styles from "./Map.module.scss";
import OSstyles from "./OS.module.scss";

const OsMap = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="QUESTS"
        child={<div className={styles.ContentContainer}>
          <div className={styles.LeftPanel}>
            <div className={styles.LeftPanelChild}>
              <div className={styles.Bar}>
                <Bar/>
              </div>
              <div className={styles.Button}>
                <Button disabled={false} text="Active Quests"/>
                <Button disabled={false} text="All Quests"/>
                <Button disabled={false} text="Cleared Quests"/>
              </div>
            </div>
            <div className={styles.LeftPanelFooter}>
              {/* footer panel  */}
            </div>
          </div>
          <div className={styles.RightPanel}>
            <div className={styles.MapPanel}>
              <h1>
                Classified
              </h1>
            </div>
          </div>
        </div>}
        footer="Map Footer"/>
    </div>
  );
};

export default OsMap;
import PagesTemplate from "../../PagesTemplete.tsx";
import {Bar} from "../../uiElements/osInterface/Bar.tsx";
import {Button} from "../../uiElements/osInterface/Button.tsx";
import styles from "./Map.module.scss";
import OSstyles from "./OS.module.scss";
import {NavbarModule} from "../../modules/NavBarModule.tsx";

const OsMap = () => {
  return (
    <div className={OSstyles.App}>
      <NavbarModule/>
      <PagesTemplate
      title="MAP"
      child={<div className={styles.ContentContainer}>
        <div className={styles.LeftPanel}>
          <div className={styles.LeftPanelChild}>
            <div className={styles.Bar}>
              <Bar/>
            </div>
            <div className={styles.Button}>
              <Button disabled={true} text="Quick Save"/>
              <Button disabled={true} text="Map Mode"/>
              <Button disabled={true} text="Map Icons"/>
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
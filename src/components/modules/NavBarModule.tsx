import styles from '../uiElements/osInterface/NavBar/Navbar.module.scss';
import {Bar} from "../uiElements/osInterface/Bar.tsx";
import {YorhaNavLink} from "../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import {Outlet} from "react-router-dom";
import {RoutesConfig} from "../../RoutesConfig.tsx";
import OSstyles from "../pages/os/OS.module.scss";

export const NavbarModule = () => {
  return (
    <div className={OSstyles.App}>
      <div className={styles.NavBarModule}>
        <div className={styles.navContainer}>
          <div className={styles.bar}>
            <Bar/>
          </div>
          {RoutesConfig.RoutesConfigs.map((item) => {
            return (
              <div key={item.Text} className={styles.nav}>
                <YorhaNavLink variant="nav" key={item.Text} to={`/${item.Link}`} text={item.Text}/>
              </div>
            )
          })}
        </div>
        <hr/>
        <div className={styles.dottedspaced}/>
        <div className={styles.outletContainer}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
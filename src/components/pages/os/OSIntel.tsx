import {Outlet} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete.tsx";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import OSstyles from "./OS.module.scss";

const IntelList = [
  {
    name: "Archives",
    link: "/os/intel/archives/?type=",
    type: "archives",
  },
  {
    name: "Unit Data",
    link: "/os/intel/unitdata/?type=",
    type: "unitdata",
  },
  {
    name: "Tutorials",
    link: "/os/intel/tutorials/?type=",
    type: "tutorials",
  },
  {
    name: "Weapon Stories",
    link: "/os/intel/weaponstories/?type=",
    type: "weaponstories",
  },
  {
    name: "Picture Books",
    link: "/os/intel/picturebooks/?type=",
    type: "picturebooks",
  },
  {
    name: "Fishing Encyclopedia",
    link: "/os/intel/fishingencyclopedia/?type=",
    type: "fishing"
  },
  {
    name: "Novel",
    link: "/os/intel/novel/?type=",
    type: "novel",
  }
];

const OSIntel = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="Intel"
        child={
          <PagesChildTemplate
            LeftContent=
              {IntelList.map((item) => (
                <YorhaNavLink key={Math.random()} text={item.name} to={item.link} filter={item.type}
                              filterType={"type"}/>
              ))}
            Outlet={
              <Outlet/>
            }
            RightContent={
              <StatusModule/>
            }
          />
        }
        footer="View information about encountered units and foes"
      />
    </div>
  );
};

export default OSIntel;

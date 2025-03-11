import {Outlet, useParams, useSearchParams} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete.tsx";
import {SubTitle} from "../../../utils/ParamAsSubtitle.ts";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import OSstyles from "./OS.module.scss";
import {motion} from "motion/react";

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

  const param = useParams();
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type"));

  const TypeCheck = () => {
    if (type === "") {
      return "all";
    } else {
      return param.type;
    }
  };

  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`ITEMS`}
        subtitle={SubTitle(TypeCheck(), "Items")}
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
                      disabled={true}
                      to={item.Link}
                      filter={item.type}
                      filterType={"type"}
                      text={item.Text}
                    />
                  </motion.div>
                ))}
              </>
            }
            Outlet={<Outlet/>}
            RightContent={<StatusModule/>}
          />
        }
        footer="There is nothing left. What would you have now?"
      />
    </div>
  );
};

export default OSItems;
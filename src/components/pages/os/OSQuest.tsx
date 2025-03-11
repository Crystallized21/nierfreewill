import {Outlet, useParams, useSearchParams} from "react-router-dom";
import PagesTemplate from "../../PagesTemplete.tsx";
import {YorhaNavLink} from "../../uiElements/osInterface/NavBar/YorhaNavLink.tsx";
import {SubTitle} from "../../../utils/ParamAsSubtitle.ts";
import PagesChildTemplate from "../../PagesChildTemplate.tsx";
import StatusModule from "../../uiElements/osInterface/StatusModule/StatusModule.tsx";
import OSstyles from "./OS.module.scss";

const QuestList = [
  {
    Link: "/os/quest/Active/Quest5?status=",
    Text: "Active Quests",
    type: "active",
  },
  {
    Link: "/os/quest/all/Quest1?status=",
    Text: "All Quests",
    type: "",
  },
  {
    Link: "/os/quest/cleared/Quest1?status=",
    Text: "Cleared Quests",
    type: "cleared",
  },
];

const OSQuest = () => {

  const param = useParams();
  const [searchParams] = useSearchParams();
  const status = (searchParams.get("status"));

  const TypeCheck = () => {
    if (status === "") {
      return "all";
    } else
      return param.statusType;
  };

  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title={`QUESTS`}
        subtitle={SubTitle(TypeCheck(), "Quest")}
        footer="There is no more world anymore. Your Black Box is only keeping you alive. You were merly just pawns and were ordered to fight."
        child={
          <PagesChildTemplate
            LeftContent={
              <>
                {QuestList.map((item) => (
                  <YorhaNavLink
                    disabled={true}
                    key={item.Link}
                    to={item.Link}
                    filter={item.type}
                    filterType={"status"}
                    text={item.Text}
                  />
                ))}
              </>
            }
            Outlet={<Outlet/>}
            RightContent={<StatusModule/>}
          />
        }
      />
    </div>
  );
};

export default OSQuest;
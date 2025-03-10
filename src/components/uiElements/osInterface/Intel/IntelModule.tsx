import {Outlet, useLocation, useSearchParams} from "react-router-dom";
import styles from './IntelModule.module.scss';
import {YorhaNavLink} from "../NavBar/YorhaNavLink.tsx";
import {Bar} from "../Bar.tsx";
import {Tab} from "../Tab.tsx";
import {DropDown} from "../DropDown.tsx";
import {getArchivesMockData} from "../../../../utils/ArchivesMockData.ts";

export const IntelModule = () => {

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const intelList = getArchivesMockData();

  const first = intelList.filter((intelList) => {
    const filter = searchParams.get("type");

    if (!filter) return true;
    const type = intelList.IntelType;

    return type.startsWith(filter);
  }).map((item) =>
    item.data.map((test) => {
        return (<YorhaNavLink variant="transparent" to={test.id + location.search} text={test.title} key={test.id}/>);
      }
    )
  );

  const second = intelList.filter((intelList) => {
    const filter = searchParams.get("type");

    if (!filter) return true;
    const type = intelList.IntelType;

    return type.startsWith(filter);
  }).map((item) => item.nestedData.map((evenmore) => {
    return (
      <DropDown
        key={evenmore.id}
        Title={evenmore.title}
        Content={
          evenmore.dropDownData.map((yeah) => {
            return (
              <div key={Math.random()} className={styles.dropdownChild}>
                <YorhaNavLink
                  variant="transparent"
                  to={yeah.id + location.search}
                  text={yeah.title}
                />
              </div>
            );
          })
        }
      />
    );
  }));

  const third = second[0].concat(first[0]);
  return (
    <div className={styles.IntelModule}>
      <div className={styles.IntelModuleContainer}>
        <div>
          <Bar/>
        </div>
        <Tab
          className={styles.TabContent}
          content={
            third
          }
        />
      </div>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </div>
  );
};
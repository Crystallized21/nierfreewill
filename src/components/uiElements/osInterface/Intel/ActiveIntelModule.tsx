import {useParams} from "react-router-dom";
import Archives from './Shards/Archives.tsx';
import Fishing from './Shards/Fishing.tsx';
import Novel from './Shards/Novel.tsx';
import PictureBooks from './Shards/PictureBooks.tsx';
import Tutorials from './Shards/Tutorials.tsx';
import Unit from './Shards/Unit.tsx';
import WeaponStories from './Shards/WeaponStories.tsx';
import styles from './IntelModule.module.scss';
import {getArchivesMockID, getNestedArchivesMockID} from "../../../../utils/ArchivesMockData.ts";
import {Widget} from "../Widget.tsx";
import {Tab} from "../Tab.tsx";

const ActiveIntelModule = () => {

  const params = useParams();
  const paramType = params.type;

  if (paramType) {
    const intelListId = getArchivesMockID(paramType, parseInt(params.intelid as string));
    const secondId = getNestedArchivesMockID(paramType, parseInt(params.intelid as string));

    const data = intelListId || secondId;

    const ArchivesTypeCheck = () => {
      const typeMap = {
        archives: data ? (
          <Archives/>
        ) : "weird it seems the data is empty",
        unitdata: <Unit/>,
        tutorials: <Tutorials/>,
        weaponstories: <WeaponStories/>,
        picturebooks: <PictureBooks/>,
        fishingencyclopedia: <Fishing/>,
        novel: <Novel/>
      };

      return typeMap[paramType as keyof typeof typeMap] || <>archives yet to be handled</>;
    };

    const handleModal = () => {
      return console.log("hello");
    };

    const ImageCheck = () => {
      if (data?.image) {
        if (Array.isArray(data?.image)) {
          return <>an array of images</>;
        } else {
          return (
            <div className={styles.ActiveIntelContent}>
              <div className={styles.imageParent}>
                <div onClick={handleModal} className={styles.image}>
                  <img src={(data.image as { unit: string }).unit} alt="text"/>
                </div>
              </div>
              <div className={styles.content}>{ArchivesTypeCheck()}</div>
            </div>
          );
        }
      } else {
        return <>{ArchivesTypeCheck()}</>;
      }
    };

    return (
      <Widget
        dark={true}
        title={data?.title}
        content={
          <Tab content={
            <>
              {ImageCheck()}
            </>
          }/>
        }
      />
    );
  }

  return null;
};

export default ActiveIntelModule;
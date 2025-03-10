import {useParams} from "react-router-dom";
import {getArchivesMockID, getNestedArchivesMockID} from "../../../../../utils/ArchivesMockData.ts";

const Archives = () => {
  const params = useParams();
  const paramType = params.type;

  const intelListId = getArchivesMockID(paramType, parseInt(params.intelid as string));
  const secondId = getNestedArchivesMockID(paramType, parseInt(params.intelid as string));

  const data = intelListId || secondId;

  console.log(data?.content);

  const mapCheck = () => {
    if (!Object.prototype.hasOwnProperty.call(data || {}, "content")) {
      return <>data yorue looking is nt here lol</>;
    } else {
      return (
        <>
          {data?.content.map((item, index) => (
            <div key={index + 1}>
              {typeof item === "object" && item !== null && "contentVar" in item ? item.contentVar : item}
              <br/>
            </div>
          ))}
        </>
      );
    }

    // switch (true) {
    //     case data.content[0].hasOwnProperty("data"):
    //         return <>{data.content[0].data.map((items, index) => <div key={index + 1}>{items}<p /></div>)}</>;
    //     case data.content[0].hasOwnProperty("content"):
    //         return <>{data.content[0].content}</>;
    //     case data.content.some((items) => items):
    //         return <>{data.content.map((items, index) => <div key={index + 1}> {items} <br/> </div>)}</>; 
    //     case data.content[0].hasOwnProperty("data2"):
    //         return <>{data.content[0].data2}</>;
    //     default:
    //         return <>data yorue looking is nt here lol</>;
    // }
  };
  return (
    <> {mapCheck()} </>
  );
};

export default Archives;
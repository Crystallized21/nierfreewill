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
      return <>data you're looking is nt here lol</>;
    } else {
      return (
        <>
          {data?.content.map((item, index) => (
            <div key={index + 1}>
              {typeof item === "object" && item !== null ? JSON.stringify(item) : item}
              <br/>
            </div>
          ))}
        </>
      );
    }
  };
  return (
    <> {mapCheck()} </>
  );
};

export default Archives;
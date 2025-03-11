import {useParams} from "react-router-dom";
import {getArchivesMockID, getNestedArchivesMockID} from "../../../../../utils/ArchivesMockData.ts";

const Unit = () => {
  const params = useParams();
  const paramType = params.type;

  const intelListId = getArchivesMockID(paramType, parseInt(params.intelid as string));
  const secondId = getNestedArchivesMockID(paramType, parseInt(params.intelid as string));

  const data = intelListId || secondId;

  // TODO: remove this console.log
  console.log(data?.content.map((items) => items));

  const mapCheck = () => {
    if (!Object.prototype.hasOwnProperty.call(data || {}, "content")) {
      return <>weird, it seems the unit data is empty</>;
    }

    switch (true) {
      case Object.prototype.hasOwnProperty.call(data, "content"):
        return (
          <>
            {data?.content.map((items, index) =>
              <div key={index + 1}>
                {typeof items === 'string' ? items : JSON.stringify(items)}
                <br/>
              </div>
            )}
          </>
        );
      default:
        return <>weird, it seems the unit data is empty</>;
    }
  };

  return (
    <>
      {mapCheck()}
    </>
  );
};

export default Unit;
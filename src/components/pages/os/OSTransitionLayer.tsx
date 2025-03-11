import {useState} from "react";
import OSLayout from "./OSLayout.tsx";
import PageTransition from "../../PageTransition.tsx";

const OSTransitionLayer = () => {
  const [hasTransitioned, setHasTransitioned] = useState(false);

  return (
    <div>
      {!hasTransitioned ? (
        <PageTransition onComplete={() => setHasTransitioned(true)}>
          <OSLayout/>
        </PageTransition>
      ) : (
        <OSLayout/>
      )}
    </div>
  );
};

export default OSTransitionLayer;
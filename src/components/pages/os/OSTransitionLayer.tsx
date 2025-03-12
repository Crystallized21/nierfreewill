import {useState} from "react";
import OSLayout from "./OSLayout.tsx";
import PageTransition from "../../PageTransition.tsx";
import {SystemProvider} from "../../SystemContext.tsx";

const OSTransitionLayer = () => {
  const [hasTransitioned, setHasTransitioned] = useState(false);

  return (
    <SystemProvider>
      <div>
        {!hasTransitioned ? (
          <PageTransition onComplete={() => setHasTransitioned(true)}>
            <OSLayout/>
          </PageTransition>
        ) : (
          <OSLayout/>
        )}
      </div>
    </SystemProvider>
  );
};

export default OSTransitionLayer;
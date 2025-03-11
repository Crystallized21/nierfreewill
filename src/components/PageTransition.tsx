import {motion} from "motion/react";
import {useLocation} from "react-router-dom";
import React, {ReactNode} from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({children}) => {
  const location = useLocation();

  const variants = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
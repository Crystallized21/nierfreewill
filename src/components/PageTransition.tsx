import {motion} from "motion/react";
import {useLocation} from "react-router-dom";
import React, {ReactNode} from "react";

interface PageTransitionProps {
  children: ReactNode;
  onComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({children, onComplete}) => {
  const location = useLocation();
  const animationDuration = 1;

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
      transition={{duration: animationDuration}}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
import {motion} from "motion/react";
import {YorhaNavLink} from "../NavBar/YorhaNavLink.tsx";

interface DialogBoxProps {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const YorhaDialogBox = ({message, onConfirm, onCancel}: DialogBoxProps) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      className="absolute inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="bg-[#e0dcc5] text-black border border-black w-1/2 shadow-lg">
        <div className="bg-[#57544a] text-[#e0dcc5] uppercase text-sm px-3 py-1 tracking-wide h-8 flex items-center">
          <div className="w-4 h-4 bg-[#e0dcc5] mr-2"/>
          System Message
        </div>

        <div className="p-4 text-lg tracking-wide">
          {message}
        </div>

        <hr className="border-[#57544a]"/>

        {/* Buttons Section */}
        <div className="flex justify-center gap-32 p-3">
          <YorhaNavLink className="w-1/2" text="Yes" onClick={onConfirm}/>
          <YorhaNavLink text="No" onClick={onCancel}/>
        </div>
      </div>
    </motion.div>
  );
};

export default YorhaDialogBox;
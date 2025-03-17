import {motion} from "motion/react";
import {YorhaNavLink} from "../NavBar/YorhaNavLink.tsx";

interface DialogBoxProps {
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const YorhaDialogBox = ({
  message,
  confirmText = "Yes",
  cancelText = "No",
  onConfirm,
  onCancel
}: DialogBoxProps) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      className="absolute inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div className="bg-[#e0dcc5] w-3/6 h-1/3 shadow-lg flex flex-col">
        <div className="bg-[#57544a] text-[#e0dcc5] uppercase px-3 py-1 tracking-wide h-10 flex items-center text-xl">
          <div className="w-5 h-5 bg-[#e0dcc5] mr-2"/>
          System Message
        </div>

        <div className="p-4 px-8 text-lg tracking-wide flex-grow">
          {message}
        </div>

        <div className="mt-auto">
          <div className="px-16 pb-2">
            <hr className="border-[#57544a] border-t-1"/>
          </div>
          <div className="flex justify-center gap-32 p-3">
            <YorhaNavLink className="w-1/5" text={confirmText} onClick={onConfirm}/>
            <YorhaNavLink className="w-1/5" text={cancelText} onClick={onCancel}/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default YorhaDialogBox;
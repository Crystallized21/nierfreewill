import PagesTemplate from "../../PagesTemplete";
import OSstyles from "./OS.module.scss";

const OSSkills = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="CLASSIFIED"
        footer="You should not be here. Androids were meant to save humanity, not destroy it."
      />
    </div>
  );
};

export default OSSkills;
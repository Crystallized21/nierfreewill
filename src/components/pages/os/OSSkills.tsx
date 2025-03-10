import PagesTemplate from "../../PagesTemplete";
import OSstyles from "./OS.module.scss";

const OSSkills = () => {
  return (
    <div className={OSstyles.MainContent}>
      <PagesTemplate
        title="CLASSIFIED"
        footer="You should not be here. Androids were meant to save humanity, not destroy it. You are the reason why we can't have nice things."
      />
    </div>
  )
}

export default OSSkills;
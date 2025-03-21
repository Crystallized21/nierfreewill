import React from "react";
import styles from './pages/os/PagesTemplate.module.scss';
import {Footer} from "./uiElements/osInterface/Footer.tsx";
import {Title} from "./uiElements/osInterface/Title.tsx";

type PagesTemplateProps = {
  title?: string;
  footer?: string;
  child?: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const PagesTemplate = ({title, footer, child, subtitle, className}: PagesTemplateProps) => {
  return (
    <div className={styles.PagesTemplate}>
      <Title title={title} subtitle={subtitle}/>
      <div className={[styles.LeftPanel, className].join(' ')}>
        <div className={styles.Child}>
          {child}
        </div>
      </div>
      <div>
        <Footer text={footer}/>
      </div>
    </div>
  );
};

export default PagesTemplate;
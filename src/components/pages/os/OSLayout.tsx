import { NavbarModule } from "../../modules/NavBarModule.tsx";
import {useSystemContext} from "../../SystemContext.tsx";

const OSLayout = () => {
  const { confirmExit } = useSystemContext();

  const invertedStyle = confirmExit ? {
    filter: 'invert(100%)',
    transition: 'filter 0.3s ease-in-out'
  } : {};

  return (
    <div style={invertedStyle}>
      <NavbarModule />
    </div>
  );
};

export default OSLayout;
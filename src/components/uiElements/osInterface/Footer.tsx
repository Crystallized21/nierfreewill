import styled from "styled-components";
import {Bar} from "./Bar.tsx";
import colors from './colors.json';
import {motion} from "framer-motion";

type FooterProps = {
  text?: string;
}

const FooterParent = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${colors.colors[0].hex};
    align-items: center;
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.4);
`;

const TextContainer = styled.div`
    font-size: 24px;
    padding: 1rem;
    color: ${colors.colors[2].hex};
    align-items: center;
`;

export const Footer = ({text, ...props}: FooterProps) => {
  return (
    <FooterParent
      initial={{y: 75, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{opacity: 0}}
      transition={{
        y: {ease: [.25, .75, .2, 1], duration: 0.5},
        opacity: {ease: "easeOut", duration: 0.5}
      }}
      {...props}
    >
      <Bar dark={true}/>
      <TextContainer>
        {text}
      </TextContainer>
    </FooterParent>
  );
};
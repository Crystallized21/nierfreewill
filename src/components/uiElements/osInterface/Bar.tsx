import styled, {ThemeProvider} from 'styled-components';
import colors from './colors.json';
import {motion} from 'motion/react';

interface BarProps {
  dark?: boolean;
}

const BarParent = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
`;

const BarItem = styled(motion.div)`
    background-color: ${props => props.theme.main};
    width: 10px;
    height: 0;
    margin-right: 5px;

    &:nth-child(2) {
        width: 4px;
    }
`;

BarItem.defaultProps = {
  theme: {
    main: `${colors.colors[1].hex}`
  }
};

const theme = {
  main: `${colors.colors[2].hex}`
};

export const Bar = ({dark = false, ...props}: BarProps) => {
  const checker = () => {
    if (dark === false) {
      return (
        <>
          <BarItem
            initial={{height: 0, opacity: 0}}
            animate={{height: '100%', opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.45, ease: [.1, .6, 0, 1]}}
          />
          <BarItem
            initial={{height: 0, opacity: 0}}
            animate={{height: '100%', opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.45, ease: [.1, .6, 0, 1]}}
          />
        </>
      );
    } else if (dark === true) {
      return (
        <ThemeProvider theme={theme}>
          <BarItem
            initial={{height: 0, opacity: 0}}
            animate={{height: '100%', opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.45, ease: [.1, .6, 0, 1]}}
          />
          <BarItem
            initial={{height: 0, opacity: 0}}
            animate={{height: '100%', opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.45, ease: [.1, .6, 0, 1]}}
          />
        </ThemeProvider>
      );
    }
  };
  return (
    <BarParent {...props}>
      {checker()}
    </BarParent>
  );
};
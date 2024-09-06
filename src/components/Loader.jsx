import { motion } from 'framer-motion';
import * as React from 'react';
// import * as React from "react";
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
       <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2000px"
    height="2000px"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2000 2000"
    // {...props}
  >
    <g>
      <path
        style={{
          opacity: 0.967,
        }}
        fill="#fefffe"
        d="m994.5 424.5 2.028 -0.162 2 0.168 1.973 0.493 126.18 77.668 126.33 77.5L1379.5 657.5a3851.667 3851.667 0 0 1 0.5 152 2013.333 2013.333 0 0 0 -54.5 107h-3q0.088 -113.01 -2 -226a14601.667 14601.667 0 0 0 -323.5 -202A26873.333 26873.333 0 0 0 675 692.5q-0.292 113.5 0.5 227h-3a8128.333 8128.333 0 0 0 -53.5 -108 5773.333 5773.333 0 0 1 0 -152 71323.333 71323.333 0 0 0 375.5 -235m0 84a9.833 9.833 0 0 1 6 1q149.027 93.15 298.5 186 1.003 2 0 4a823.333 823.333 0 0 0 -41.5 26.5 16.167 16.167 0 0 1 -8 0l-251.5 -157.5A31360 31360 0 0 0 748.5 725q-4.5 3 -9 0a723.333 723.333 0 0 0 -38 -25q-2.063 -3.81 2 -6a15981.667 15981.667 0 0 0 291 -185.5m1 109a8.4 8.4 0 0 1 4 0.5 5598.333 5598.333 0 0 0 122 76 70 70 0 0 1 9 7 40.833 40.833 0 0 1 -8 7 17611.667 17611.667 0 0 0 -104.5 68.5c-0.33 150.332 -0.67 300.67 -1 451a141.667 141.667 0 0 1 -19 12 185 185 0 0 1 -20 -13l-1 -449a19298.333 19298.333 0 0 1 -113.5 -73.5q5.3 -5.677 12 -10a4196.667 4196.667 0 0 0 120 -76.5m307 99h3q0.252 165.002 -0.5 330a21061.667 21061.667 0 0 0 -257.5 164.5q-2.773 1.697 -6 1.5 -0.252 -30.508 0.5 -61c70.69 -44.7 141.35 -89.36 212 -134 0.33 -90 0.67 -180 1 -270q3.3 -3.81 7.5 -6.5a1173.333 1173.333 0 0 0 40 -24.5m-612 1a13 13 0 0 1 5 0.5 405 405 0 0 1 46 28.5l2 275q104.157 66.343 208 133.5a806.667 806.667 0 0 1 1 56.5 18.333 18.333 0 0 1 -6 -0.5 12756.667 12756.667 0 0 0 -255 -163.5q-1.5 -164.998 -1 -330m472 4q14.627 5.323 27 15.5 8.97 4.95 18 10 1.843 1.773 0 3.5a10056.667 10056.667 0 0 0 -159 103.5 8.4 8.4 0 0 1 -4 0.5q-0.252 -28.003 0.5 -56a20063.333 20063.333 0 0 0 113.5 -72.5q3.208 -1.313 4 -4.5m-335 3a13 13 0 0 1 5 0.5 10506.667 10506.667 0 0 0 116 74.5 793.333 793.333 0 0 1 2 51q-4.868 -0.57 -9 -3.5L790 751.5q-1.027 -1.927 0.5 -3.5a1503.333 1503.333 0 0 0 37 -23.5m359 69q1.742 69.748 0.5 140a6490 6490 0 0 1 -139.5 131.5q-1.427 0.722 -3 0.5 -0.252 -89 0.5 -178 70.982 -46.75 141.5 -94m-381 3a33861.667 33861.667 0 0 1 145.5 92q0.75 87.5 0.5 175a9.333 9.333 0 0 1 -6 -2.5 4670 4670 0 0 0 -139 -118.5q-1.5 -72.992 -1 -146m-187 49q1.313 -0.198 2 1a8351.667 8351.667 0 0 0 53.5 110 5571.667 5571.667 0 0 1 2.5 100 155063.333 155063.333 0 0 1 321.5 203 843.333 843.333 0 0 0 23.5 -13.5l300.5 -190.5q0.048 -46.573 2 -93a881.667 881.667 0 0 1 21 -52q17.25 -32.513 34.5 -65c1.17 79.667 1.33 159.33 0.5 239q-189.87 118.562 -379.5 237.5 -3 1.003 -6 0a53916.667 53916.667 0 0 0 -375 -236.5q-1.5 -120 -1 -240"
      />
    </g>
  </svg>
     
      <Text variants={textVariants} initial="hidden" animate="visible">
        Vision Blend Studios
      </Text>
    </Container>
  );
};

export default Loader;

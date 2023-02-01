import { spring } from "framer-motion";
import { type } from "os";


export const animationOne = {
  in: {
    opacity: 0
  },
  out: {
    opacity: 1
  }
};

export const animationTwo = {
  in: {
    opacity: 0,
    y: -100,
    scale: 0.8
  },
  out: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

export const animationThree = {
  in: {
    opacity: 1,
    x: -300,
    scale: .8
  },
  out: {
    opacity: 1,
    x: 0,
    scale: 1
  },

};

export const animationFour = {
  in: {
    opacity: 0,
    x: +300,
  },
  out: {
    opacity: 1,
    x: 0,
  },
};


export const transition = {
  duration: 0.4
}


// template:
// import { motion } from 'framer-motion';
// import { animationOne, transition } from '../animations';

//  <motion.div
//   initial='in'
//   animate='out'
//   exit='in'
//   variants={animationOne}
//   transition={transition}
// >
//   ...
// </motion.div>


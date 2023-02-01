import Orders from '../components/Orders'
import { animationTwo, transition } from '../animations/index'
import { motion } from 'framer-motion'


const orders = () => {
  return (
    <>
      <motion.section
        variants={animationTwo}
        initial='in'
        animate='out'
        exit='in'
        transition={transition}
      >
        <Orders />
      </motion.section>
    </>
  )
}

export default orders
import { animationTwo, transition } from '../animations/index'
import { motion } from 'framer-motion'

const products = () => {
  return (
    <>
      <motion.section
        variants={animationTwo}
        initial='in'
        animate='out'
        exit='in'
        transition={transition}
      >
        <h1 className="text-center pt-5">
          محتوای مربوط به محصولات
        </h1>
      </motion.section>
    </>
  )
}

export default products
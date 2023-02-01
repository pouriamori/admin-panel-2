import Stats from '../components/Stats'
import Orders from '../components/Orders'
import NavBar from '../components/NavBar'
import { animationTwo, transition } from '../animations/index'
import { motion } from 'framer-motion'

const Home = () => {

  return (
    <>
      <motion.section
        variants={animationTwo}
        initial='in'
        animate='out'
        exit='in'
        transition={transition}
      >
        <NavBar />
        <Stats />
        <Orders />
      </motion.section>
    </>
  )
}

export default Home;

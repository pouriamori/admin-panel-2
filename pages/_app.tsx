import '../styles/main.css'
import '../styles/add.css'
import '../assets/fonts/fonts.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { animationFour, transition } from '../animations/index'
import { motion, AnimatePresence } from 'framer-motion'
import SidebarButton from '../components/SidebarButton'
import PcSidebar from '../components/PcSidebar'
import MobileSidebar from '../components/MobileSidebar'



export default function App({ Component, pageProps }: AppProps) {

  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <>
      <div className='bg-main-gradient p-3'>
        <div className='row bg-transparent-3 rounded-5 h-100'>


          <div onClick={() => { setMobileSidebar(!mobileSidebar) }}>
            <SidebarButton />
          </div>



          <div className='col-md-2 d-none d-md-block'>
            <PcSidebar />
          </div>




          <AnimatePresence>
            {
              mobileSidebar &&
              <motion.div className={`col-md-2 mobile-sidebar-open`}
                variants={animationFour}
                initial='in'
                animate='out'
                exit='in'
                transition={transition}
              >
                <MobileSidebar />
              </motion.div>
            }
          </AnimatePresence>




          <div className='col-md-10 p-md-3 px-md-5'>
            <Component {...pageProps} />
          </div>


        </div>
      </div>
    </>
  )
}

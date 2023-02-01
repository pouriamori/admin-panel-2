import { pcMenu } from '../lib/lib'
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {

  const [data, setData] = useState(pcMenu.slice());
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="w-100">
        <h3 className="py-4 text-center">
          پنل ادمین
        </h3>
        <ul className="">
          {data.map((item, index) => {
            return (
              <>
                <Link href={item.link} className='text-black' key={index}>
                  <li
                    className="py-3"
                    onClick={() => { setSelected(index) }}
                  >
                    <div className={`px-5 py-2 row ${selected === index ? 'page-active-menu' : ''}`}>
                      <p className="col-md-4 col-2">
                        {item.icon}
                      </p>
                      <p className="col-md-8 col-10 text-md-center">
                        {item.title}
                      </p>
                    </div>
                  </li>
                </Link>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
import { statsData } from '../lib/lib'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Stats = () => {

  const data = statsData.slice();

  return (
    <>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-md-4 p-2 stats-hover" key={index}>
              <div className={`text-white p-3 rounded-4 shadow ${item.bg}`}>
                <div className="row align-items-end">
                  <div className="col-7 ">
                    <p className='pb-4'>
                      {item.icon}
                    </p>
                    <p className='fw-bold h5'>
                      <span>{item.value}</span>
                      <span> تومان</span>
                    </p>
                    <p className='small pt-4'>
                      در 24 ساعت اخیر
                    </p>
                  </div>
                  <div className="col-5 text-center">
                    <div className='pb-3 fw-bold'>
                      <CircularProgressbar
                        value={item.barValue}
                        text={`${item.barValue}%`}
                      />
                    </div>
                    <p className='fw-bold h5'>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Stats
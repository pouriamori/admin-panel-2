import { BsXLg } from "react-icons/bs"
import { useState } from "react"
import { statsData } from '../lib/lib'
import BarChart from "../components/BarChart"


const Charts = () => {

  const data = statsData.slice();
  const [close, setClose] = useState([false, false, false]);
  const [open, setOpen] = useState(['col-md-12 px-md-5', 'col-md-6', 'col-md-6']);


  return (
    <>
      <section className="row">
        {data.map((item, index) => {
          return (
            <div
              className={`p-3 ${close[index] ? 'd-none' : ''} ${open[index]}`}
              key={index}
            >
              <div
                className={`shadow-lg rounded-4 p-3 text-white text-center position-relative 
                ${item.bg}`}
              >
                <p className="h4 fw-bold">
                  {item.title}
                </p>
                <div className="py-4">
                  <BarChart chartData={item.chartData} />
                </div>
                <p className="small">
                  سال 1400 در یک نگاه
                </p>
                <div className="position-absolute top-0 end-0 pe-3 pt-2 x-close"
                  onClick={() => {
                    // این آیتمی که روش کلیک شده ایندکس چندمه؟ اون ایندکس رو بیا ترو بکن
                    // بقیه رو همون قبلی بذار بمونه
                    setClose(close.map((it, ind) => {
                      if (ind === index) {
                        return (true)
                      }
                      else {
                        return (it)
                      }
                    }))
                  }}>
                  <BsXLg />
                </div>
              </div>
            </div>
          )
        })}

      </section>
    </>
  )
}

export default Charts
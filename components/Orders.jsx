import { ordersData } from "../lib/lib"

const Orders = () => {

  const data = ordersData.slice();

  return (
    <>
      <section>
        <p className="p-2 h4 pt-4">
          آخرین سفارشات
        </p>
        <div className="p-2">
          <div className="row bg-transparent-5 rounded-3 p-3">
            <div className="row fw-bold pb-4">
              <div className="col-md-4 col-6">
                <p>
                  محصول
                </p>
              </div>
              <div className="col-md-2 col-6">
                <p>
                  آیدی
                </p>
              </div>
              <div className="col-md-2 col-6">
                <p>
                  تاریخ
                </p>
              </div>
              <div className="col-md-2 col-6">
                <p>
                  وضعیت
                </p>
              </div>
              <div className="col-md-2 col-6">
                جزئیات
              </div>
            </div>
            {data.map((item, index) => {
              return (
                <div className="row pb-2 lh-lg" key={index}>
                  <div className="col-md-4 col-6">
                    <p>
                      {item.product}
                    </p>
                  </div>
                  <div className="col-md-2 col-6">
                    <p>
                      {item.id}
                    </p>
                  </div>
                  <div className="col-md-2 col-6">
                    <p>
                      {item.date}
                    </p>
                  </div>
                  <div className="col-md-2 col-6">
                    <p className={`${item.class}`}>
                      {item.status}
                    </p>
                  </div>
                  <div className="col-md-2 col-6">
                    <p className="text-light">
                      مشاهده
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Orders
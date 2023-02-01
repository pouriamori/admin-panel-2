import { BsPersonCircle, BsFillBellFill, BsFillChatFill, BsFillGridFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="row text-center pb-4 pt-md-0 pt-4">
          <ul className="d-flex align-items-center justify-content-md-end justify-content-center">
            <li className="px-3 h4 text-light position-relative">
              <BsFillBellFill />
              <span className="nav-icon-count">
                2
              </span>
            </li>
            <li className="px-3 h4 text-light position-relative">
              <BsFillChatFill />
              <span className="nav-icon-count">
                5
              </span>
            </li>
            <li className="pe-3 d-flex align-items-center text-dark">
              <div>
                <p>
                  پوریا مروتی
                </p>
                <p className="small text-center">
                  ادمین
                </p>
              </div>
              <div className="px-3 h2">
                <BsPersonCircle />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
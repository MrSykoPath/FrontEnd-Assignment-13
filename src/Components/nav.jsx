import style from "./nav.module.css";
import classNames from "../Helpers/classnames.js";

export default function Nav() {
  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg bg-body-tertiary py-5 " +
          style["color-2C3E50"]
        }
      >
        <div className="container-fluid d-flex">
          <div className="name d-flex">
            <a
              className={
                "navbar-brand ms-5 fw-bolder text-white fs-2 " +
                style["montserrat"]
              }
              href="#"
            >
              Start React
            </a>
          </div>
          <div className={"toggler"}>
            <button
              className={"navbar-toggler me-5 text-white " + style["bg-1ABC9C"]}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              Menu
            </button>
          </div>
          <div
            className={
              "collapse navbar-collapse justify-content-end me-5 fw-bold fs-5 " +
              style["montserrat"]
            }
            id="navbarNav"
          >
            <ul className="navbar-nav pt-5 pt-md-0">
              <li className="nav-item">
                <a
                  className={
                    "nav-link active text-white mx-4 rounded p-3 " +
                    style["bg-1ABC9C"]
                  }
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"nav-link text-white mx-4 p-3 " + style["fade"]}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"nav-link text-white mx-4 p-3 " + style["fade"]}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

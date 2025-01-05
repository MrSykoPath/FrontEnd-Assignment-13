import style from "./intro.module.css";
import classNames from "../Helpers/classnames.js";

export default function Intro() {
  return (
    <>
      <div
        className={
          "container-fluid d-flex flex-column justify-content-center align-items-center position-relative pt-5 " +
          style["main"]
        }
      >
        <div className="image d-flex justify-content-center">
          <img
            src="https://hamza-noah.github.io/Start-React-App/static/media/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg"
            className=" w-75 h-75"
            alt="Avatar"
          />
        </div>
        <div className="text pt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="header">
            <h1
              className={
                "fw-bold text-white " +
                classNames(style["bigfont"], style["montserrat"])
              }
            >
              Start React
            </h1>
          </div>
          <div className={"text-white pt-5 fs-1 "}>
            <div className={"position-relative " + style["icon"]}>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

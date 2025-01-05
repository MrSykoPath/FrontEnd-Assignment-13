import style from "./portfolio.module.css";
import style2 from "./nav.module.css";
import style3 from "./intro.module.css";
import classNames from "../Helpers/classnames.js";

export default function Portfolio() {
  return (
    <>
      <div className={"container-fluid" + style2["montserrat"]}>
        <h1
          className={
            "text-center fw-bold pt-5 " +
            classNames(style2["color-2C3E50-2"], style3["bigfont"])
          }
        >
          Portfolio
        </h1>
        <div
          className={"fs-2 text-center " + classNames(style2["color-2C3E50-2"])}
        >
          <div className={"position-relative " + style3["icon-2C3E50"]}>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="container-sm row g-5 mx-auto mt-3 position-relative mb-5">
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#cabin"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#cake"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/cake.6554473016d32b343f02.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#circus"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/circus.494a4a914b5471b41f3e.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#game"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/game.a940b57aa7bab2eacc52.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#safe"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/safe.01792c0bdc342bf4bf9c.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div
              className="img w-100 h-100 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#submarine"
            >
              <img
                className="w-100 rounded-2"
                src="https://hamza-noah.github.io/Start-React-App/static/media/submarine.48c9704ca7f8ce901038.png"
                alt="log house"
              ></img>
              <div
                className={classNames(
                  style["overlay"],
                  "rounded-2",
                  "d-flex",
                  "justify-content-center",
                  "align-items-center",
                  "text-white",
                  "fw-bold",
                  "fs-1"
                )}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="cabin"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Log Cabin
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="cake"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Cake
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/cake.6554473016d32b343f02.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="circus"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Circus
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/circus.494a4a914b5471b41f3e.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="game"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Game Console
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/game.a940b57aa7bab2eacc52.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="safe"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Safe
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/safe.01792c0bdc342bf4bf9c.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="submarine"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h1
                className={
                  "text-center fw-bold pt-3 " +
                  classNames(style2["color-2C3E50-2"], style3["bigfont"])
                }
              >
                Submarine
              </h1>
              <div
                className={
                  "fs-2 text-center " + classNames(style2["color-2C3E50-2"])
                }
              >
                <div className={"position-relative " + style3["icon-2C3E50"]}>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="img w-100 h-100 position-relative">
                <img
                  className="w-100 rounded-2"
                  src="https://hamza-noah.github.io/Start-React-App/static/media/submarine.48c9704ca7f8ce901038.png"
                  alt="log house"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

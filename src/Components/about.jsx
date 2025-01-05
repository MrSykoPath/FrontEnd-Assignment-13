import style from "./about.module.css";
import style2 from "./intro.module.css";
import classNames from "../Helpers/classnames";

export default function About() {
  return (
    <>
      <div
        className={
          "container-fluid mt-5 " +
          style["bg-1abc9c"] +
          " " +
          style2["montserrat"] +
          " " +
          "pb-5 pt-5"
        }
        id="about"
      >
        <div className="container-sm mx-auto d-flex flex-column justify-content-center align-items-center position-relative">
          <div className="text pt-3 d-flex flex-column justify-content-center align-items-center">
            <div className="header">
              <h1
                className={
                  "fw-bold text-white " +
                  classNames(style2["bigfont"], style2["montserrat"])
                }
              >
                About
              </h1>
            </div>
            <div className={"text-white fs-1 "}>
              <div className={"position-relative " + style2["icon"]}>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="content row pt-4">
            <div className=" col-md-6">
              <p className="text-white fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi aliquam quasi, non culpa dolores veniam voluptate
                minima, accusamus cupiditate facilis modi asperiores? Culpa ab
                vero exercitationem dolore tempore, voluptate laborum fugit aut
                dolorum quam iste eaque voluptatem, dolores rerum aspernatur.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                rerum repudiandae commodi ullam repellat veritatis unde
                obcaecati dolores magni odio saepe perspiciatis excepturi, ea
                possimus illo magnam sapiente. Ullam, voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

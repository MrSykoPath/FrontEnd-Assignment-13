import style from "./contact.module.css";
import style2 from "./intro.module.css";
import style3 from "./nav.module.css";
import classNames from "../Helpers/classnames";

export default function Contact() {
  return (
    <>
      <div className={"container-sm " + style2["montserrat"]}>
        <h1
          className={
            "text-center fw-bold pt-5 " +
            classNames(style3["color-2C3E50-2"], style2["bigfont"])
          }
        >
          Contact Me
        </h1>
        <div
          className={"fs-2 text-center " + classNames(style3["color-2C3E50-2"])}
        >
          <div className={"position-relative " + style2["icon-2C3E50"]}>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="form">
          <form
            className={" form-control border-0 ms-5 " + style["montserrat"]}
          >
            <input
              className="form-control p-3 mb-3 border-0 fs-5"
              placeholder="Name"
              type="text"
            ></input>
            <input
              className="form-control p-3 mb-3 border-0 fs-5"
              placeholder="Email"
              type="email"
            ></input>
            <input
              className="form-control p-3 mb-3 border-0 fs-5"
              placeholder="Phone Number"
              type="text"
            ></input>
            <input
              className="form-control p-3 mb-3 border-0 fs-5"
              placeholder="Message"
              type="text"
            ></input>
            <button
              className={"btn fs-5 p-3 my-5 text-white " + style3["bg-1ABC9C"]}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

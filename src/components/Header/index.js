import React from "react"
import classes from "./styles.module.css"
import logo from "../../assets/images/WeeWPlainFoundationMirror.png"
import home from "../../assets/images/Icon ionic-md-home.png"

const navs = [
  "About Us",
  "Services",
  "News",
  "DIY Portal",
  "Eduction",
  "Blogs",
  "FAQ'S",
  "Contact Us"
]
const Header = () => {
  const [sidebar, setSidebar] = React.useState("RemoveSideBar")
  return (
    <nav
      className={
        classes.Container + " d-flex align-items-center container pl-auto"
      }
    >
      <img
        alt=""
        onClick={() => setSidebar("SideBar")}
        className={classes.toggler + " p-1"}
        src={require("../../assets/images/Icon ionic-ios-menu.png")}
      />
      <img src={logo} alt="logo" className={classes.Logo + " ml-auto"} />

      <div
        className={classes[sidebar]}
        onClick={() => setSidebar("RemoveSideBar")}
      >
        <ul style={{ listStyle: "none" }} className="m-0 px-4">
          <li className="d-flex my-3">
            <img
              src={require("../../assets/images/hello.png")}
              alt=""
              style={{ height: "7rem" }}
            />
            <div className="d-flex flex-column justify-content-between ml-3 py-2">
              <h4 className="text-white">Hey, there !</h4>
              <button
                className={classes.Button + " mx-0 button-green py-0 px-1 w-75"}
              >
                Log In
              </button>
            </div>
          </li>
          <li
            className="my-1"
            style={{ fontSize: "1.3rem", color: " rgba(96, 138, 36, 1)" }}
          >
            Take Me To
          </li>
          {navs.map((nav, i) => {
            return (
              <li
                key={i}
                className={
                  navs.length === i + 1
                    ? "border-light py-2 ml-2 border-0"
                    : "border-light py-2 ml-2 border-bottom"
                }
              >
                <a className={classes.a} href="/">
                  {nav}
                </a>
              </li>
            )
          })}
          <li className="d-flex py-2 flex-row">
            <div className={classes.Performance + " mr-3 py-3"}></div>
            <div className="d-flex flex-column justify-content-between py-1">
              <h5 className="text-light">Performance</h5>
              <h5 className="text-light">Task Completed</h5>
              <h5 className="text-light">Score</h5>
            </div>
          </li>
        </ul>
      </div>

      <ul
        style={{ listStyle: "none" }}
        className={classes.Nav + " mr-auto mt-lg-2"}
      >
        <li className="active mt-sm-2 mt-md-2">
          <a className={classes.a} href="/">
            <img src={home} alt="logo" className={classes.Home} />
          </a>
        </li>

        {navs.map((nav, i) => {
          return (
            <li key={i} className="mt-sm-2 mt-md-2">
              <a className={classes.a} href="/">
                {nav}
              </a>
            </li>
          )
        })}

        <li className="mt-sm-2 mt-md-2 mt-lg-0">
          <button className={classes.Button + " border button-green"}>
            Log In
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header

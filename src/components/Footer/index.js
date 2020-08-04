import React from "react"
import classes from "./styles.module.css"
import logo from "../../assets/images/WeeWPlainFoundationMirror.png"
import user from "../../assets/images/Stroke 1.png"
import carousal0 from "../../assets/images/aiony_haust_1096642_unsplash_k_pattern.png"
import carousal1 from "../../assets/images/Bitmap_k_pattern.png"
const $ = window.jQuery

const Footer = () => {
  React.useEffect(() => {
    $(document).ready(function () {
      var itemsMainDiv = ".MultiCarousel"
      var itemsDiv = ".MultiCarousel-inner"
      var itemWidth = ""

      $(".leftLst, .rightLst").click(function () {
        var condition = $(this).hasClass("leftLst")
        if (condition) click(0, this)
        else click(1, this)
      })

      ResCarouselSize()

      $(window).resize(function () {
        ResCarouselSize()
      })

      function ResCarouselSize() {
        var incno = 0
        var dataItems = "data-items"
        var itemClass = ".item"
        var id = 0
        var btnParentSb = ""
        var itemsSplit = ""
        var sampwidth = $(itemsMainDiv).width()
        var bodyWidth = $("body").width()
        $(itemsDiv).each(function () {
          id = id + 1
          var itemNumbers = $(this).find(itemClass).length
          btnParentSb = $(this).parent().attr(dataItems)
          itemsSplit = btnParentSb.split(",")
          $(this)
            .parent()
            .attr("id", "MultiCarousel" + id)

          if (bodyWidth >= 1200) {
            incno = itemsSplit[3]
            itemWidth = sampwidth / incno
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2]
            itemWidth = sampwidth / incno
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1]
            itemWidth = sampwidth / incno
          } else {
            incno = itemsSplit[0]
            itemWidth = sampwidth / incno
          }
          $(this).css({
            transform: "translateX(0px)",
            width: itemWidth * itemNumbers
          })
          $(this)
            .find(itemClass)
            .each(function () {
              $(this).outerWidth(itemWidth)
            })

          $(".leftLst").addClass("over")
          $(".rightLst").removeClass("over")
        })
      }

      function ResCarousel(e, el, s) {
        var leftBtn = ".leftLst"
        var rightBtn = ".rightLst"
        var translateXval = ""
        var divStyle = $(el + " " + itemsDiv).css("transform")
        var values = divStyle.match(/-?[\d\.]+/g)
        var xds = Math.abs(values[4])
        if (e === 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s)
          $(el + " " + rightBtn).removeClass("over")

          if (translateXval <= itemWidth / 2) {
            translateXval = 0
            $(el + " " + leftBtn).addClass("over")
          }
        } else if (e === 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width()
          translateXval = parseInt(xds) + parseInt(itemWidth * s)
          $(el + " " + leftBtn).removeClass("over")

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition
            $(el + " " + rightBtn).addClass("over")
          }
        }
        $(el + " " + itemsDiv).css(
          "transform",
          "translateX(" + -translateXval + "px)"
        )
      }

      function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id")
        var slide = $(Parent).attr("data-slide")
        ResCarousel(ell, Parent, slide)
      }
    })
  }, [])
  return (
    <div className={classes.Container + " py-5"}>
      <div className="container" style={{ position: "relative" }}>
        <img
          src={require("../../assets/images/quote.png")}
          style={{ height: "5rem", marginBottom: "3rem" }}
          alt=""
        />
        <div className={classes.Feedback}>
          Our Beloved Students and Parents feedback
        </div>
      </div>

      <section>
        <div className="container mb-5 mt-0">
          <div className="row">
            <div
              className="MultiCarousel"
              data-items="1,2,3,4"
              data-slide="1"
              id="MultiCarousel"
              data-interval="1000"
            >
              <div className="MultiCarousel-inner">
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal0} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex justify-content-center">
                  <div
                    className="card border-dark"
                    style={{ maxWidth: "16rem" }}
                  >
                    <div className="card-body">
                      <div className="card-title d-flex flex-row">
                        <img src={carousal1} alt="" />
                        <div>
                          <span style={{ color: "rgb(96, 138, 36)" }}>
                            Francis delemo
                          </span>{" "}
                          Telecommunication Engineer
                        </div>
                      </div>
                      <p className="card-text">
                        " Some quick example text to build on the card title and
                        make up the bulk of the card's content. "
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={classes.CarousalControl + " btn leftLst d-flex"}
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className={classes.CarousalControl + " btn rightLst d-flex"}
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-5 mb-5">
        <div
          className={
            classes.Shadow +
            " card d-flex flex-column justify-content-center align-items-center py-5"
          }
        >
          <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
            The future of{" "}
            <span style={{ color: "rgb(96, 138, 36)" }}>
              transforming your carrier
            </span>{" "}
            is WeeW
          </div>
          <button className={classes.ButtonGreen + " button-green border mt-3"}>
            Become A Member
          </button>
        </div>
      </div>

      <div className="container">
        <div className="d-flex row mb-5 flex-row justify-content-between w-100 ">
          <div className="mr-auto">
            <ul style={{ listStyle: "none" }}>
              <li className="font-weight-bold">WeeW</li>
              <li>About Us </li>
              <li>News </li>
              <li>DIY Portal</li>
              <li>Services </li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="ml-auto mr-auto">
            <ul style={{ listStyle: "none" }}>
              <li className="font-weight-bold">LEGAL</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
          <div
            className="ml-auto card text-white lg-3"
            style={{ backgroundColor: "rgb(96, 138, 36)", maxWidth: "18rem" }}
          >
            <div className="card-body">
              <div className="card-title">Blog WeeW</div>
              <p className="card-text">
                journey Write email to us info@WeeW.com
              </p>
              <button className={classes.ButtonWhite + " border button-white"}>
                <img
                  src={user}
                  style={{ height: "1.5rem" }}
                  className="mr-2"
                  alt=""
                />
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex row mb-5 flex-row justify-content-between  w-100 px-3">
          <img src={logo} alt="" style={{ height: "5rem", width: "6rem" }} />
          <div className="ml-auto mr-auto" style={{ maxWidth: "15rem" }}>
            Contact UsWeeW Foundation, “Shree Ashram View Enclave”, #G03, SAVE,
            15/3, KS Garden, Thamaraikanna Road, Murphy Town, Halasuru,
            Bangalore-560 008, India.
          </div>
          <div className="mr-auto align-self-end">
            © Copyright 2020. WeeW pvt ltd
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

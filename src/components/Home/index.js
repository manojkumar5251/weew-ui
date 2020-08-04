import React from "react"
import carousal0 from "../../assets/images/carousal0.png"
import carousal1 from "../../assets/images/carousal1.png"
import carousal2 from "../../assets/images/carousal2.png"
import opportunity0 from "../../assets/images/Icon ionic-ios-contacts.png"
import opportunity1 from "../../assets/images/Group 14.png"
import opportunity2 from "../../assets/images/Icon3.png"
import courses0 from "../../assets/images/Bitmap_kw_pattern.png"
import courses1 from "../../assets/images/Bitmap_kx_pattern.png"
import img1 from "../../assets/images/Mask_gr.png"
import img2 from "../../assets/images/Mask_gw.png"
import img3 from "../../assets/images/Mask_gz.png"
import classes from "./styles.module.css"

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <section
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              className={classes.CarousalIndicator}
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
            ></li>
            <li
              className={classes.CarousalIndicator}
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
            ></li>
            <li
              className={classes.CarousalIndicator}
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className={classes.CarousalInside}></div>
            <div className="container">
              <div
                className={
                  classes.CaptionView +
                  " flex-row justify-content-lg-start justify-content-center"
                }
              >
                <div
                  className={
                    classes.Caption +
                    " d-flex flex-column align-items-start flex-row justify-content-lg-start justify-content-center"
                  }
                >
                  <div className={classes.Title}>Welcome to</div>
                  <div className={classes.Title}>WeeW Foundation!</div>
                  <div style={{ fontSize: "1.1rem" }}>
                    We help pay your college school by learning and earning
                    points from our website. WeeW foundation has one of the wide
                    range of courses and skilled staffs to help train you,
                    assist you, and help you to build your carrier!
                  </div>
                  <div>
                    <input
                      type="text"
                      className={classes.Input}
                      placeholder="Enter Email"
                    />
                    <button
                      className={[
                        classes.ButtonWhite,
                        "button-white border",
                        classes.CarousalButtonPosition
                      ].join(" ")}
                    >
                      Start Your trail Free
                    </button>
                  </div>
                </div>
                <img
                  alt=""
                  src={require("../../assets/images/Group 1.png")}
                  className={classes.CaptionImage}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                className={classes.CarousalImage}
                src={carousal0}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className={classes.CarousalImage}
                src={carousal1}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className={classes.CarousalImage}
                src={carousal2}
                alt="Third slide"
              />
            </div>
          </div>
        </section>

        <section className="container py-5 d-flex flex-column align-items-center">
          <span className={classes.Title}>New Opportunities</span>
          <span className={classes.Discription} style={{ textAlign: "center" }}>
            We are the first and the only crowdfunding platform enabling you
          </span>
          <span className={classes.Discription} style={{ textAlign: "center" }}>
            to help students finance.
          </span>
          <div className="d-flex row justify-content-between w-100 flex-row">
            <div className={classes.card + " mt-4 card col-md-4 col-lg-3"}>
              <div className="card-body">
                <img
                  className={classes.OppertunityImage0 + " mb-3"}
                  src={opportunity0}
                  alt=""
                />
                <p className="card-text">
                  Our team will help solve your maths problem, by guiding.
                </p>
                <p className="card-text">
                  Our team of professional staffs will view through your
                  progress and goes by for your clarification and doubts as
                  well.
                </p>
              </div>
            </div>
            <div
              className={classes.card + " mt-4 card col-md-4 col-lg-3"}
              style={{ backgroundColor: "rgb(96, 138, 36)" }}
            >
              <div className="card-body">
                <img
                  className={classes.OppertunityImage1 + " mb-3"}
                  src={opportunity1}
                  alt=""
                />
                <p style={{ color: "white" }} className="card-text">
                  A step towards success
                </p>
                <br />
                <p style={{ color: "white" }} className="card-text">
                  Anyone can join weew foundation no basic requirements needed
                  theres always a room for people to learn.
                </p>
              </div>
            </div>
            <div className={classes.card + " mt-4 card col-md-4 col-lg-3 "}>
              <div className="card-body">
                <img
                  className={classes.OppertunityImage2 + " mb-3"}
                  src={opportunity2}
                  alt=""
                />
                <p className="card-text">
                  small investment fee helps your educational fees
                </p>
                <p className="card-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 d-flex flex-column">
          <span className={classes.Title}>Courses Available</span>
          <span className={classes.Discription + " text-center text-lg-left"}>
            We have a wide range of courses you can even download materials and
            books offline and can study anywhere with or without the need of
            internet connectivity.
          </span>
          <div className="d-flex row justify-content-between flex-row">
            <div className="card mt-3">
              <img alt="" className={classes.CourseImage} src={courses0} />
              <div className={classes.CourseImageOverlay}>
                <div
                  style={{ color: "rgba(102,187,106,1)", fontWeight: "bold" }}
                >
                  VIDEO LESSONS
                </div>
                <div
                  style={{
                    borderRadius: 100,
                    marginTop: "1.5rem",
                    marginBottom: "2.5rem",
                    height: "0.23em",
                    width: "5rem",
                    backgroundColor: "white"
                  }}
                ></div>
                <div style={{ fontSize: "1.8rem", color: "white" }}>
                  Class 2-10
                </div>
                <div style={{ color: "white", fontSize: "0.9rem" }}>
                  Get engaged with video lessons that focus on Conceptual
                  learning with personalised learning programs
                </div>
                <button
                  style={{ marginTop: "2rem" }}
                  className={classes.ButtonWhite + " button-white border"}
                >
                  Enter Classroom
                </button>
              </div>
            </div>
            <div className="card mt-3">
              <img alt="" className={classes.CourseImage} src={courses1} />
              <div className={classes.CourseImageOverlay}>
                <div
                  style={{ color: "rgba(102,187,106,1)", fontWeight: "bold" }}
                >
                  CLASS
                </div>
                <div
                  style={{
                    borderRadius: 100,
                    marginTop: "1.5rem",
                    marginBottom: "2.5rem",
                    height: "0.23em",
                    width: "5rem",
                    backgroundColor: "white"
                  }}
                ></div>
                <div style={{ fontSize: "1.55rem", color: "white" }}>
                  University Books and tools for dev.
                </div>
                <div style={{ color: "white", fontSize: "0.9rem" }}>
                  here you can find all the tools, video lessons, projects for
                  college students.
                </div>
                <button
                  style={{ marginTop: "2rem" }}
                  className={classes.ButtonWhite + " button-white border"}
                >
                  View Blog
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-3 d-flex flex-column">
          <div className="container">
            <div className="d-flex row justify-content-around flex-row py-5">
              <div className="card col-md-6 p-0 border-0">
                <img alt="" className={classes.CourseImage} src={img1} />
              </div>

              <div className="bg-light card col-md-5 py-0 border-0 justify-content-center align-items-center align-items-lg-start">
                <div className={classes.Title}>Covering all the syllabus</div>
                <div
                  className={classes.Discription + " text-center text-lg-left"}
                >
                  Learning journeys are covered and guided to a student's grade
                  & syllabus (CBSE, ICSE, IB, State boards etc). Each chapter
                  comprises small concepts that are stitched together with
                  adaptive questions as per the relevant syllabus, interactive
                  quiz and competitions to earn more points and redeem it to pay
                  fees
                </div>
                <button
                  className={classes.ButtonGreen + " my-5 button-green border"}
                  style={{ width: "10rem" }}
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3 d-flex flex-column">
          <div className="container">
            <div className="d-flex row justify-content-around flex-row py-5">
              <div className="card col-md-5 py-0 border-0 justify-content-center align-items-center align-items-lg-start">
                <div className={classes.Title}>Your Education</div>
                <div
                  className={classes.Discription + " text-center text-lg-left"}
                >
                  LearningOur team monitors your performance day and night to
                  bring the best version of you, with a single touch of a button
                  you can view your scores and your results. Get indulge with
                  weekly activity and help educate others. Students and parents
                  can indulge together on interaction quiz and other exciting
                  home games to educate and entertain your surrounding with
                  Weew.
                </div>
                <button
                  className={classes.ButtonGreen + " my-5 button-green border"}
                  style={{ width: "10rem" }}
                >
                  Explore
                </button>
              </div>
              <div className="card col-md-6 p-0 border-0">
                <img alt="" className={classes.CourseImage} src={img2} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-3 d-flex flex-column">
          <div className="container">
            <div className="d-flex row justify-content-around flex-row py-5">
              <div className="card col-md-6 p-0 border-0">
                <img alt="" className={classes.CourseImage} src={img3} />
              </div>
              <div className="bg-light card col-md-5 py-0 border-0 justify-content-center align-items-center align-items-lg-start">
                <div className={classes.Title}>Join WeeW today</div>
                <div
                  className={classes.Discription + " text-center text-lg-left"}
                >
                  EducationExploreTake one step forward and you will never
                  regret it, and that's a promise. We will do all the best to
                  train you help you and transform a student to become a master.
                  Here at Weew foundation we are glad to welcome you to join us
                  take our hand we will surely make bring the best for you. By
                  assigning tasks and company projects to any students who are
                  even studying in college or looking for job. Join us!
                </div>
                <button
                  className={classes.ButtonGreen + " my-5 button-green border"}
                  style={{ width: "15rem" }}
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex flex-column justify-content-center">
          <div
            className={classes.HowItWorks + " text-light container py-5 w-100"}
          >
            <h3 className="text-center">How our foundation helps you</h3>

            <h6 className="text-center">
              Tsample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample sample sample
              sample sample
            </h6>

            <ul
              className="nav nav-tabs border-0 mt-5 d-flex flex-column flex-sm-row justify-content-lg-center justify-content-between align-items-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="border-light nav-link rounded-circle text-dark p-3 p-lg-4 active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#01"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  01
                </a>
              </li>
              <div className="hr"></div>
              <li className="nav-item">
                <a
                  className="border-light nav-link rounded-circle text-dark p-3 p-lg-4"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#02"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  02
                </a>
              </li>
              <div className="hr"></div>
              <li className="nav-item">
                <a
                  className="border-light nav-link rounded-circle text-dark p-3 p-lg-4"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#03"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  03
                </a>
              </li>
              <div className="hr"></div>
              <li className="nav-item">
                <a
                  className="border-light nav-link rounded-circle text-dark p-3 p-lg-4"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#04"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  04
                </a>
              </li>
            </ul>

            <div className="mt-5 row d-flex flex-row align-items-center justify-content-center">
              <div className="col-lg-4">
                <h6> Select Your Membership plans and your favorite hobby's</h6>
              </div>
              <div className="col-lg-6">
                <h6>
                  Sample use only Sample use onlySample use onlySample use
                  onlySample use onlySample use of onlySample use onlySample use
                  onlySample use onlySample use onlySample use onlySample use
                  onlySample use only
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

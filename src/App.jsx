import { useState } from 'react';

function App() {
  return (
    <>
      <header>
        <div className="header-top-area red-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-6">
                <div className="header-wrapper">
                  <div className="header-link">
                    <ul>
                      <li>
                        <a href="#">Business Insights</a>
                      </li>
                      <li>
                        <a href="#">Job Feeds</a>
                      </li>
                      <li className="envelopes-header-icon">
                        <a href="#">Terms &amp; Conditions </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                <div className="header-top-right">
                  <div className="header-info text-md-right">
                    <span>
                      <i className="far fa-envelope-open" />{' '}
                      <a
                        href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6900070f06291e0c0b04080005470a0604"
                      >
                        [email&nbsp;protected]
                      </a>
                    </span>
                    <span>
                      <i className="far fa-phone" /> +098 987 876 76 7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-menu-area menu-01  pl-45 pr-45">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="logo">
                  <a href="index.html">
                    <img src="/assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="index.html">
                          home <i className="far fa-plus" />
                        </a>
                        <ul className="sub-menu text-left">
                          <li>
                            <a href="index.html">home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">home 4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About </a>
                      </li>
                      <li>
                        <a href="services.html">Services </a>
                      </li>
                      <li>
                        <a href="#">
                          Pages <i className="far fa-plus" />
                        </a>
                        <ul className="sub-menu text-left">
                          <li>
                            <a href="about.html">about</a>
                          </li>
                          <li>
                            <a href="services.html">services</a>
                          </li>
                          <li>
                            <a href="case.html">case</a>
                          </li>
                          <li>
                            <a href="case-details.html">case details</a>
                          </li>
                          <li>
                            <a href="team.html">team</a>
                          </li>
                          <li>
                            <a href="team-details.html">team details</a>
                          </li>
                          <li>
                            <a href="appointment.html">appointment</a>
                          </li>
                          <li>
                            <a href="faq.html">faq</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">
                          News <i className="far fa-plus" />
                        </a>
                        <ul className="sub-menu text-left">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">blog details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="header-right d-none d-lg-block">
                  <div className="menu-bar info-bar f-right d-none d-md-none d-xl-block">
                    <a href="#">
                      <img src="/assets/img/icon/bar.png" alt="" />
                    </a>
                  </div>
                  <div className="header-button f-right">
                    <a href="contact.html" className="c-btn">
                      Get Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="close-icon">
            <button>
              <i className="far fa-window-close" />
            </button>
          </div>
          <div className="logo-side mb-30">
            <a href="index.html">
              <img src="/assets/img/logo/white-logo.png" alt="" />
            </a>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-30">
              <h4>Office Address</h4>
              <p>123/A, Miranda City Likaoli Prikano, Dope</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Phone Number</h4>
              <p>+0989 7876 9865 9</p>
              <p>+(090) 8765 86543 85</p>
            </div>
            <div className="contact-list mb-30">
              <h4>Email Address</h4>
              <p>
                <a
                  href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="0861666e67486d70696578646d266b6765"
                >
                  [email&nbsp;protected]
                </a>
              </p>
              <p>
                <a
                  href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="e18499808c918d84cf8c80888da189948ccf828e8c"
                >
                  [email&nbsp;protected]
                </a>
              </p>
            </div>
          </div>
          <div className="instagram">
            <a href="#">
              <img src="/assets/img/portfolio/p1.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/img/portfolio/p2.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/img/portfolio/p3.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/img/portfolio/p4.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/img/portfolio/p5.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/img/portfolio/p6.jpg" alt="" />
            </a>
          </div>
          <div className="social-icon-right mt-20">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </header>
      {/* header-start */}
      <main>
        {/* hero-area start */}
        <section className="hero-area pos-rel mr-30 ml-30">
          <div className="slider-icon d-none d-xl-block">
            <a href="#">
              <i className="fal fa-comments" />
            </a>
          </div>
          <div className="slider-side d-none d-xl-block">
            <a href="#" className="c-btn">
              {' '}
              <span /> Free consultancy
            </a>
          </div>
          <div className="hero-slider">
            <div className="slider-active">
              <div
                className="single-slider slider-height d-flex align-items-center"
                data-background="/assets/img/slider/01.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                      <div className="hero-content">
                        <div className="slider-caption ">
                          <span data-animation="fadeInUp" data-delay=".2s">
                            NGet Mind Care &amp; Stay Happy
                          </span>
                          <h2 data-animation="fadeInUp" data-delay=".4s">
                            Psychology
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".6s">
                            Is Formally Defined the scientific study of behavior
                            and mental processes.
                          </p>
                        </div>
                        <div className="slider-btn">
                          <a
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            href="contact.html"
                            className="c-btn"
                          >
                            Get Solutions
                          </a>
                          <a
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            href="contact.html"
                            className="c-btn border-btn"
                          >
                            Learn More{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero-area end */}
        {/* about-area-start */}
        <div
          className="about-area ab-01 mr-30 ml-30 pt-100 pb-130"
          data-background="/assets/img/bg/01.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="single-about mb-30">
                  <div className="ab-img">
                    <img src="/assets/img/about/01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-wrapper mt-20 mb-15">
                  <div className="section-title mb-40">
                    <span>
                      <i className="far fa-plus" /> welcome note
                    </span>
                    <h2>Get Latest Editions</h2>
                  </div>
                  <div className="inner-about">
                    <div className="abouts-img f-left mr-30">
                      <img src="/assets/img/about/about.png" alt="" />
                    </div>
                    <div className="about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna.
                      </p>
                      <h4>
                        Mixer B. Browni <span>Consultant</span>
                      </h4>
                    </div>
                  </div>
                  <div className="about-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exerc
                      itation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                  <div className="about-item">
                    <ul>
                      <li>
                        <div className="about-item-text">
                          <span>Solid Solutions</span>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-text">
                          <span>Core Features</span>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-text">
                          <span>24/7 Online Support</span>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-text">
                          <span>Unlimited Revisions</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about-area-end */}
        {/* number-area-start */}
        <div className="number-area pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="number-wrapper nm-01 mb-30">
                  <div className="number-info f-left">
                    <span>01</span>
                  </div>
                  <div className="number-text">
                    <h3>Kind Consultation</h3>
                    <p>New radical acceptance: embracing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="number-wrapper mb-30 nm-01 nm-02">
                  <div className="number-info f-left">
                    <span>02</span>
                  </div>
                  <div className="number-text">
                    <h3>Core Counsaling</h3>
                    <p>New radical acceptance: embracing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="number-wrapper nm-01 nm-03 mb-30">
                  <div className="number-info f-left">
                    <span>03</span>
                  </div>
                  <div className="number-text">
                    <h3>Kind Consultation</h3>
                    <p>New radical acceptance: embracing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* number-area-end */}
        {/* appointment-area-start */}
        <div className="appointment-area pb-70">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-xl-6 col-lg-6">
                <div className="appointment-wrapper mb-30">
                  <div className="section-title mr-30 mb-40">
                    <span>
                      <i className="far fa-plus" /> Work Shedule
                    </span>
                    <h2>Get In Touch In The Mean Time.</h2>
                    <p className="p-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <div className="app-item">
                    <ul>
                      <li>
                        <div className="app-text">
                          <h4>Monday</h4>
                          <span>9:00 - 20:00</span>
                        </div>
                      </li>
                      <li>
                        <div className="app-text">
                          <h4>Saturday</h4>
                          <span>9:00 - 20:00</span>
                        </div>
                      </li>
                      <li>
                        <div className="app-text">
                          <h4>sunday</h4>
                          <span>9:00 - 20:00</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="single-app pos-rel">
                  <div className="appointment-img">
                    <img src="/assets/img/appointment/02.jpg" alt="" />
                  </div>
                  <div className="appointment-02-img">
                    <img src="/assets/img/appointment/01.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* appointment-area-end */}
        {/* awarad-area-start */}
        <div className="award-area">
          <div className="container">
            <div
              className="award-bg pt-100 pb-70"
              data-background="/assets/img/bg/02.jpg"
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="single-award mb-30">
                    <div className="brand-active">
                      <div className="award-img">
                        <img src="/assets/img/brand/01.png" alt="" />
                      </div>
                      <div className="award-img">
                        <img src="/assets/img/brand/02.png" alt="" />
                      </div>
                      <div className="award-img">
                        <img src="/assets/img/brand/03.png" alt="" />
                      </div>
                      <div className="award-img">
                        <img src="/assets/img/brand/04.png" alt="" />
                      </div>
                      <div className="award-img">
                        <img src="/assets/img/brand/03.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="award-wrapper">
                    <div className="section-title white-title mb-30">
                      <span>
                        <i className="far fa-plus" /> rewards
                      </span>
                      <h2>Plaques &amp; Prizes</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* awarad-area-end */}
        {/* case-area-start */}
        <div className="cas-area pl-15 pr-15 pt-230 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="section-title mb-60">
                  <span>
                    <i className="far fa-plus" /> Case study
                  </span>
                  <h2>Great Works</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row case-active">
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/01.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/01.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/02.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/02.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/03.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/03.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/04.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/04.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/05.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/05.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="case-wrapper">
                  <div className="case-img pos-rel">
                    <a href="case-details.html">
                      <img src="/assets/img/case/01.jpg" alt="" />
                    </a>
                    <div className="case-icon">
                      <a className="popup-image" href="/assets/img/case/01.jpg">
                        <i className="fal fa-plus" />
                      </a>
                    </div>
                    <div className="case-text">
                      <span>
                        <i className="far fa-plus" /> Counsaling
                      </span>
                      <h4>
                        <a href="case-details.html">Miranda Halim Family</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* case-area-end */}
        {/* faq-area-start */}
        <div className="faq-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 ">
                <div className="skills-wrapper">
                  <div className="section-title mb-100">
                    <span>
                      <i className="far fa-plus" /> faq
                    </span>
                    <h2>Get Every Single Update Here.</h2>
                  </div>
                  <div className="skills-thum pos-rel">
                    <div className="skills-img">
                      <img src="/assets/img/bg/map.png" alt="" />
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                        <div className="single-skills skills-2 mb-30">
                          <div className="progress-circular">
                            <input
                              type="text"
                              className="knob"
                              defaultValue={0}
                              data-rel={65}
                              data-linecap="round"
                              data-width={85}
                              data-height={85}
                              data-bgcolor="#eff4f6"
                              data-fgcolor="#a15547"
                              data-thickness=".17"
                              data-readonly="true"
                              disabled=""
                            />
                          </div>
                          <div className="skills-content">
                            <h4>Africa</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                        <div className="single-skills mb-30">
                          <div className="progress-circular">
                            <input
                              type="text"
                              className="knob"
                              defaultValue={0}
                              data-rel={51}
                              data-linecap="round"
                              data-width={85}
                              data-height={85}
                              data-bgcolor="#eff4f6"
                              data-fgcolor="#a15547"
                              data-thickness=".17"
                              data-readonly="true"
                              disabled=""
                            />
                          </div>
                          <div className="skills-content">
                            <h4>Austria</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="faq-wrapper">
                  <div className="faq-box">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              How to install this theme?
                            </a>
                          </h5>
                        </div>
                        <div
                          className="collapse show"
                          id="collapseOne"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat aute irure
                              dolor in reprehenderit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How can i make a refund with without jhamela?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat aute irure
                              dolor in reprehenderit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              {' '}
                              What is your company privacy policy?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat aute irure
                              dolor in reprehenderit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <h5 className="mb-0">
                            <a
                              href="#"
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              {' '}
                              Which platform you use for this website?
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat aute irure
                              dolor in reprehenderit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq-area-end */}
        {/* counter-area-start */}
        <div className="counter-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="counter-img">
                  <img src="/assets/img/counter/01.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 mb-30">
                <div className="counter-wrapper red-bg d-flex align-items-end">
                  <div className="counter-content">
                    <h2>
                      80<span>%</span>
                    </h2>
                    <span>Per Country Coverage</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="counter-img">
                  <img src="/assets/img/counter/02.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="counter-img">
                  <img src="/assets/img/counter/03.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="counter-wrapper theme-bg d-flex align-items-end">
                  <div className="counter-content">
                    <h2>
                      99<span>%</span>
                    </h2>
                    <span>Success Rate We Have</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="counter-img">
                  <img src="/assets/img/counter/04.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 mb-30">
                <div className="counter-wrapper grey-theme-bg d-flex align-items-end justify-content-center">
                  <div className="counter-info text-center">
                    <div className="counter-icon">
                      <i className="flaticon-girl" />
                    </div>
                    <h3>Personal Solutions</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter-area-end */}
        {/* cta-area-start */}
        <div
          className="cta-area pt-100 ml-15 mr-15 pb-70"
          data-background="/assets/img/bg/03.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-45 col-lg-5">
                <div className="single-cta">
                  <div className="section-title white-title mb-30">
                    <span>
                      <i className="far fa-plus" /> call to action
                    </span>
                    <h2>Appointment</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="cta-wrapper mt-25 mb-30">
                  <div className="cta-form">
                    <form action="#">
                      <input placeholder="Enter Your Email :" type="email" />
                      <button className="c-btn" type="submit">
                        Get A Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cta-area-end */}
        {/* blog-area-start */}
        <div className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="section-title text-center mb-55">
                  <span>
                    <i className="far fa-plus" /> Blog{' '}
                    <i className="far fa-plus pl-10" />
                  </span>
                  <h2>News &amp; Feeds</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blog-wrapper-latest mb-30">
                  <div className="blog-img-latest">
                    <a href="blog-details.html">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </a>
                    <div className="blog-date-latest">
                      <a href="blog-details.html">
                        28 <span>Jun</span>
                      </a>
                    </div>
                  </div>
                  <div className="blog-text-latest">
                    <h4>
                      <a href="#">
                        The branch of biology that deals with the normal.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod tem por incididunt ut labore et dolore.
                    </p>
                    <div className="blog-meta-latest">
                      <span>
                        <i className="fal fa-user" />{' '}
                        <a href="blog-details.html">By Admin</a>
                      </span>
                      <span>
                        <i className="fal fa-tags" />{' '}
                        <a href="blog-details.html">Counseling, Consult</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blog-wrapper-latest mb-30">
                  <div className="blog-img-latest">
                    <a href="blog-details.html">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </a>
                    <div className="blog-date-latest">
                      <a href="blog-details.html">
                        28 <span>Jun</span>
                      </a>
                    </div>
                  </div>
                  <div className="blog-text-latest">
                    <h4>
                      <a href="#">
                        The branch of biology that deals with the normal.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod tem por incididunt ut labore et dolore.
                    </p>
                    <div className="blog-meta-latest">
                      <span>
                        <i className="fal fa-user" />{' '}
                        <a href="blog-details.html">By Admin</a>
                      </span>
                      <span>
                        <i className="fal fa-tags" />{' '}
                        <a href="blog-details.html">Counseling, Consult</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blog-wrapper-latest mb-30">
                  <div className="blog-img-latest">
                    <a href="blog-details.html">
                      <img src="/assets/img/blog/03.jpg" alt="" />
                    </a>
                    <div className="blog-date-latest">
                      <a href="blog-details.html">
                        28 <span>Jun</span>
                      </a>
                    </div>
                  </div>
                  <div className="blog-text-latest">
                    <h4>
                      <a href="#">
                        To find local times around the globe instead.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod tem por incididunt ut labore et dolore.
                    </p>
                    <div className="blog-meta-latest">
                      <span>
                        <i className="fal fa-user" />{' '}
                        <a href="blog-details.html">By Admin</a>
                      </span>
                      <span>
                        <i className="fal fa-tags" />{' '}
                        <a href="blog-details.html">Counseling, Consult</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog-area-start */}
      </main>
      {/* footer-start */}
      <footer>
        <div className="footer-top-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="footer-logo f-left">
                  <a href="index.html">
                    <img src="/assets/img/logo/white-logo.png" alt="" />
                  </a>
                </div>
                <div className="footer-top-text">
                  <p>Copyright &amp; Design By</p>
                  <h5>BDevs - 2020</h5>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="footer-icon text-md-right">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-middle-area mt-20 pt-80">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-7 mb-30">
                  <div className="footer-wrapper">
                    <h3 className="footer-title">Services</h3>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <a href="#">Industrial Design</a>
                        </li>
                        <li>
                          <a href="#">Commercial Interior Design</a>
                        </li>
                        <li>
                          <a href="#">Residencial Interior Design</a>
                        </li>
                        <li>
                          <a href="#">Detailed &amp; Phased Planning</a>
                        </li>
                        <li>
                          <a href="#">Apartment Exterior Design</a>
                        </li>
                      </ul>
                      <ul className="pl-40">
                        <li>
                          <a href="#">Graphic Design</a>
                        </li>
                        <li>
                          <a href="#">UX Development</a>
                        </li>
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <a href="#">Digital Marketing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-5 mb-30">
                  <div className="footer-wrapper">
                    <h3 className="footer-title">Contact Us</h3>
                    <ul className="footer-address">
                      <li>
                        <div className="footer-address-icon f-left">
                          <i className="fal fa-map-marker-alt" />
                        </div>
                        <div className="footer-address-text">
                          <span>
                            786/A Romada tower mall <br />
                            Brooklyn, NYC
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon f-left">
                          <i className="fal fa-phone" />
                        </div>
                        <div className="footer-address-text">
                          <span>
                            +987 876 765 765 65 <br />
                            +(987) 787 876 876 87
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon f-left">
                          <i className="fal fa-envelope-open" />
                        </div>
                        <div className="footer-address-text">
                          <span>
                            <a
                              href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="61080f070e211604030c00080d4f020e0c"
                            >
                              [email&nbsp;protected]
                            </a>{' '}
                            <br />
                            <a
                              href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="640e0b06170d0a020b2413010609050d084a070b09"
                            >
                              [email&nbsp;protected]
                            </a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-7 mb-30">
                  <div className="footer-wrapper">
                    <h3 className="footer-title">News Feeds</h3>
                    <ul className="footer-news">
                      <li>
                        <div className="footer-news-img f-left">
                          <a href="#">
                            <img src="/assets/img/footer/01.jpg" alt="" />
                          </a>
                        </div>
                        <div className="footer-news-text">
                          <span>
                            <i className="fal fa-calendar-alt" /> 20 Jan 2020
                          </span>
                          <h5>
                            <a href="#">
                              We are specialists in both economics and
                              information
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-news-img f-left">
                          <a href="#">
                            <img src="/assets/img/footer/02.jpg" alt="" />
                          </a>
                        </div>
                        <div className="footer-news-text">
                          <span>
                            <i className="fal fa-calendar-alt" /> 20 Jan 2020
                          </span>
                          <h5>
                            <a href="#">
                              We are specialists in both economics and
                              information
                            </a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area red-bg pt-40 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-6 col-md-6">
                <div className="footer-bottom-wrapper">
                  <div className="footer-bm-img f-left mr-85">
                    <img src="/assets/img/footer/01.png" alt="" />
                  </div>
                  <ul className="footer-bottom-address">
                    <li>
                      <div className="footer-bottom-icon f-left">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="footer-bottom-text">
                        <span>Support Email</span>
                        <h3>
                          <a
                            href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="86efe8e0e9c6f1e3e4ebe7efeaa8e5e9eb"
                          >
                            [email&nbsp;protected]
                          </a>
                        </h3>
                      </div>
                    </li>
                    <li className="f-address">
                      <div className="footer-bottom-icon f-left">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="footer-bottom-text">
                        <span>Support Email</span>
                        <h3>
                          <a
                            href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="e1888f878ea19684838c80888dcf828e8c"
                          >
                            [email&nbsp;protected]
                          </a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <ul className="footer-bottom-link text-md-right">
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

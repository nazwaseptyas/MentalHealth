const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/assets/img/logo/yukceritalogo.png"
                    alt="logo"
                    style={{ width: '200px' }}
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Konsultasi</a>
                    </li>
                    <li>
                      <a href="#">Artikel</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="header-right d-none d-lg-block">
                <div className="header-button f-right">
                  <a href="contact.html" className="c-btn">
                    Masuk
                  </a>
                </div>
                <div className="header-button f-right">
                  <a href="contact.html" className="c-btn">
                    Daftar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile-menu" />
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
      <main>{children}</main>
      <footer className="footer-style footer-04-style">
        <div className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="footer-wrapper">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, cons ectetur adipisicing elit,
                      sed do ei usmod tempor incididunt ut lab ore et dolore
                      magna aliqua. Ut eni m ad minim veniam, quis nos trud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="footer-wrapper ml-15">
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
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="footer-wrapper">
                  <h3 className="footer-title">Contact Us</h3>
                  <ul className="footer-address">
                    <li>
                      <div className="footer-address-icon f-left">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="footer-address-text">
                        <span>786/A Romada tower mall Brooklyn, NYC</span>
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
                            data-cfemail="3c55525a537c4b595e515d5550125f5351"
                          >
                            [email&nbsp;protected]
                          </a>
                          <a
                            href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="a2c8cdc0d1cbccc4cde2d5c7c0cfc3cbce8cc1cdcf"
                          >
                            [email&nbsp;protected]
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="footer-wrapper ml-25">
                  <h3 className="footer-title">Featured Book</h3>
                  <div className="footer-2-img pos-rel">
                    <img src="assets/img/footer/03.jpg" alt="" />
                    <span className="f-tag">Sale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-botm-area pt-25 pb-25">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    Copyright <i className="far fa-copyright" /> 2020 Example.
                    All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-btom-icon text-md-right">
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

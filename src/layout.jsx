import { Link } from 'react-router-dom';

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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/konsultasi">Konsultasi</Link>
                    </li>
                    <li>
                      <Link to="/articles">Artikel</Link>
                    </li>
                    <li>
                      <Link to="/kontak">Contact</Link>
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
                      <img src="assets/img/logo/yukceritalogo.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      YukCerita adalah sebuah website konseling sebaya yang
                      ditujukan untuk membantu mahasiswa dalam mengatasi masalah
                      pribadi, akademik, dan sosial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <div className="footer-wrapper ml-15">
                  <h3 className="footer-title">Features</h3>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Tentang Kami</a>
                      </li>
                      <li>
                        <a href="#">Konsultasi</a>
                      </li>
                      <li>
                        <a href="#">Kontak</a>
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
                        <span>Depok, Jawa Barat</span>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon f-left">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="footer-address-text">
                        <span>
                          +62 8777 1030 559
                          <br />
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon f-left">
                        <i className="fal fa-envelope-open" />
                      </div>
                      <div className="footer-address-text">
                        <span>
                          nazwaseptyas@gmail.com
                          <br />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                <h3 className="footer-title">Ikuti Kami</h3>
                <div className="mb-50">
                  <a href="#" className="c-btn" style={{ color: '#fffff' }}>
                    Konsultasi Sekarang
                  </a>
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
                    Copyright <i className="far fa-copyright" /> 2023 Yuk
                    Cerita. All rights reserved.
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

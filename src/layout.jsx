import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  let user = localStorage.getItem('user');

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <div className="logo">
                <Link to="/">
                  <img
                    src="assets/img/logo/yukceritalogo.png"
                    alt="logo"
                    style={{ width: '200px' }}
                  />
                </Link>
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
                      <Link to="/artikel">Artikel</Link>
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
                  <Link to="/login" className="c-btn">
                    Masuk
                  </Link>
                </div>
                <div className="header-button f-right">
                  <Link to="/register" className="c-btn">
                    Daftar
                  </Link>
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
                    <Link to="/">
                      <img src="assets/img/logo/yukceritalogo.png" alt="" />
                    </Link>
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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/konsultasi">Konsultasi</Link>
                      </li>
                      <li>
                        <Link to="/artikel">Artikel</Link>
                      </li>
                      <li>
                        <Link to="/kontak">Contact</Link>
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
                  <Link
                    to="/konsultasi"
                    className="c-btn"
                    style={{ color: '#fffff' }}
                  >
                    Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: '20px',
            padding: '20px',
            backgroundColor: '#FF9F9F',
            borderRadius: '18px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-circle"
            className="svg-inline--fa fa-exclamation-circle fa-3x section5-fa"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: '24px', height: '24px' }}
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
          <span style={{ marginLeft: '10px', fontSize: '13px' }}>
            Yuk Cerita adalah platform yang fokus pada dukungan dan konseling
            sebaya. Kami siap membantu Anda dalam mengatasi berbagai masalah dan
            memberikan dukungan emosional. Untuk situasi darurat dan membutuhkan
            bantuan segera terkait dengan percobaan bunuh diri, harap hubungi
            layanan profesional yang bisa dijangkau segera yang tersedia di
            wilayah anda.
          </span>
        </div>

        <br />
        <br />
        <br />
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
                  <a href="https://twitter.com/nzwasalsa_">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.linkedin.com/in/nazwaseptyas/">
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

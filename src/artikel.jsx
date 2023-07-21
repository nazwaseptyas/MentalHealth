import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Artikel = () => {
  return (
    <>
      <Layout>
        <div className="blog-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 mb-30">
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="https://imgur.com/B1cSKji.png" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">15 Agustus 2021</Link>
                      </span>
                      <span>
                        <i className="far fa-user" />{' '}
                        <Link to="/detail">Taschiyatul Himiyah</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Fenomena Strict Parents di Kalangan Mahasiswa:
                        Sentralisasi Ambisi dan Situasi
                      </Link>
                    </h4>
                    <p>uysuyauyuayua</p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="https://imgur.com/oPQM5mZ.png" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">07 Juli 2023</Link>
                      </span>
                      <span>
                        <i className="far fa-user" />{' '}
                        <Link to="/detail">Wahyuni Tri Erna</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Benarkah Menjadi Introvert adalah Kesalahan?
                      </Link>
                    </h4>
                    <p>yusyauysuaysuay</p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="https://imgur.com/tglpxhS.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">21 Juni 2023</Link>
                      </span>
                      <span>
                        <i className="far fa-user" />{' '}
                        <Link to="/detail">Dhiyaul qalbimahfuzhah</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Urgensi Self-Efficacy dalam Keberhasilan Perkuliahan
                      </Link>
                    </h4>
                    <p>aysuaysuysuasyua</p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="https://imgur.com/zIaZ9VO.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">11 Juni 2023</Link>
                      </span>
                      <span>
                        <i className="far fa-user" />{' '}
                        <Link to="/detail">Amadhieaseva</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Bagaimana Cara Menangani "Trust Issue"?
                      </Link>
                    </h4>
                    <p>atsyuyuaysuaysua</p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="basic-pagination mt-20 basic-pagination-2">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="far fa-angle-left" />
                          </a>
                        </li>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 mb-30">
                <div className="widget mb-40">
                  <form className="search-form">
                    <input type="text" placeholder="Cari" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget mb-40">
                  <h3 className="widget-title">Artikel Terkait</h3>
                  <ul className="recent-posts">
                    <li>
                      <div className="widget-posts-image">
                        <Link to="/detail">
                          <img src="assets/img/blog/sd1.png" alt="" />
                        </Link>
                      </div>
                      <div className="widget-posts-body">
                        <h6 className="widget-posts-title">
                          <Link to="/detail">
                            Fluid Responsive Typography With CSS Poly Fluid
                            Sizing.
                          </Link>
                        </h6>
                        <div className="widget-posts-meta">
                          October 18, 2018{' '}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="widget-posts-image">
                        <Link to="/detail">
                          <img src="assets/img/blog/sd2.png" alt="" />
                        </Link>
                      </div>
                      <div className="widget-posts-body">
                        <h6 className="widget-posts-title">
                          <a href="#">
                            An Abridged Cartoon Introdu Ction To WebAssembly.
                          </a>
                        </h6>
                        <div className="widget-posts-meta">
                          October 24, 2018{' '}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="widget-posts-image">
                        <a href="#">
                          <img src="assets/img/blog/sd3.png" alt="" />
                        </a>
                      </div>
                      <div className="widget-posts-body">
                        <h6 className="widget-posts-title">
                          <a href="#">
                            Basic Patterns Mobile Navig Pros And Cons WebAss
                          </a>
                        </h6>
                        <div className="widget-posts-meta">
                          October 28, 2018{' '}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-40">
                  <h3 className="widget-title">Kategori</h3>
                  <ul className="service-list">
                    <li>
                      <Link to="/detail">Organisasi</Link>
                    </li>
                    <li>
                      <Link to="/detail">Keluarga</Link>
                    </li>
                    <li>
                      <Link to="/detail">Karir</Link>
                    </li>
                    <li>
                      <Link to="/detail">Masalah diri</Link>
                    </li>
                    <li>
                      <Link to="/detail">Trauma</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Artikel;

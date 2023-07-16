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
                      <img src="assets/img/blog/b1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">05 May 2020</Link>
                      </span>
                      <span>
                        <i className="far fa-comments" />{' '}
                        <Link to="/detail">Komentar (10)</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Launching Make App Store Optimization Foundation
                      </Link>
                    </h4>
                    <p>
                      Sed perspicia unde omnis iste natus error voluptatem
                      accsam dolor laudantium waset totamaperiam eaqipsaty
                      quaenventore veritatis quasi architecto beatae
                    </p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="assets/img/blog/b3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">05 May 2020</Link>
                      </span>
                      <span>
                        <i className="far fa-comments" />{' '}
                        <Link to="/detail">Komentar (10)</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Smashing Meets Gives A Sneak Preview Of What
                      </Link>
                    </h4>
                    <p>
                      Sed perspicia unde omnis iste natus error voluptatem
                      accsam dolor laudantium waset totamaperiam eaqipsaty
                      quaenventore veritatis quasi architecto beatae
                    </p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="assets/img/blog/b2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">05 May 2020</Link>
                      </span>
                      <span>
                        <i className="far fa-comments" />{' '}
                        <Link to="/detail">Komentar (10)</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        How To Run The Right Kind Of Research Study With{' '}
                      </Link>
                    </h4>
                    <p>
                      Sed perspicia unde omnis iste natus error voluptatem
                      accsam dolor laudantium waset totamaperiam eaqipsaty
                      quaenventore veritatis quasi architecto beatae
                    </p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div>
                <div className="blog-wrapper blog-standard  mb-50">
                  <div className="blog-img">
                    <Link to="/detail">
                      <img src="assets/img/blog/b3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <div className="blog-meta">
                      <span>
                        <i className="far fa-calendar-alt" />{' '}
                        <Link to="/detail">05 May 2020</Link>
                      </span>
                      <span>
                        <i className="far fa-comments" />{' '}
                        <Link to="/detail">Komentar (10)</Link>
                      </span>
                    </div>
                    <h4>
                      <Link to="/detail">
                        Energized Even When You’re Stuck At A Desk All Day
                      </Link>
                    </h4>
                    <p>
                      Sed perspicia unde omnis iste natus error voluptatem
                      accsam dolor laudantium waset totamaperiam eaqipsaty
                      quaenventore veritatis quasi architecto beatae
                    </p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
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
                  <h3 className="widget-title">Kategori</h3>
                  <ul className="service-list">
                    <li>
                      <Link to="/detail">Semua Kategori </Link>
                    </li>
                    <li>
                      <Link to="/detail">Industri dan Organisasi </Link>
                    </li>
                    <li>
                      <Link to="/detail">Karir </Link>
                    </li>
                    <li>
                      <Link to="/detail">Keluarga </Link>
                    </li>
                    <li>
                      <Link to="/detail">Masalah Diri </Link>
                    </li>
                    <li>
                      <Link to="/detail">Trauma </Link>
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

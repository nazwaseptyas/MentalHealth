import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <>
      <Layout>
        <div className="blog-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 mb-30">
                <div className="blog-wrapper blog-standard blog-details">
                  <div className="blog-d-img">
                    <img src="assets/img/blog/b1.jpg" alt="" />
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
                      quaenventore veritatis quasi architecto beatae But I must
                      explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in
                      which toil and pain can procure him some great pleasure.
                      To take a trivial example, which of us ever undertakes
                      laborious physical exercise, except to obtain some
                      advantage from it? But who has any right to find fault
                      with a man who chooses to enjoy a pleasure that has no
                      annoying consequences, or one who avoids a pain that
                      produces no resultant pleasure
                    </p>
                    <div className="post-text mb-20">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <footer>- Rosalina Pong</footer>
                      </blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia.
                      </p>
                    </div>
                    <div className="row mt-50 justify-content-end">
                      {' '}
                      <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                        <div className="blog-share-icon text-left text-md-right">
                          <span>Bagikan : </span>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                          <a href="#">
                            <i className="fab fa-whatsapp" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="navigation-border pt-50 mt-40" />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="bakix-navigation b-next-post text-left mb-30">
                          <h4>
                            <Link to="/detail">Author</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="b-author mt-40 mb-60">
                      <div className="author-img">
                        <img src="assets/img/blog/me.png" alt="" />
                      </div>
                      <div className="author-text">
                        <h3>MD. Salim Rana</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip .
                        </p>
                        <div className="author-icon">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-comments">
                      <div className="blog-coment-title mb-30">
                        <h2>Komentar</h2>
                      </div>
                      <div className="latest-comments">
                        <ul>
                          <li>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img
                                  src="assets/img/blog/comments1.png"
                                  alt=""
                                />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Karon Balina</h5>
                                  <span>19th May 2018</span>
                                  <a className="reply" href="#">
                                    <i className="fas fa-reply" />
                                    Reply
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="children">
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img
                                  src="assets/img/blog/comments2.png"
                                  alt=""
                                />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Julias Roy</h5>
                                  <span>19th May 2018</span>
                                  <a className="reply" href="#">
                                    <i className="fas fa-reply" />
                                    Reply
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img
                                  src="assets/img/blog/comments3.png"
                                  alt=""
                                />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Arista Williamson</h5>
                                  <span>19th May 2018</span>
                                  <a className="reply" href="#">
                                    <i className="fas fa-reply" />
                                    Reply
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-comments-form">
                      <div className="post-comments-title">
                        <h2>Tambahkan Komentar</h2>
                      </div>
                      <form
                        id="contacts-form"
                        className="conatct-post-form"
                        action="#"
                      >
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-name">
                              <input type="text" placeholder="Masukkan Nama" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-email">
                              <input
                                type="email"
                                placeholder="Masukkan Email"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon contacts-message">
                              <textarea
                                name="comments"
                                id="comments"
                                cols={30}
                                rows={10}
                                placeholder="Komentar Anda"
                                defaultValue={''}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <button className="c-btn" type="submit">
                              <span>Kirim</span>
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Detail;

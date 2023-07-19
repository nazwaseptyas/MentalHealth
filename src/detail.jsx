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
                        <i className="far fa-user" />{' '}
                        <Link to="/detail">Penulis</Link>
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
                        <a href="blog-details.html">
                          <img src="assets/img/blog/sd1.png" alt="" />
                        </a>
                      </div>
                      <div className="widget-posts-body">
                        <h6 className="widget-posts-title">
                          <a href="blog-details.html">
                            Fluid Responsive Typography With CSS Poly Fluid
                            Sizing.
                          </a>
                        </h6>
                        <div className="widget-posts-meta">
                          October 18, 2018{' '}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="widget-posts-image">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/sd2.png" alt="" />
                        </a>
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Detail;

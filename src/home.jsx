import React from 'react';
import Layout from './layout';

const Home = () => {
  return (
    <>
      <Layout>
        <section className="hero-area pos-rel mr-30 ml-30">
          <div className="slider-icon d-none d-xl-block">
            <a href="/contact">
              <i className="fal fa-comments" />
            </a>
          </div>
          <div className="slider-side d-none d-xl-block">
            <a href="#" className="c-btn">
              <span /> Gratis Konsultasi
            </a>
          </div>
          <div
            className="hero-slider"
            style={{
              backgroundImage: "url('/assets/img/slider/peercounseling.png')",
            }}
          >
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
                            Mind Care &amp; Stay Happy
                          </span>
                          <h2 data-animation="fadeInUp" data-delay=".4s">
                            Yuk Cerita
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".6s">
                            YukCerita adalah sebuah website konseling sebaya
                            yang ditujukan untuk membantu mahasiswa dalam
                            mengatasi masalah pribadi, akademik, dan sosial.
                          </p>
                        </div>
                        <div className="slider-btn">
                          <a
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            href="contact.html"
                            className="c-btn"
                          >
                            Konsultasi sekarang
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

        {/* number-area-start */}
        <div className="number-area pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6"></div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="number-wrapper mb-30 nm-01 ">
                  <div className="number-info f-left">
                    <span>01</span>
                  </div>
                  <div className="number-text">
                    <h3>Peer Counselling</h3>
                    <p># Website Peer Counselling untuk Mahasiswa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* faq-area-end */}
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-60">
              <span>Kenapa harus di Yuk Cerita? </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="feature-area feature-area-top pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="feature-box text-center mb-30">
                  <div className="fea-padd">
                    <div className="feature-icon mb-25">
                      <i className="flaticon-brain" />
                    </div>
                    <div className="feature-content">
                      <h3 className="fea-title">Nyaman</h3>
                      <p>
                        Anda dapat bercerita dengan nyaman, masalah apapun akan
                        kami dengar dan dapat memberikan solusi yang terbaik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-box text-center mb-30">
                  <div className="fea-padd">
                    <div className="feature-icon mb-25">
                      <i className="flaticon-life" />
                    </div>
                    <div className="feature-content">
                      <h3 className="fea-title">Sehat mental</h3>
                      <p>
                        YukCerita menyediakan artikel dan konseling dengan teman
                        sebaya untuk meningkatkan kesehatan mental pada
                        mahasiswa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-box text-center mb-30">
                  <div className="fea-padd">
                    <div className="feature-icon mb-25">
                      <i className="flaticon-depression" />
                    </div>
                    <div className="feature-content">
                      <h3 className="fea-title">Tuangkan isi hati pada ahli</h3>
                      <p>
                        Kamu dapat melakukan konsultasi dengan konseling sebaya
                        yang sudah dilatih oleh psikolog professional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box text-center mb-30">
                <div className="fea-padd">
                  <div className="feature-icon mb-25">
                    <i className="flaticon-depression" />
                  </div>
                  <div className="feature-content">
                    <h3 className="fea-title">Dapat bercerita kapan saja</h3>
                    <p>
                      Kamu dapat menghubungi konselor kapanpun melalui chat.
                      Semua pasti bisa!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box text-center mb-30">
                <div className="fea-padd">
                  <div className="feature-icon mb-25">
                    <i className="flaticon-life" />
                  </div>
                  <div className="feature-content">
                    <h3 className="fea-title">Kerahasiaan Terjamin</h3>
                    <p>
                      Cerita dan data mu akan hanya akan digunakan untuk
                      keperluan konseling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="cta-area pb-110 pt-120">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-60">
                <span>Masalah Kesehatan Mental</span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="assets/img/bg/mental.jpg"
              alt="Background"
              style={{ width: '600px' }}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="tab-area pb-90">
          <div className="container">
            <div className="row">
              <div className="tab-content mt-120" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-xl-5 col-lg-5">
                      <div className="sycho-tab-img mb-30">
                        <img
                          src="assets/img/bg/coun.png"
                          alt=""
                          style={{ width: '500px' }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                      <div className="sycho-tab-content mt-30 mb-30">
                        <div className="section-title mb-40">
                          <span>Peer Counselling</span>
                          <p className="tab-quote">
                            Experience the Magic of Beautiful Solutions through
                            Peer Counseling
                          </p>
                          <p style={{ fontFamily: 'Poppins' }}>
                            Bimbingan konseling teman sebaya atau peer counselor
                            merupakan suatu cara bagi mahasiswa belajar
                            bagaimana memperhatikan dan membantu mahasiswa lain,
                            serta menerapkannya dalam kehidupan sehari-hari.
                            Konseling sebaya merupakan suatu bentuk pendidikan
                            psikologis yang disengaja dan sistematik. Konseling
                            sebaya memungkinkan mahasiswa untuk memiliki
                            keterampilan-keterampilan guna mengimplementasikan
                            pengalaman kemandirian dan kemampuan mengontrol diri
                            yang sangat bermakna bagi mahasiswa, karena para
                            mahasiswa berdasarkan tingkat perkembangannya adalah
                            individu-individu yang sedang menjalani usia remaja
                            akhir
                          </p>
                          <div className="mb-50" />
                          <a
                            href="#"
                            className="c-btn"
                            style={{ color: '#fffff' }}
                          >
                            Konsultasi Sekarang
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tab-area-end */}
      </Layout>
    </>
  );
};

export default Home;

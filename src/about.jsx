import React from 'react';
import Layout from './layout';

const About = () => {
  return (
    <>
      <Layout>
        <div
          className="about-area pt-120 pb-90"
          style={{ backgroundColor: '#F6FBF4' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="sycho-tab-img mb-30">
                  <img src="assets/img/about/aboutcoun.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="sycho-tab-content pt-40 pr-0 mb-30">
                  <div className="section-title mb-40">
                    <span>Tentang Kami</span>

                    <p className="tab-quote">
                      Embrace Extraordinary &amp; Beautiful Solutions for Inner
                      Growth
                    </p>
                    <p>
                      YukCerita adalah platform konseling sebaya yang membantu
                      mahasiswa mengatasi masalah pribadi, akademik, dan sosial
                      selama kuliah. Kami menyediakan layanan konseling online
                      yang dilakukan oleh mahasiswa terlatih untuk memberikan
                      dukungan dan saran kepada teman-teman mereka. Privasi dan
                      kerahasiaan mahasiswa sangat dijaga. Kami juga menyediakan
                      artikel dan tips tentang kesehatan mental, manajemen
                      waktu, dan strategi belajar. YukCerita berkomitmen untuk
                      mendukung kesehatan mental mahasiswa agar mereka dapat
                      mencapai tujuan akademik dan pribadi dengan lebih baik.
                      Bergabunglah dengan komunitas YukCerita dan mulailah
                      mengatasi masalah Anda secara efektif dan percaya diri!
                    </p>
                    <div className="mb-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="about-area pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="about-img pos-rel mb-30">
                  <img src="assets/img/about/drjara.jpg" alt="" />
                  <a className="download-btn" href="contact.html">
                    <i className="fal fa-clouds" /> Download Cv
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="about-11-wrapper mb-30 pl-50 pt-40">
                  <div className="section-title mb-40">
                    <span>Psikolog</span>
                    <h2>Nama</h2>
                    <div className="mb-40" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea comm odo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="ab-mission pt-40 mb-40">
                  <h3>Misi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea comm odo consequat.
                  </p>
                </div>
                <div className="ab-mission mb-30">
                  <h3>Visi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul>
                    <li>
                      <i className="fal fa-check" /> Gratis Konsultasi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="appointment-area pb-70">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-xl-6 col-lg-6">
                <div className="appointment-wrapper mb-30">
                  <div className="section-title mr-30 mb-40">
                    <span>Jadwal Kerja</span>
                    <p className="p-title">
                      Kami siap untuk mendengarkan dan memberikan solusi terbaik
                      yang sesuai dengan kebutuhan Anda. Hubungi kami sesuai
                      dengan jadwal yang tertera.
                    </p>
                  </div>
                  <div className="app-item">
                    <ul>
                      <li>
                        <div className="app-text">
                          <h4>Senin - Jum'at</h4>
                          <span>9:00 - 20:00</span>
                        </div>
                      </li>
                      <li>
                        <div className="app-text">
                          <h4>Sabtu &amp; Minggu</h4>
                          <span>10:00 - 19:00</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="single-app pos-rel">
                  <div className="appointment-img">
                    <img src="assets/img/appointment/work2.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

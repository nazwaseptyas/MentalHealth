import React from 'react';
import Layout from './layout';

const Konsultasi = () => {
  return (
    <>
      <Layout>
        <div className="contact-us-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="section-title text-center mb-60">
                  <span>
                    <i className="far fa-plus" /> Konsultasi Sekarang{' '}
                    <i className="far fa-plus pl-10" />
                    <br />
                  </span>
                  <h2 style={{ fontSize: '36px' }}>Form Konsultasi Online</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contacts-us-wrapper theme-green">
                  <form
                    id="contacts-us-form"
                    className="contacts-us-form"
                    action="https://www.devsnews.com/template/mindpress/mindpress/assets/mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-name">
                          <input
                            name="name"
                            type="text"
                            placeholder="Masukkan Nama"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-email">
                          <input
                            name="email"
                            type="email"
                            placeholder="Masukkan Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-date">
                          <input
                            id="date"
                            name="date"
                            type="date"
                            className="custom-date-input"
                            style={{ fontSize: '14px' }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-phone">
                          <input
                            name="phone"
                            type="number"
                            placeholder="Masukkan Nomor Telepon"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contacts-icon contactss-doctor">
                          <input
                            name="doctor"
                            type="text"
                            placeholder="Nama Dokter"
                            value="Psikolog Nadjilah Fatin"
                            readOnly
                            style={{ fontSize: '14px' }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="contacts-icon contactss-address">
                          <input
                            name="address"
                            type="text"
                            placeholder="Masukkan Alamat"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contacts-icon contactss-message">
                          <textarea
                            name="message"
                            id="comments"
                            cols={30}
                            rows={10}
                            placeholder="Keluhan Anda"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                          <div className="contacts-us-form-button text-center">
                            <button className="c-btn" type="submit">
                              Kirim
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="ajax-response" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Konsultasi;

import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';

const Kontak = () => {
  return (
    <>
      <Layout>
        <div
          className="breadcrumb-area pt-150 pb-150"
          data-overlay={7}
          style={{ backgroundImage: 'url(assets/img/bg/kontak.jpeg)' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center z-index">
                  <h1>contact</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <span>
                        <Link to="/kontak">Contact</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us-area">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="conatct-address-wrapper theme-gray  mb-30">
                  <div className="contact-address-icon f-left">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="contact-address-text fix">
                    <span>Phone Number</span>
                    <h3>+62 8777 1030 559</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="conatct-address-wrapper theme-bg mails mb-30">
                  <div className="contact-address-icon f-left">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="contact-address-text fix">
                    <span>Email Address</span>
                    <h3>nazwaseptyas@gmail.com</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="conatct-address-wrapper red-bg mpas mb-30">
                  <div className="contact-address-icon f-left">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="contact-address-text fix">
                    <span>Officce Address</span>
                    <h3>Depok, Jawa Barat</h3>
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

export default Kontak;

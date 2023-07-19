import React, { useState } from 'react';
import Layout from './layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './loading';
const Konsultasi = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const simpan = async (e) => {
    e.preventDefault();
    if (isLoading) return 'Loading';
    const data = new FormData(e.target);
    const formdata = Object.fromEntries(data.entries());

    const { nama, nohp, email, alamat, keluhan, tanggal } = formdata;

    try {
      setisLoading(true);
      const response = await axios.post(
        API + '/tambah-konsultasi',
        { nama, nohp, email, alamat, keluhan, tanggal }

      );

      // if (response.status === 201) swal("Data Berhasil di daftarkan !")
      if (response.status === 201) {

        toast.success('Data Berhasil ditambah!', {
          position: toast.POSITION.TOP_RIGHT, // Atur posisi toast (bisa diganti dengan TOP_LEFT, TOP_CENTER, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT)
          autoClose: 3000, // Atur waktu otomatis menutup toast (dalam milidetik), misalnya 3000ms = 3 detik
        })
        // return;
      }
      // navigate("/home");
      setisLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setisLoading(false);

    }
  };
  return (
    <>
      <Layout>
        <ToastContainer />

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
                    // action="https://www.devsnews.com/template/mindpress/mindpress/assets/mail.php"
                    // method="POST"
                    onSubmit={simpan}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-name">
                          <input
                            name="nama"
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
                            name="tanggal"
                            type="date"
                            className="custom-date-input"
                            style={{ fontSize: '14px' }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="contacts-icon contactss-phone">
                          <input
                            name="nohp"
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
                            name="alamat"
                            type="text"
                            placeholder="Masukkan Alamat"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contacts-icon contactss-message">
                          <textarea
                            name="keluhan"
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
                              {isLoading ? <Loading /> : 'Kirim'}
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

const Notify = (pesan) =>
  toast.success(pesan, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export default Konsultasi;

import React, { useEffect, useState } from 'react';
import Layout from './layout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './loading';

function generateNumbers(input) {
  const result = [];
  let startNumber = (input - 1) * 3;

  for (let i = 0; i < 2; i++) {
    result.push(startNumber + i * 3);
  }

  return result;
}
function formatDate(inputDate) {
  const monthsInIndonesian = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [year, month, day] = inputDate.split("-");
  const dateObject = new Date(year, month - 1, day);

  const formattedDate = `${parseInt(day)} ${monthsInIndonesian[dateObject.getMonth()]} ${year}`;

  return formattedDate;
}


const Artikel = () => {
  // const { page } = useParams();
  const [artikel, setartikel] = useState([]); // ini
  let [page, setpage] = useState(1); // ini
  const API = import.meta.env.VITE_BASE_URL;
  const [isLoading, setisLoading] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getDataartikel = async () => {
      setisLoading(true);
      const response = await axios.get(`${API}/artikel`);
      setartikel(response.data);
      setisLoading(false);
    };

    getDataartikel();

  }, []);

  const [min, max] = generateNumbers(page)
  const dataartikel = artikel.slice(min, max)
  const setdatapage = (e) => {
    setpage(e.target.dataset.filter)
  }
  return (
    <>

      <Layout>

        <div className="blog-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 mb-30">
                {isLoading && <div className="d-flex align-items-center justify-content-center">
                  <Loading />
                </div>}
                {dataartikel.map((a, key) => {
                  const format_tanggal = formatDate(a.tanggal)
                  return (
                    <div className="blog-wrapper blog-standard  mb-50" key={key}>
                      <div className="blog-img">
                        <Link to="/detail">
                          <img src={a.gambar} alt="" />
                        </Link>
                      </div>
                      <div className="blog-text">
                        <div className="blog-meta">
                          <span>
                            <i className="far fa-calendar-alt" />{' '}
                            <Link to="/detail">{format_tanggal}</Link>
                          </span>
                          <span>
                            <i className="far fa-user" />{' '}
                            <Link to="/detail">{a.penulis}</Link>
                          </span>
                        </div>
                        <h4>
                          <Link to="/detail">
                            {a.judul}
                          </Link>
                        </h4>
                        <p>
                          {a.isi_artikel}
                        </p>


                        <Link to="/detail" className="c-btn gray-btn">
                          <span> </span> Selengkapnya <span />
                        </Link>
                      </div>
                    </div>
                  )
                })}
                {/* <div className="blog-wrapper blog-standard  mb-50">
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
                    <p>
                      Setiap manusia memiliki kepribadian yang unik dan berbeda
                      satu sama lain. Perbedaan ini justru yang membuat
                      mekanisme kehidupan menjadi lebih indah. Namun, terkadang
                      masih ada oknum manusia yang bertindak rasis,
                      mengolok-olok, atau merundung orang lain yang dianggap
                      berbeda pandangan, ras, warna kulit, agama, bahkan
                      kepribadian. Padahal, hal seperti itu jelas-jelas dilarang
                      oleh hak asasi dan nilai-nilai agama.
                    </p>
                    <p>
                      Kini kita mengetahui beberapa tipe kepribadian yang cukup
                      terkenal di masyarakat, misalnya adalah: ambivert,
                      introvert, dan ekstrovert. Kepribadian yang akan penulis
                      ulik kali ini adalah introvert.
                    </p>
                    <p>
                      Menurut Carl Jung (1920) dalam bukunya berjudul
                      "Psychologische Typen," pribadi yang introvert adalah
                      orang-orang yang mendapatkan semangat dari waktu
                      menyendiri, berbeda dengan orang-orang ekstrovert yang
                      merasa paling hidup saat berada di keramaian.
                    </p>
                    <p>
                      Orang-orang yang memiliki kepribadian introvert sering
                      kali diidentikkan dengan sifat pendiam, pemalu, dan enggan
                      bersosialisasi. Namun, sebenarnya tidak selalu demikian.
                      Orang dengan kepribadian introvert tetap membutuhkan
                      interaksi sosial, meskipun dalam bentuk yang berbeda
                      dengan orang ekstrovert.
                    </p>
                    <p>
                      Orang introvert juga lebih suka mengamati sesuatu daripada
                      berinteraksi, bukan karena takut atau tak acuh, tetapi
                      mereka cenderung memikirkan tindakan dengan matang sebelum
                      melakukannya. Mereka lebih suka menjadi pendengar daripada
                      berbicara banyak, terutama tentang hal-hal yang dianggap
                      tidak penting.
                    </p>
                    <p>
                      Meskipun demikian, orang introvert dapat berbicara tentang
                      hal-hal pribadi hanya kepada orang-orang yang sudah dekat
                      dengan mereka. Mereka akan tampil biasa dalam rutinitas
                      sehari-hari, namun dapat menunjukkan kemampuan luar biasa
                      saat situasi membutuhkan. Dengan begitu, mereka selalu
                      dapat menemukan kebahagiaan dalam momen apapun.
                    </p>
                    <p>
                      Terdapat stigma yang berkembang di masyarakat bahwa
                      menjadi orang introvert adalah sebuah kesalahan. Namun,
                      apakah hal tersebut sepenuhnya benar? Sebelum menjawabnya,
                      kita harus mengetahui terlebih dahulu apa sebab-sebab yang
                      melatarbelakangi seseorang menjadi introvert. Beberapa
                      penyebab seseorang menjadi introvert:
                    </p>
                    <ol>
                      <li>1. Lingkungan keluarganya dan kepribadiannya.</li>
                      <li>2. Memiliki rasa malu untuk melakukan segala hal.</li>
                      <li>
                        3. Tidak memiliki rasa percaya diri didepan publik.
                      </li>
                      <li>4. Kehilangan seseorang yang dicintai.</li>
                      <li>5. Lingkungan hidup yang tidak mensupport.</li>
                      <li>6. Adanya trauma bully dimasa lalu.</li>
                      <li>7. Kekurangan kasih sayang orang tua.</li>
                    </ol>
                    <p>
                      Setelah melihat latar belakang di atas, kita seyogyanya
                      tidak serta merta menjudge orang introvert. Banyak di
                      antara mereka yang mempunyai masa lalu yang kelam hingga
                      menjadikan mereka menjadi pribadi demikian. Bahkan tahukah
                      kamu bahwa orang ekstrovert seketika juga dapat berubah
                      menjadi introvert.
                    </p>
                    <p>
                      Jadi, yang harus dilakukan justru terus mensupport dan
                      memberikan mereka ruang untuk berkembang, bukan justru
                      merundungnya karena menjadi orang introvert bukanlah
                      kesalahan.
                    </p>
                    <p>
                      Bila dirimu saat ini menjadi orang introvert, kamu tidak
                      perlu risau. Kamu jangan merasa insecure dan merasa hina
                      karena kepribadian introvert bukan merupakan sebuah
                      kesalahan.
                    </p>
                    <p>
                      Introvert bukanlah sebuah kelemahan atau kekurangan yang
                      harus dihindari. Mereka hanyalah individu yang sangat
                      berhati-hati dalam melakukan segala aktivitas, meskipun
                      begitu mereka merupakan individu yang sangat perhatian.
                    </p>
                    <p>
                      Apapun kepribadian yang ada dalam diri kita, harus kita
                      syukuri. Yang terpenting, kepercayaan diri dan pengetahuan
                      harus tetap terarah. Dan perlu diingat, menjadi introvert
                      bukan berarti menjadi sosok yang pemalu. Tetaplah
                      melangkah maju, meskipun dengan gaya dan pandangan yang
                      berbeda. Wallahu a'lam bi al-shawaab.
                    </p>
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
                    <p>
                      Dalam menyelesaikan perkuliahan, mahasiswa sering
                      dihadapkan kepada beberapa kesulitan dalam menyelesaikan
                      tugas-tugas perkuliahan. Kesulitan-kesulitan ini akhirnya
                      menimbulkan kecemasan, yang mengakibatkan tekanan termasuk
                      stres karena masalah akademik. Kecemasan mahasiswa muncul
                      dari perasaan terancam di tengah ketidakpastian. Kecemasan
                      pada mahasiswa terjadi karena adanya ketimpangan antara
                      apa yang diinginkan siswa dengan apa yang terjadi pada
                      mahasiswa terkait masalah akademik. Kecemasan adalah
                      kondisi risau atau khawatir, mengeluh bahwa sesuatu yang
                      tidak diinginkan mungkin akan terjadi. Banyak hal yang
                      bisa menyebabkan kecemasan, misalnya kesehatan, hubungan
                      sosial, ujian, tugas, dan kondisi lingkungan adalah
                      hal-hal yang perlu dikhawatirkan.
                    </p>
                    <p>
                      Kecemasan bisa disebabkan oleh beban akademik yang
                      dihadapi mahasiswa, seperti tugas dan ujian, presentasi,
                      ujian tengah semester (UTS) dan ujian akhir semester
                      (UAS), hal itu karena banyak mahasiswa yang khawatir jika
                      mendapat nilai di bawah standar. Mahasiswa memiliki
                      kondisi mental yang berbeda ketika mereka menghadapi
                      sesuatu, yang disebabkan oleh perbedaan dinamika
                      psikologis dalam diri mahasiswa. Mahasiswa dengan kondisi
                      psikologis yang baik cenderung menghadapi berbagai masalah
                      tanpa rasa cemas atau takut. Sebaliknya, mahasiswa dengan
                      motivasi psikologis yang kurang baik akan merasa cemas
                      atau takut saat menghadapi ujian.
                    </p>
                    <p>
                      Ketika seorang mahasiswa merasa cemas saat menghadapi
                      ujian, hal itu dapat mengganggu proses belajar mahasiswa
                      dan mempengaruhi nilai. Kecemasan yang dihadapi mahasiswa
                      dalam menghadapi ujian dapat mempengaruhi kinerja otak
                      mahasiswa dalam belajar. Dampak kecemasan dapat
                      mempengaruhi daya ingat, minat, keterampilan kritis, dan
                      produktivitas mahasiswa dalam belajar. Rasa cemas juga
                      akan mengganggu suasana hati, mengganggu tidur, mengurangi
                      nafsu makan, dan menurunkan kesehatan tubuh, maka bisa
                      jadi itulah penyebab mahasiswa gagal ujian dan mendapat
                      nilai IPK rendah. Oleh karena itu, perlu adanya efikasi
                      diri (<i>self-efficacy</i>).
                    </p>
                    <p>
                      <i>Self-efficacy</i> adalah kepercayaan diri seseorang
                      bahwa ia mampu menyelesaikan pekerjaan yang diberikan
                      dengan baik. <i>Self-efficacy</i> memiliki kemampuan untuk
                      evaluasi diri dan menganggap bahwa mereka memiliki
                      kemampuan untuk melakukan apa yang diharapkan. Tingginya
                      rasa percaya diri yang dihargai akan mendorong orang untuk
                      berpikir lebih terarah, khususnya jika tujuan yang ingin
                      dicapai adalah tujuan yang dapat dilihat (Azwar, 1996).
                    </p>
                    <p>
                      Di sisi lain, arti dari kata <i>effikasi</i> adalah
                      kepercayaan diri dari seseorang tentang kapasitasnya untuk
                      menyelesaikan pekerjaan yang diberikan. Arti dari
                      statement tersebut adalah bahwa jika individu percaya
                      bahwa dia dapat menyelesaikan suatu tugas tertentu, maka
                      besar kemungkinan dia memang dapat menyelesaikan tugas
                      tersebut dengan baik. Dengan demikian, ada efek psikologis
                      yang dimiliki oleh mahasiswa yang awalnya merasa tidak
                      percaya diri tentang kapasitasnya, akhirnya ia mampu
                      melakukan perintah tanpa merasa takut atau khawatir
                      berlebihan.
                    </p>
                    <p>
                      Penelitian membuktikan bahwa <i>self-efficacy</i> adalah
                      salah satu faktor yang memiliki hubungan signifikan dengan
                      kesuksesan belajar seseorang. Peningkatan{' '}
                      <i>self-efficacy</i> merupakan salah satu aspek yang
                      mempengaruhi keberhasilan dalam menghadapi tuntutan hidup.{' '}
                      <i>Self-efficacy</i> membuat mahasiswa tidak mudah
                      menyerah sampai hasil yang diinginkan tercapai.
                    </p>
                    <p>
                      Mahasiswa dengan <i>self-efficacy</i> bertahan dalam
                      menghadapi kendala atau tantangan yang diberikan. Oleh
                      karena itu, setiap mahasiswa dituntut untuk memiliki rasa{' '}
                      <i>self-efficacy</i> sebagai upaya pencapaian tujuan
                      pendidikan. <i>Self-efficacy</i> berperan dalam mendorong
                      keberhasilan akademik atau masa depan setiap mahasiswa.
                      Untuk terwujudnya hasil akhir yang memuaskan orang tidak
                      cukup hanya memikirkan potensi yang dimiliki, tanpa adanya{' '}
                      <i>self-efficacy</i> yang memadai potensi yang dimiliki
                      tidak akan dapat teraktualisasi dengan optimal. Potensi
                      yang dimiliki seseorang akan terpendam selamanya tanpa
                      adanya <i>self-efficacy</i> yang tinggi.
                    </p>
                    <p>
                      Menurut Bandura dalam Sechutack (2008:272),{' '}
                      <i>self-efficacy</i> dipengaruhi oleh empat macam
                      pengalaman, yaitu:
                    </p>
                    <ol>
                      <li>
                        1. Pengalaman tentang keberhasilan sebelumnya dalam
                        melakukan tugas tertentu secara kompeten.
                      </li>
                      <li>
                        2. Pengalaman sosial dalam arti melihat orang lain di
                        masyarakat berhasil mengerjakan suatu tugas tertentu.
                        Hal ini meningkatkan persepsi bahwa tugas tersebut dapat
                        dikerjakan.
                      </li>
                      <li>
                        3. Persuasi sosial atau dorongan dari orang lain yang
                        menyemangati dengan mengatakan bahwa kita mampu
                        mengerjakan tugas tersebut.
                      </li>
                      <li>
                        4. Kondisi emosi yang mempengaruhi persepsi individu
                        tentang kemampuan untuk mencapai tujuan.
                      </li>
                    </ol>
                    <p>
                      Bandura dalam Feist (2011:136) menyatakan bahwa proses
                      psikologis <i>self-efficacy</i> dalam mempengaruhi manusia
                      dapat dilakukan dengan proses berikut ini:
                    </p>
                    <ol>
                      <li>
                        1. Proses kognitif, artinya fungsi kognitif memungkinkan
                        seseorang memprediksi kejadian dan akibat di masa depan.
                      </li>
                      <li>
                        2. Proses motivasi, artinya seseorang berusaha
                        memotivasi dirinya dengan yakin pada tindakan yang akan
                        dilakukan, merencanakan tindakan yang akan
                        direalisasikan.
                      </li>
                      <li>
                        3. Proses afeksi, ditujukan dengan mengontrol kecemasan
                        dan perasaan depresif yang menghalangi pola-pola pikir
                        yang benar untuk mencapai tujuan.
                      </li>
                      <li>
                        4. Proses seleksi, berkaitan dengan kemampuan seseorang
                        menyeleksi tingkah laku yang tepat dalam mencapai
                        tujuan.
                      </li>
                    </ol>
                    <p>
                      Dari teori di atas dapat dijabarkan bahwa urgensi{' '}
                      <i>self-efficacy</i> dalam menunjang keberhasilan
                      mahasiswa dalam perkuliahan di antara dapat dilihat dari
                      beberapa proses.
                    </p>
                    <ol>
                      <li>
                        1. Proses kognitif. <i>Effikasi</i> mempengaruhi
                        kemampuan kognitif dalam menetapkan tujuan perkuliahan,
                        lalu memprediksi tindakan-tindakan yang diperlukan untuk
                        mencapai tujuan perkuliahan dimaksud. Lalu menetapkan
                        segala sesuatu yang perlu dilakukan untuk mendukung
                        kesuksesan perkuliahan. Dalam teori belajar kognitif
                        dinyatakan bahwa belajar mencakup beberapa proses yaitu
                        proses analisis, mengolah informasi, prediksi, dan
                        problem solving. Aktivitas kognitif ini sangat
                        memungkinkan mahasiswa untuk selalu berpikir dalam
                        memecahkan masalah. Apa pun bentuk masalah yang dihadapi
                        dalam penyelesaian perkuliahan dapat dianalisis dengan
                        seksama, menemukan informasi yang dibutuhkan,
                        memprediksi aneka kemungkinan dalam memecahkan masalah,
                        dan menentukan jawaban atau solusi terbaik untuk
                        penyelesaiannya. Dengan demikian, <i>effikasi</i> diri
                        akan mendorong kognitif mahasiswa berproses lebih
                        efektif dan sehingga dapat diprediksi tidak ada masalah
                        perkuliahan yang tidak dapat diselesaikan dengan baik.
                      </li>
                      <li>
                        2. Proses motivasi. <i>Self-efficacy</i> memungkinkan
                        mahasiswa meningkatkan dorongan (motivasi) baik internal
                        maupun eksternal. Motivasi internal terkait dengan
                        kebutuhan mahasiswa untuk mengetahui beragam informasi
                        terkait bidang yang sedang ditekuninya, termasuk
                        kebutuhan untuk mengaktualisasii diri.
                      </li>
                      <li>
                        3. Proses afeksi. Aspek afeksi dalam psikologi terkait
                        dengan perasaan, emosi. Perasaan dan emosi yang dialami
                        seseorang dapat bervariasi tergantung pada situasi dan
                        pengalaman hidup mereka, namun perasaan afektif yang
                        umum seperti senang, sedih, marah, dan takut dapat
                        dialami oleh banyak orang termasuk mahasiswa. Aspek
                        afektif sangat penting dalam kehidupan mahasiswa karena
                        berperan dalam pengambilan keputusan, interaksi sosial,
                        dan kesejahteraan psikologis seseorang. Pengembangan
                        aspek afektif yang sehat dapat membantu seseorang
                        menjadi lebih baik dalam mengelola emosi, membangun
                        hubungan yang sehat, dan meraih kesuksesan dalam
                        kehidupan. Dengan demikian, mahasiswa yang memiliki{' '}
                        <i>effikasi</i> yang tinggi tentu cenderung dapat
                        mengatasi hal terkait emosional dan hubungan baik dengan
                        banyak orang, yang mana hal ini berpotensi untuk
                        membantu keberhasilannya dalam perkuliahan.
                      </li>
                      <li>
                        4. Proses seleksi, terkait tingkah laku mahasiswa dalam
                        menentukan tindakan apa yang harus dilakukan untuk
                        keberhasilan perkuliahan dan tindakan mana yang harus
                        dijauhi dan dihindari. Kesadaran tentang hal ini akan
                        mendukung keberhasilan mahasiswa dalam memilih tindakan
                        yang diperlukan untuk menyelesaikan studinya di
                        perguruan tinggi.
                      </li>
                    </ol>
                    <p>
                      Dari uraian di atas dapat disimpulkan bahwa{' '}
                      <i>self-efficacy</i> mempengaruhi proses kognitif,
                      motivasi, afeksi, dan fungsi seleksi dalam diri mahasiswa.
                      Keempat faktor ini sangat mempengaruhi pikiran, perasaan,
                      dan tindakan mahasiswa dan mengarahkan perilakunya.
                      Memiliki <i>self-efficacy</i> sangat membantu mahasiswa
                      dalam menyelesaikan studi di perguruan tinggi. Maka perlu
                      didukung semua upaya untuk meningkatkan tingkat{' '}
                      <i>effikasi</i> mahasiswa di perguruan tinggi.
                    </p>
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
                    <p>
                      Trust issue merupakan situasi di mana seseorang mengalami
                      rasa sulit percaya kepada orang lain. Seseorang yang
                      memiliki masalah trust issue akan terus-menerus mencurigai
                      setiap orang yang terlibat pada suatu hubungan dengannya.
                      Hubungan tersebut dapat berupa hubungan pasangan, hubungan
                      pertemanan, atau sekadar hubungan dengan orang asing.
                      Bahkan dalam lingkungan kerja dan keluarga juga dapat
                      terjadi. Memiliki masalah kepercayaan (trust issue) ini
                      dapat menyebabkan masalah di masa depan, karena dapat
                      menyebabkan kekecewaan dan kehilangan situasi penting
                      dalam hidup.
                    </p>
                    <p>
                      Trust issue juga dapat terjadi karena pengalaman
                      sebelumnya yang pernah terjadi, kejadian yang menyedihkan,
                      atau bahkan hubungan asmara. Selain itu, trust issue juga
                      ditandai dengan adanya gejala dan perilaku penderita
                      ketika berhubungan dengan orang lain.
                    </p>
                    <p>
                      Meski bukan tergolong dengan gangguan mental (mental
                      health), tetapi kondisi ini sangat perlu untuk mendapatkan
                      penanganan yang tepat dan apabila terus-menerus dibiarkan
                      dapat berdampak sangat buruk pada pola pikir dan perilaku
                      seseorang.
                    </p>
                    <p>
                      Adapun beberapa gejala atau tanda-tanda tentang seseorang
                      yang mengalami trust issue yang sangat penting untuk kita
                      ketahui, seperti:
                    </p>
                    <ul>
                      <li>1. Mudah mencurigai orang lain.</li>
                      <li>
                        2. Sering berpikir bahwa orang lain tidak tulus bahkan
                        mungkin memiliki maksud terselubung.
                      </li>
                      <li>3. Menjadi pribadi yang lebih tertutup.</li>
                      <li>
                        4. Sulit memaafkan orang lain yang telah melakukan
                        kesalahan.
                      </li>
                      <li>5. Selalu merasa kesepian dan hampa.</li>
                    </ul>
                    <p>
                      Ada juga dampak dalam hubungan dengan pasangan, seperti:
                    </p>
                    <ul>
                      <li>1. Overprotektif dalam hubungan.</li>
                      <li>2. Sering merasa curiga dengan pasangan.</li>
                      <li>3. Sering menuduh tanpa alasan.</li>
                      <li>
                        4. Enggan untuk berkomitmen dalam hubungan berikutnya.
                      </li>
                    </ul>
                    <p>
                      Trust issue juga memiliki dampak seperti sering
                      overthinking. Rasa tidak percayanya terhadap seseorang
                      akan membuatnya cenderung memikirkan orang tersebut secara
                      terus-menerus. Pertanyaan-pertanyaan mengenai seseorang
                      tersebut mulai bermunculan, sehingga akan menimbulkan rasa
                      takut dan sulit untuk melakukan interaksi dengan orang
                      lain.
                    </p>
                    <p>
                      Nah, disini bagaimana cara kita untuk mengatasi trust
                      issue?
                    </p>
                    <h5>Solusi Mengatasi Trust Issue</h5>
                    <ol>
                      <li>
                        1. Cobalah untuk berkomunikasi dengan santai dan selalu
                        berfikir positif terhadap seseorang.
                      </li>
                      <li>
                        2. Lakukan validasi perasaan sendiri dengan membuat
                        beberapa alasan mengapa kita sulit percaya dengan orang
                        lain dan tanyakan kepada diri sendiri apakah rasa
                        ketidakpercayaan kita itu wajar atau tidak.
                      </li>
                      <li>
                        3. Menceritakan keluh kesah atau permasalahan yang kita
                        rasakan dan alami kepada orang terdekat, mungkin dengan
                        teman dekat atau orang tua yang dekat dengan kita.
                      </li>
                      <li>
                        4. Mencoba memaafkan orang lain dan diri sendiri, serta
                        mencari kebaikan dari orang-orang tersebut.
                      </li>
                      <li>
                        5. Jangan memaksakan diri untuk mencoba membangun rasa
                        percaya kepada orang lain, namun tingkatkan kepercayaan
                        kepada diri sendiri terlebih dahulu.
                      </li>
                      <li>
                        Jika upaya di atas belum berhasil, pertimbangkan untuk
                        berkonsultasi dengan psikolog atau psikiater yang dapat
                        membantu mencari penyebab dan memberikan terapi yang
                        tepat.
                      </li>
                    </ol>
                    <p>
                      Jadi, disini kita harus mencoba terbuka dengan orang-orang
                      yang menurut kita dekat dengan kita. Jangan takut dan
                      jangan dipendam sendiri, dengan begitu setidaknya ada yang
                      mengerti kita apa yang sedang kita alami dan setidaknya
                      mendapat dukungan dari orang terdekat.
                    </p>
                    <Link to="/detail" className="c-btn gray-btn">
                      <span> </span> Selengkapnya <span />
                    </Link>
                  </div>
                </div> */}
                <div className='mb-5' id='basic-pagination'></div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="basic-pagination mt-20 basic-pagination-2">
                      <ul >
                        <li onClick={() => setpage(page - 1)}>
                          <a href="#basic-pagination">
                            <i className="far fa-angle-left" />
                          </a>
                        </li>
                        <li className={page == 1 ? 'active' : ''} onClick={setdatapage} >
                          <a href="#basic-pagination" data-filter="1">1</a>
                        </li>
                        <li className={page == 2 ? 'active' : ''} onClick={setdatapage} >
                          <a href="#basic-pagination" data-filter="2">2</a>
                        </li>
                        <li className={page == 3 ? 'active' : ''} onClick={setdatapage} >
                          <a href="#basic-pagination" data-filter="3">3</a>
                        </li>
                        {/* <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li> */}
                        <li onClick={() => setpage(page + 1)}>
                          <a href="#basic-pagination">
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

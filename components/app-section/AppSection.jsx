const AppSection = () => {
  return (
    <div className="row">
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="bg-shape"></div>
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/mobile-app.png" alt="mobile app" />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <span className="sub-title">İNDİRİN VE KEYFİNİ ÇIKARIN</span>
            <h2>
            Loncaio İşini Alın
              <br /> Arama Uygulaması
            </h2>
            <div className="text">
            Milyonlarca iş ilanı arasında arama yapın ve size en uygun işi bulun.  Basvurmak
              <br /> için sağa kaydırmanız yeterli.
            </div>
          </div>
          <div className="download-btn">
            <a href="#">
              <img src="/images/icons/apple.png" alt="icon" />
            </a>
            <a href="#">
              <img src="/images/icons/google.png" alt="icon" />
            </a>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSection;

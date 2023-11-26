const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Recruiting?</h2>
              <div className="text">
                İş ilanlarınızı aylık milyonlarca kullanıcıya duyurun ve 15,8
                milyon
                <br /> Veritabanımızdaki CV'lere ulasin.
              </div>
              <a href="#" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title">İşe Alımlara Şimdi Başlayın</span>
              </a>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <img src="/images/resource/image-1.png" alt="resource" />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

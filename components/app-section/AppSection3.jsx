const AppSection3 = () => {
  return (
    <section className="subscribe-section-two -type-3">
      <div
        className="background-image"
        style={{ backgroundImage: "url(/images/index-13/cta/bg.png)" }}
      ></div>
      <div className="auto-container" data-aos="fade-up">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="sec-title light mb-0">
              <h2 className="text-white">Uygulamayı İndirin</h2>
              <div className="text text-white">
                Yeni Ozellikler. Yeni Gorunum. Kredi Karti Yok
                <br /> Risk Yok.
              </div>

              <div className="row buttons">
                <div className="col-auto">
                  <img src="/images/index-13/cta/1.svg" alt="image" />
                </div>
                <div className="col-auto">
                  <img src="/images/index-13/cta/2.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5">
            <div className="image">
              <img src="/images/index-13/cta/1.png" alt="image" />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default AppSection3;

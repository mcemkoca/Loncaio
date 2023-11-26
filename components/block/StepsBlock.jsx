const StepsBlock = () => {
  return (
    <section className="steps-section layout-pt-60 layout-pb-60">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <img src="/images/index-11/text/image-1.png" alt="about" />
              </figure>
            </div>
          </div>
          {/* End .image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title -type-2">
                <h2>
                3 kolay yöntemle iş bulun
                  <br /> adımlar
                </h2>
                <div className="text">
                </div>
                <ul className="steps-list">
                  <li>
                    <span className="count">01</span> Şuraya bir hesap açın
                    başla
                  </li>
                  <li>
                    <span className="count">02</span> Binlerce ürünü keşfedin
                    ozgecmisler
                  </li>
                  <li>
                    <span className="count">03</span> En uygun olanı bulun
                    aday
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
        </div>
      </div>
    </section>
  );
};

export default StepsBlock;

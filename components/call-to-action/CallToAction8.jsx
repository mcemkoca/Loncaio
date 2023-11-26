import Subscribe from "./subcribe-box/Subscribe";

const CallToAction8 = () => {
  return (
    <section className="subscribe-section -type-2">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-in">
          <div className="sec-title">
            <h2>Bültenimize Abone Olun</h2>
            <div className="text">
            İş ilanlarınızı aylık milyonlarca kullanıcıya duyurun ve
              <br /> 15,8 milyon CV'yi arayın.
            </div>
          </div>
          {/* End .sec-title */}

          <div className="form-column">
            <div className="subscribe-form">
              <Subscribe btnStyle="btn-style-seven" />
            </div>
          </div>
          {/* End .form-column */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction8;

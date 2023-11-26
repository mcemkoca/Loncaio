const LoginRegBanner = () => {
  return (
    <section
      className="cta -type-2"
      style={{ backgroundImage: "url(/images/index-16/cta-2/bg.png)" }}
    >
      <div className="auto-container">
        <div className="row grid-base justify-content-between">
          <div className="col-lg-5 col-md-6">
            <div className="cta-item">
              <div className="icon-wrap">
                <div className="icon icon-case"></div>
              </div>
              {/* End icon-wrap */}

              <div className="content">
                <div className="title">I'm Employer</div>
                <div className="text">
                  Siz de bizimle çalışarak kariyerinizi şekillendirmek ve 
                  başarıya ulaşmak istiyorsanız, bize katılın ve potansiyelinizi keşfedin!"
                </div>
              </div>
              {/* End content */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5 col-md-6">
            <div className="cta-item -blue">
              <div className="content">
                <div className="title">I'm Candidates</div>
                <div className="text">
                Siz de bizimle çalışarak kariyerinizi ilerletmek ve potansiyelinizi 
                en üst seviyeye çıkarmak istiyorsanız, bize katılın ve fark yaratın!
                </div>
              </div>
              {/* End .content */}

              <div className="icon-wrap">
                <div className="icon icon-contact"></div>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default LoginRegBanner;

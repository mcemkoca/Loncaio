import Link from "next/link";

const CallToAction11 = () => {
  return (
    <>
      <section className="subscribe-section-two -type-5">
        <div className="auto-container" data-aos="fade-up">
          <div
            className="background-image"
            style={{ backgroundImage: "url(/images/index-17/cta/bg.png)" }}
          ></div>
          {/* End bg-image */}

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 offset-lg-1">
              <div className="sec-title pb-16">
                <h2 className="">İş İlanı Vermek İstiyorum</h2>
                <div className="text">
                  İşlerinizi aylık milyonlarca kişiye duyurun
                  <br /> kullanıcılar ve 15,8 milyon CV'de arama yapın
                  <br /> 
                </div>

                <div className="mt-20">
                  <Link
                    href="/employers-dashboard/post-jobs"
                    className="theme-btn"
                  >
                    İş İlanı Gönder
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End auto-container */}
      </section>
    </>
  );
};

export default CallToAction11;

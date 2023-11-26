import Link from "next/link";

const CallToAction9 = () => {
  return (
    <section
      className="call-to-action-two overlay-black-60"
      style={{ backgroundImage: "url(/images/index-15/cta/bg.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="row grid-base justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-title light text-center">
              <h2>İşe Alımı Rekabet Avantajınız Haline Getirin</h2>
              <div className="text">
                 Loncaio, tüm işlerinizi tamamen optimize etmek için bir yol sunar
                işe alım süreci. Daha iyi adaylar bulun, daha odaklı çalışın
                mülakatlar ve veriye dayalı işe alım kararları vermek.
              </div>
            </div>
            {/* End sec-title */}

            <div className="btn-box">
              <Link href="/register" className="theme-btn btn-white-type-2">
                BAŞLAYIN
              </Link>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction9;

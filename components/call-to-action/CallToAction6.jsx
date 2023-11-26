import Link from "next/link";

const CallToAction6 = () => {
  return (
    <section className="call-to-action-three style-two">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title light">
            <h2>Bir sorun mu var?</h2>
            <div className="text">
              Yardım etmek için buradayız. SSS'lerimize göz atın, bize bir e-posta gönderin veya arayın
              1'de biz <br />
              <a href="#">(123) 777-7777.</a>
            </div>
          </div>
          {/* End sec-title */}

          <div className="btn-box">
            <Link href="/faq" className="theme-btn btn-style-three">
            Başlayın
            </Link>
          </div>
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction6;

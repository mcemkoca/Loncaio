import Link from "next/link";

const CallToAction7 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/8.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Online Özgeçmişinizle Fark Yaratın!</h2>
          <div className="text">
          Jobsons özgeçmiş asistanı ile dakikalar içinde özgeçmişiniz hazır!
          </div>
        </div>
        {/* End sec-title */}

        <div className="btn-box">
          <Link href="/register" className="theme-btn btn-style-three">
           Bir Hesap Oluşturun
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction7;

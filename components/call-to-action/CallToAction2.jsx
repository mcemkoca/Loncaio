import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Hayalinizdeki İşler Sizi Bekliyor</h2>
          <div className="text">
          1 milyondan fazla etkileşim, 50.000 başarı hikayesi Siz de şimdi yapın.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list/job-list-v6" className="theme-btn btn-style-three">
           İş Arama
          </Link>
          <Link href="/register" className="theme-btn btn-style-two">
          Şimdi İş Başvurusu Yap
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;

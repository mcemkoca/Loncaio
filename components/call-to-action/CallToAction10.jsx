import Link from "next/link";

const CallToAction10 = () => {
  return (
    <section
      className="call-to-action-two -type-4"
      style={{ backgroundImage: "url(/images/index-16/cta/bg.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Hayalinizdeki İşler Sizi Bekliyor</h2>
          <div className="text">
          1 milyondan fazla etkileşim, 50.000 başarı hikayesi Şimdi sizinkini yapın.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list/job-list-v6" className="theme-btn btn-one">
          İş Arama
          </Link>
          <Link href="/register" className="theme-btn btn-two">
          Şimdi İş Başvurusu Yap
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction10;

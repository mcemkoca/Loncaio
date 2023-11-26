import Link from "next/link";

const CallToAction3 = () => {
  return (
    <section className="call-to-action-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title">
            <h2>İşverenlerin sizi bulmasına izin verin</h2>
            <div className="text">
            İş ilanlarınızı aylık milyonlarca kullanıcıya duyurun ve veritabanımızdaki 15,8
              milyon CV'yi arayın.
            </div>
          </div>
          {/* End sec title */}

          <div className="btn-box">
            <Link
              href="/job-list/job-list-v7"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">İş Arama</span>
            </Link>
          </div>
          {/* End btn-box */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction3;

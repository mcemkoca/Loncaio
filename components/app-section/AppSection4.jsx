const AppSection4 = () => {
  const featureList = [
    {
      id: 1,
      icon: "icon-case",
      title: "İş Arama",
      text: `Milyonlarca iş ilanı arasında arama yapın ve size uygun olanı bulun. Başvurmak için sağa kaydırmanız yeterli.`,
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Search on the go",
      text: `Milyonlarca iş ilanı arasında arama yapın ve size uygun olanı bulun. Başvurmak için sağa kaydırmanız yeterli.`,
    },
    {
      id: 3,
      icon: "icon-doc",
      title: "Instant Notifications",
      text: `Milyonlarca iş ilanı arasında arama yapın ve size uygun olanı bulun. Başvurmak için sağa kaydırmanız yeterli.`,
    },
  ];

  return (
    <section className="layout-pt-120 layout-pb-120">
      <div className="auto-container">
        <div className="row justify-content-between align-items-center">
          {/* <!-- Image Column --> */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 order-1">
            <figure className="image" data-aos="fade-right">
              <img src="/images/index-15/app/1.png" alt="hero" />
            </figure>
          </div>

          <div className="content-column col-lg-5 col-md-12 col-sm-12 order-2">
            <div
              className="text-left inner-column pt-0 pb-0"
              data-aos="fade-left"
            >
              <div className="sec-title">
                <span className="sub-title text-green">İNDİRİN VE KEYFİNİ ÇIKARIN</span>
                <h2>Loncaio İş Arama Uygulamasını edinin</h2>
              </div>

              <div className="content-icons">
                {featureList.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="icon-wrap">
                      <span className={`icon-green icon ${item.icon}`}></span>
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="download-btn content-icons-btn">
                <a href="#">
                  <img src="/images/icons/apple.png" alt="icons" />
                </a>
                <a href="#">
                  <img src="/images/icons/google.png" alt="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection4;

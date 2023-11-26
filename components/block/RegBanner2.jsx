import Link from "next/link";

const RegBanner2 = () => {
  const regBannerContent = [
    {
      id: 1,
      name: "İşverenler",
      text: ` Siz de bizimle çalışarak kariyerinizi şekillendirmek ve başarıya
      ulaşmak istiyorsanız, bize katılın ve potansiyelinizi keşfedin!`,
      avatar: "/images/resource/employ.png",
      bannerClass: "banner-style-one",
    },
    {
      id: 2,
      name: "Aday",
      text: ` Siz de bizimle çalışarak kariyerinizi ilerletmek ve potansiyelinizi 
      en üst seviyeye çıkarmak istiyorsanız, bize katılın ve fark yaratın.`,
      avatar: "/images/resource/candidate.png",
      bannerClass: "banner-style-two",
    },
  ];
  return (
    <>
      {regBannerContent.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href="/register" className="theme-btn btn-style-five">
                Hesap Açın
              </Link>
            </div>
            <figure className="image">
              <img src={item.avatar} alt="resource" />
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner2;

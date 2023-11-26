import Link from "next/link";
import About from "../about/About";
import AppSection from "../app-section/AppSection";
import Blog from "../blog/Blog";
import CallToAction from "../call-to-action/CallToAction";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import Funfact from "../fun-fact-counter/Funfact";
import DefaulHeader2 from "../header/DefaulHeader2";
import MobileMenu from "../header/MobileMenu";
import Hero1 from "../hero/hero-1";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial from "../testimonial/Testimonial";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* Oturum Açma Popup Modelini Sonlandırın */}

      <DefaulHeader2 />
      {/* Upload cv btn ile Başlığı Sonlandır */}

      <MobileMenu />
      {/* Mobil Menüyü Sonlandır */}

      <Hero1 />
      {/* Hero Section Bolumunu Sonlandirin */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popüler İş Kategorileri</h2>
            <div className="text">2023 Yeni Paylasilan işler - 293 bugün eklendi.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Kategori Bloğu --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* İş Kategorisi Bölümünü Sonlandır */}

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Öne Çıkan İşler</h2>
            <div className="text">
            Değerinizi bilin ve hayatınıza değer katacak işi bulun
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              href="/job-list/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Daha Fazla Liste Yükle</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Öne Çıkan İş Bölümünü Sonlandırın */}

      <section className="testimonial-section">
        <div className="container-fluid">
          {/* <!-- Bölüm Başlığı --> */}
          <div className="sec-title text-center">
            <h2>Müşterilerimizden Görüşler</h2>
            <div className="text">
              Pratik Hizli Kolay
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* <!-- Referans Karuseli --> */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- Son Müşteriler Bölümü--> */}

      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

          {/* <!-- Eğlenceli Bilgiler Bölümü --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Eğlenceli Bilgiler Bölümü --> */}
        </div>
      </section>
      {/* <!-- Hakkında Bölümünün Sonu --> */}

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Güncel Haber Makaleleri</h2>
            <div className="text">
            Her gün yayınlanan işle ilgili taze haber içeriği.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- Haberler Bölümünü Sonlandırın --> */}

      <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section>
      {/* <!-- Uygulama Bölümünü Sonlandır --> */}

      <CallToAction />
      {/* <!-- Eylem Çağrısını Sonlandırın --> */}

      <FooterDefault />
      {/* <!-- Ana Altbilgiyi Sonlandır --> */}
    </>
  );
};

export default index;

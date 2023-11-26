import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                  Burada <span className="colored">93,178</span> Ilanlar
                  var
                  <br /> Senin icin!
                </h3>
                <div className="text">
                İş, İstihdam ve Kariyer Fırsatları Bulun
                </div>
              </div>

              {/* <!-- İş Arama Formu --> */}
              <div className="job-search-form">
                <SearchForm />
              </div>
              {/* <!-- İş Arama Formu --> */}

              {/* <!-- Popüler Arama --> */}
              <PopularSearch />
              {/* <!-- Popüler Aramayı Sonlandır --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

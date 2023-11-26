import Categories from "../components/Categories";
import DestinationRangeSlider from "../components/DestinationRangeSlider";
import CandidatesGender from "../components/CandidatesGender";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";
import DatePosted from "../components/DatePosted";
import Experience from "../components/Experience";
import Qualification from "../components/Qualification";

const FilterSidebar = () => {
    return (
        <div className="inner-column pd-right">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                <div className="filter-block">
                    <h4>Anahtar Kelimelerle Arama</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Konum</h4>
                    <div className="form-group">
                        <LocationBox />
                    </div>

                    <p>Seçilen hedefin etrafındaki yarıçap</p>
                    <DestinationRangeSlider />
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Kategori</h4>
                    <div className="form-group">
                        <Categories />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Aday Cinsiyeti</h4>
                    <div className="form-group">
                        <CandidatesGender />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Gönderildiği Tarih</h4>
                    <DatePosted />
                </div>
                {/* <!-- Filter Block --> */}

                <div className="checkbox-outer">
                    <h4>Tecrube</h4>
                    <Experience />
                </div>
                {/* <!-- Filter Block --> */}

                <div className=" checkbox-outer">
                    <h4>Yeterlilik</h4>
                    <Qualification />
                </div>
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;

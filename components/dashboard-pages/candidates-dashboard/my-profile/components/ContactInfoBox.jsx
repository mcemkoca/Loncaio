import Map from "../../../Map";

const ContactInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select" required>
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select" required>
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Tam Adres</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Haritada Bul</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Enlem</label>
          <input type="text" name="name" placeholder="Melbourne" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Boylam</label>
          <input type="text" name="name" placeholder="Melbourne" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Konum Ara</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>
        {/* End MapBox */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Kaydet
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;

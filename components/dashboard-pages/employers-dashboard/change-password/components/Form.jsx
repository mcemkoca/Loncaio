const Form = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Eski Şifre </label>
          <input type="Sifre" name="Ad" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Yeni Şifre</label>
          <input type="Sifre" name="Ad" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Şifreyi Onayla</label>
          <input type="password" name="AD" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="Gonder" className="theme-btn btn-style-one">
          Güncellendi.
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

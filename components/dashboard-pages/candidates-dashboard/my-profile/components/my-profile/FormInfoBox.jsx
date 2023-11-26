import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Ad Soyad</label>
          <input type="text" name="Ad" placeholder="Jerome" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>İş Ünvanı</label>
          <input type="text" name="name" placeholder="UI Designer" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Telefon</label>
          <input
            type="text"
            name="Ad"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email adres</label>
          <input
            type="text"
            name="name"
            placeholder="creativelayers"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="name"
            placeholder="www.jerome.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Güncel Maaş(€)</label>
          <select className="chosen-single form-select" required>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Beklenen Maaş(€)</label>
          <select className="chosen-single form-select" required>
            <option>120-350 K</option>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Deneyim</label>
          <input type="text" name="name" placeholder="5-10 Yil" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Yas</label>
          <select className="chosen-single form-select" required>
            <option>23 - 27 Years</option>
            <option>24 - 28 Years</option>
            <option>25 - 29 Years</option>
            <option>26 - 30 Years</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Eğitim Seviyeleri</label>
          <input type="text" name="Ad" placeholder="Sertifika" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Diller</label>
          <input
            type="text"
            name="name"
            placeholder="English, Turkish"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Kategoriler </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Arama ve Listelemeye İzin Ver</label>
          <select className="chosen-single form-select" required>
            <option>Evet</option>
            <option>Hayir</option>
          </select>
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Açıklama</label>
          <textarea placeholder="Birkaç yılını Wall Street'te koyunlar üzerinde çalışarak geçirdi. Wall Street'te Yugo'lara yatırım yaparak orta derecede başarı elde etti. Çiftçiler için Pogo çubukları alıp satan küçük bir ekibi yönetti. West Palm Beach, FL'de birkaç yıl meyan kökü lisanslaması yaptı. Satış sonrası pazarında banjoları çalıştırmak için birkaç yeni yöntem geliştirdi. Bu pozisyonda Yazılım Mühendisi, mevcut yazılım çözümlerimizi sürekli olarak geliştirmek ve mevcut arka ofis operasyonlarını ve yönetim zorluklarını ortadan kaldırmak için yeni çözümler oluşturmak için Evention'ın Geliştirme ekibiyle işbirliği yapar."></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Kaydet
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;

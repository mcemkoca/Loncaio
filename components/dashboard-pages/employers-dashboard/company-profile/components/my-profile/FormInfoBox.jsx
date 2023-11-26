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
        <form className="default-form">
            <div className="row">
                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Firma Ismi (Opsiyonel)</label>
                    <input
                        type="text"
                        name="Ad"
                        placeholder="Invisionn"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>E-posta adresi</label>
                    <input
                        type="text"
                        name="Ad"
                        placeholder="Deterium"
                        required
                    />
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
                    <label>Website</label>
                    <input
                        type="text"
                        name="AD"
                        placeholder="Deterium"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Kurulus Tarihi</label>
                    <input
                        type="text"
                        name="AD"
                        placeholder="06.04.2020"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Ekip Buyuklugu</label>
                    <select className="chosen-single form-select" required>
                        <option>50 - 100</option>
                        <option>100 - 150</option>
                        <option>200 - 250</option>
                        <option>300 - 350</option>
                        <option>500 - 1000</option>
                    </select>
                </div>

                {/* <!-- Search Select --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Çoklu Seçim kutuları </label>
                    <Select
                        defaultValue={[catOptions[2]]}
                        isMulti
                        name="Renkler"
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Allow In Search & Listing</label>
                    <select className="chosen-single form-select">
                        <option>Evet</option>
                        <option>Hayir</option>
                    </select>
                </div>

                {/* <!-- About Company --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>Şirket Hakkında</label>
                    <textarea placeholder="Merhaba! Biz ABC Web Tasarım Firması olarak, modern ve kullanıcı dostu web siteleri oluşturmak için buradayız. Uzman ekibimiz, son teknolojiyi kullanarak sizin için özelleştirilmiş çözümler sunuyor. Siz de profesyonel bir web sitesine sahip olmak istiyorsanız, bize ulaşın ve farkı yaşayın!"></textarea>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button className="theme-btn btn-style-one">Kaydet</button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;

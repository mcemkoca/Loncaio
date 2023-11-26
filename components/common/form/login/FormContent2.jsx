import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent2 = () => {
  return (
    <div className="form-inner">
      <h3>Loncaio'ya Giriş Yapın</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Kullanıcı Adı</label>
          <input type="text" name="Kullanıcı Adı" placeholder="Kullanıcı Adı" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Sifre</label>
          <input
            type="password"
            name="Sifre"
            placeholder="Sifre"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
             Sifrenizi Unuttunuz mu ?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="Gonder"
            name="Oturum Ac"
          >
            Oturum Ac
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
         Hesabınız yok mu? <Link href="/register">Kaydolun</Link>
        </div>

        <div className="divider">
          <span>Yada</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent2;

const FooterApps = () => {
  return (
    <div className="widget-content">
      <div className="download-btns">
        <div className="text">Tıklayın ve saniyeler içinde başlayın</div>
        <a href="#" className="app-btn">
          <div className="app-icon">
            <i className="fab fa-apple"></i>
          </div>
          <div className="inner">
            <div className="sub">İndirmek için</div>
            <div className="name-app">Apple Store</div>
          </div>
        </a>
        <a href="#" className="app-btn">
          <div className="app-icon">
            <i className="fab fa-apple"></i>
          </div>
          <div className="inner">
            <div className="sub">Katılın</div>
            <div className="name-app">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterApps;

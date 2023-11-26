const Notification = () => {
  return (
    <ul className="notification-list">
      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Henry Wilson</strong> bir iş için başvurdu
        <span className="colored"> Temizlik</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Raul Costa</strong> bir iş için başvurdu
        <span className="colored"> Uretim Bandi, Takim Lideri</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Jack Milk</strong> bir iş için başvurdu
        <span className="colored"> Teknisyen</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong>
        bir iş için başvurdu
        <span className="colored"> Software Engineer</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Wade Warren</strong> bir iş için başvurdu
        <span className="colored"> Web Developer</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong>
        bir iş için başvurdu
        <span className="colored"> Software Engineer</span>
      </li>
      {/* End li */}
    </ul>
  );
};

export default Notification;

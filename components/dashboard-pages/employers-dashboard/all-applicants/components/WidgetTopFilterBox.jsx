const WidgetTopFilterBox = () => {
  return (
    <div className="chosen-outer">
      <select className="chosen-single form-select chosen-container">
        <option>İş Seçiniz</option>
        <option>Son 12 Ay</option>
        <option>Son 16 Ay</option>
        <option>Son 24 Ay</option>
        <option>Son 5 yil</option>
      </select>
      {/* <!--Tabs Box--> */}

      <select className="chosen-single form-select chosen-container">
        <option>Tüm Durumlar</option>
        <option>Son 12 Ay</option>
        <option>Son 16 Ay</option>
        <option>Son 24 Ay</option>
        <option>Son 5 yil</option>
      </select>
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default WidgetTopFilterBox;

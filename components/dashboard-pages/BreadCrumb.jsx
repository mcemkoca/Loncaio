const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Tekrar atlamaya hazır mısınız?</div>
    </div>
  );
};

export default BreadCrumb;

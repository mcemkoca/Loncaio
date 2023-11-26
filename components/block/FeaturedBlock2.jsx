const FeaturedBlock2 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-case",
      text: "Başlamak için bir hesap açın",
      featureLine: "",
    },
    {
      id: 2,
      icon: "icon-contact",
      text: "Binlerce özgeçmişi keşfedin",
      featureLine: "",
    },
    {
      id: 3,
      icon: "icon-doc",
      text: "En uygun adayı bulun",
      featureLine: "last",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6" key={item.id}>
          <div className={`features -type-1 ${item.featureLine}`}>
            <div className="icon-wrap">
              <div className={`icon ${item.icon}`}></div>
            </div>
            <div className="title">{item.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedBlock2;

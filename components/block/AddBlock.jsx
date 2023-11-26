import Link from "next/link";

const AddBlock = () => {
  const blockContent = [
    {
      id: 1,
      bgImageName: "ads-bg-1",
      title: (
        <>
          {" "}
          <span>Ise Alim </span>Simdi
        </>
      ),
    },
    {
      id: 2,
      bgImageName: "ads-bg-2",
      title: (
        <>
          {" "}
          <span>Uyelik </span>Firsatlari
        </>
      ),
    },
    {
      id: 3,
      bgImageName: "ads-bg-3",
      title: (
        <>
          {" "}
          <span>Is Ilani </span>Yayinlayin
        </>
      ),
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="advrtise-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div
            className="inner-box"
            style={{
              backgroundImage: `url(/images/resource/${item.bgImageName}.png)`,
            }}
          >
            <h4>{item.title}</h4>
            <Link href="/register" className="theme-btn btn-style-one">
            Tümünü Görüntüle
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBlock;

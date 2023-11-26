import Link from "next/link";
import candidatesData from "../../../../../data/candidates";

const Applicants = () => {
  return (
    <>
      {candidatesData.slice(17, 23).map((candidate) => (
        <div
          className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
          key={candidate.id}
        >
          <div className="inner-box">
            <div className="content">
              <figure className="image">
                <img src={candidate.avatar} alt="Adaylar" />
              </figure>
              <h4 className="name">
                <Link href={`/candidates-single-v1/€{candidate.id}`}>
                  {candidate.name}
                </Link>
              </h4>

              <ul className="candidate-info">
                <li className="designation">{candidate.designation}</li>
                <li>
                  <span className="icon flaticon-map-locator"></span>{" "}
                  {candidate.location}
                </li>
                <li>
                  <span className="icon flaticon-money"></span> €
                  {candidate.hourlyRate} / saat
                </li>
              </ul>
              {/* End candidate-info */}

              <ul className="post-tags">
                {candidate.tags.map((val, i) => (
                  <li key={i}>
                    <a href="#">{val}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End content */}

            <div className="option-box">
              <ul className="option-list">
                <li>
                  <button data-text="Uygulamayı Görüntüle">
                    <span className="la la-eye"></span>
                  </button>
                </li>
                <li>
                  <button data-text="Başvuruyu Onaylayın">
                    <span className="la la-check"></span>
                  </button>
                </li>
                <li>
                  <button data-text="Başvuruyu Reddet">
                    <span className="la la-times-circle"></span>
                  </button>
                </li>
                <li>
                  <button data-text="Uygulamayı Sil">
                    <span className="la la-trash"></span>
                  </button>
                </li>
              </ul>
            </div>
            {/* End admin options box */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Applicants;

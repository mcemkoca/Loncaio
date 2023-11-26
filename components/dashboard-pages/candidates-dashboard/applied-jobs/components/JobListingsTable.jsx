import Link from "next/link.js";
import jobs from "../../../../../data/job-featured.js";

const JobListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Son 6 Ay</option>
            <option>Son 12 Ay</option>
            <option>Son 16 Ay</option>
            <option>Son 24 Ay</option>
            <option>Son 5 Yil</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Unvani</th>
                  <th>Basvuru Tarihi</th>
                  <th>Durum</th>
                  <th>Aksiyon</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img src={item.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Bolum
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                Izmir, Tr
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Ara 5, 2023</td>
                    <td className="status">Aktif</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Uygulamayı Görüntüle">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Uygulamayi Sil">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;

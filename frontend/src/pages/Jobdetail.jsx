import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import JobCard from "../components/JobCard";
import moment from "moment";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import "../styles/jobdetail.css";

const Jobdetail = () => {
  const { id } = useParams();

  const [selected, setSelected] = useState("0");
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`http://localhost:4000/api/jobs/get-job-detail/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Job not found");
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setJob(data.data);
          setSimilarJobs(data.similarJobs || []);
        } else {
          throw new Error(data.message || "Failed to load job");
        }
        setLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement des détails de l'offre...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (!job) return <p>Aucun poste trouvé</p>;

  return (
    <div className="container">
      <div className="flex">
        {/* LEFT SIDE */}
        <div className="left-side">
          <div className="job-header">
            <div className="job-header-left">
              {/* Si pas d'image */}
              {job?.company?.profileUrl && (
                <img
                  src={job.company.profileUrl}
                  alt={job.companyName || "Company logo"}
                  className="job-company-logo"
                />
              )}

              <div className="job-info">
                <p className="job-title">{job.jobTitle}</p>
                <span className="job-location">{job.location}</span>
                <span className="job-company-name">{job.companyName}</span>
                <span className="job-posted">{moment(job.createdAt).fromNow()}</span>
              </div>
            </div>
            <div>
              <AiOutlineSafetyCertificate className="job-cert-icon" />
            </div>
          </div>

          <div className="job-stats">
            <div className="stat-box stat-salary">
              <span className="stat-label">Salaire</span>
              <p className="stat-value">$ {job.salary ?? "-"}</p>
            </div>

            <div className="stat-box stat-job-type">
              <span className="stat-label">Type de travail</span>
              <p className="stat-value">{job.jobType ?? "-"}</p>
            </div>

            <div className="stat-box stat-applicants">
              <span className="stat-label">No. de postulants</span>
              <p className="stat-value">{job.application?.length ?? 0}K</p>
            </div>

            <div className="stat-box stat-vacancies">
              <span className="stat-label">No. de postes à pourvoir</span>
              <p className="stat-value">{job.vacancies}</p>
            </div>
          </div>

          <div className="toggle-buttons">
            <button
              onClick={() => setSelected("0")}
              className={`toggle-btn ${selected === "0" ? "selected" : ""}`}
            >
              Description du poste
            </button>

            <button
              onClick={() => setSelected("1")}
              className={`toggle-btn ${selected === "1" ? "selected" : ""}`}
            >
              Entreprise
            </button>
          </div>

          <div className="job-detail-section">
            {selected === "0" ? (
              <>
                <p>Description du poste</p>
                <span>
                  {job.detail?.[0]?.desc ?? "No description available."}
                </span>

                {job.detail?.[0]?.requirements && (
                  <>
                    <p style={{ marginTop: "2rem" }}>Critères</p>
                    <span>{job.detail[0].requirements}</span>
                  </>
                )}
              </>
            ) : (
              <>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p className="job-company-name">{job.companyName}</p>
                  <span>{job.location}</span>
                  <br />
                  <span style={{ fontSize: "0.875rem" }}>
                    {job.companyEmail ?? "-"}
                  </span>
                </div>

                <p>À propos de l’entreprise</p>
                <span>{job.about ?? "Aucune description de l’entreprise."}</span>
              </>
            )}
          </div>

          
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
          <p className="similar-jobs-title">Offres d’emploi similaires</p>

          <div className="similar-jobs-list">
            {similarJobs.length === 0 ? (
              <p>Aucune offre similaire trouvée.</p>
            ) : (
              similarJobs.map((jobItem) => (
                <JobCard job={jobItem} key={jobItem._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetail;

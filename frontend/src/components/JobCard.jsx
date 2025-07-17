import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";
import '../styles/jobcard.css'

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?._id}`} className="job-card-link">
      <div className="job-card">
        <div className="job-card-top">
         {/*  <img
            src={job?.company?.profileUrl}
            alt={job?.company?.name}
            className="job-card-img"
          /> */}

          <div>
            <p className="job-card-title">{job?.jobTitle}</p>
            <span className="job-card-location">
              <GoLocation />
              {job?.location}
            </span>
          </div>
        </div>

        <div>
          <p className="job-card-description">
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        <div className="job-card-bottom">
          <p className="job-card-type">{job?.jobType}</p>
          <span className="job-card-date">{moment(job?.createdAt).fromNow()}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

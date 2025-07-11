import "../styles/joblist.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomButton from "../components/CustomButton";
import JobCard from "../components/JobCard";
import ListBox from "../components/ListBox";
import ContentCard from "../components/ContentCard";
import { jobTypes, experience } from "../utils/data";
import Navbar from '../components/Navbar.jsx'

const Joblist = () => {
  const [sort, setSort] = useState("Newest");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);

  // Fetch jobs depuis le backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/jobs/find-jobs");
        setJobs(res.data.data);        
        setFilteredJobs(res.data.data);
      } catch (err) {
        console.log("Erreur fetch jobs :", err);
      }
    };
    fetchJobs();
  }, []);

  // Filtrage local (type, expérience, recherche)
  useEffect(() => {
    let tempJobs = [...jobs];
    if (searchQuery)
      tempJobs = tempJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (jobLocation)
      tempJobs = tempJobs.filter((job) =>
        job.location.toLowerCase().includes(jobLocation.toLowerCase())
      );
    if (filterJobTypes.length > 0)
      tempJobs = tempJobs.filter((job) =>
        filterJobTypes.includes(job.jobType)
      );
    if (filterExp.length > 0)
      tempJobs = tempJobs.filter((job) =>
        filterExp.includes(job.experience?.toString())
      );

    setFilteredJobs(tempJobs);
  }, [searchQuery, jobLocation, filterJobTypes, filterExp, jobs]);

  const toggleJobType = (type) => {
    setFilterJobTypes(
      filterJobTypes.includes(type)
        ? filterJobTypes.filter((t) => t !== type)
        : [...filterJobTypes, type]
    );
  };

  const toggleExperience = (val) => {
    setFilterExp(
      filterExp.includes(val)
        ? filterExp.filter((e) => e !== val)
        : [...filterExp, val]
    );
  };

  return (
    <>
    <Navbar />
    <div className="findjobs">
      <ContentCard
        title="Find Your Dream Job"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />

      <div className="findjobs-container">
        <div className="findjobs-filters">
          <h3>Filter Search</h3>
          <div className="filter-section">
            <p><BiBriefcaseAlt2 /> Job Type</p>
            {jobTypes.map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  value={type}
                  onChange={() => toggleJobType(type)}
                  checked={filterJobTypes.includes(type)}
                />
                {type}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <p><BsStars /> Experience</p>
            {experience.map((exp) => (
              <label key={exp.value}>
                <input
                  type="checkbox"
                  value={exp.value}
                  onChange={() => toggleExperience(exp.value)}
                  checked={filterExp.includes(exp.value)}
                />
                {exp.title}
              </label>
            ))}
          </div>
        </div>

        <div className="findjobs-list">
          <div className="findjobs-list-header">
            <span>Showing {filteredJobs.length} Jobs</span>
            <ListBox sort={sort} setSort={setSort} />
          </div>

          <div className="findjobs-cards">
            {filteredJobs.map((job) => (
              <JobCard job={job} key={job._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default Joblist;

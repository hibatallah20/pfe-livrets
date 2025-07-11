import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../styles/editresume.css'
import DashboardLayout from './DashboardLayout'
import { TitleInput } from './Inputs'
import { useNavigate, useParams } from 'react-router-dom'
import { BiPalette } from 'react-icons/bi'
import { Download, Trash2 } from 'react-feather'
import { toast } from 'react-toastify';
import axios from 'axios'

//resuze observer hook
const useResizeObserver = () => {
    const [size, setSize] = useState({width: 0, height: 0});
    const ref = useCallback((node) => {
        if(node) {
            const resizeObserver = new ResizeObserver((entries) => {
                 const { width, height } = entries[0].contentRect;
                 setSize({ width, height});
            })

            resizeObserver.observe(node)
        }
    }, [])
    return {...size, ref}
}

const EditResume = () => {
  const { resumeId } = useParams()
  const navigate = useNavigate()
  const resumeDownloadRef = useRef(null)
  const thumbnailRef = useRef(null)

  const [openThemeSelector, setOpenThemeSelector] = useState(false)
  const [openPreviewModal, setOpenPreviewModal] = useState(false)
  const [currentPage, setCurrentPage] = useState("profile-info")
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [completionPercentage, setCompletionPercentage] = useState(0)

  const { width: previewWidth, ref: previewContainerRef } = useResizeObserver();

  const [resumeData, setResumeData] = useState({
    title: "Professional Resume",
    thumbnailLink: "",
    profileInfo: {
      fullName: "",
      designation: "",
      summary: "",
    },
    template: {
      theme: "modern",
      colorPalette: []
    },
    contactInfo: {
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
    },
    workExperience: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        name: "",
        progress: 0,
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        github: "",
        liveDemo: "",
      },
    ],
    certifications: [
      {
        title: "",
        issuer: "",
        year: "",
      },
    ],
    languages: [
      {
        name: "",
        progress: 0,
      },
    ],
    interests: [""],
  })

  // Calculate completion percentage
  const calculateCompletion = () => {
    let completedFields = 0;
    let totalFields = 0;

    // Profile Info
    totalFields += 3;
    if (resumeData.profileInfo.fullName) completedFields++;
    if (resumeData.profileInfo.designation) completedFields++;
    if (resumeData.profileInfo.summary) completedFields++;

    // Contact Info
    totalFields += 2;
    if (resumeData.contactInfo.email) completedFields++;
    if (resumeData.contactInfo.phone) completedFields++;

    // Work Experience
    resumeData.workExperience.forEach(exp => {
      totalFields += 5;
      if (exp.company) completedFields++;
      if (exp.role) completedFields++;
      if (exp.startDate) completedFields++;
      if (exp.endDate) completedFields++;
      if (exp.description) completedFields++;
    });

    // Education
    resumeData.education.forEach(edu => {
      totalFields += 4;
      if (edu.degree) completedFields++;
      if (edu.institution) completedFields++;
      if (edu.startDate) completedFields++;
      if (edu.endDate) completedFields++;
    });

    // Skills
    resumeData.skills.forEach(skill => {
      totalFields += 2;
      if (skill.name) completedFields++;
      if (skill.progress > 0) completedFields++;
    });

    // Projects
    resumeData.projects.forEach(project => {
      totalFields += 4;
      if (project.title) completedFields++;
      if (project.description) completedFields++;
      if (project.github) completedFields++;
      if (project.liveDemo) completedFields++;
    });

    // Certifications
    resumeData.certifications.forEach(cert => {
      totalFields += 3;
      if (cert.title) completedFields++;
      if (cert.issuer) completedFields++;
      if (cert.year) completedFields++;
    });

    // Languages
    resumeData.languages.forEach(lang => {
      totalFields += 2;
      if (lang.name) completedFields++;
      if (lang.progress > 0) completedFields++;
    });

    // Interests
    totalFields += resumeData.interests.length;
    completedFields += resumeData.interests.filter(i => i.trim() !== "").length;

    const percentage = Math.round((completedFields / totalFields) * 100);
    setCompletionPercentage(percentage);
    return percentage;
  };

  useEffect(() => {
    calculateCompletion();
  }, [resumeData]);

  //handle delete resume function
  const handleDeleteResume = async () => {
    try {
      setIsLoading(true)
      await axios.delete(`http://localhost:4000/api/resume/${resumeId}`, {
      withCredentials: true});
      toast.success("Resume deleted successfully")
      navigate("/dashboard")
    } catch (error) {
      console.error("Error deleting resume:", error)
      toast.error("Failed to delete resume")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
        <div className="editmain">
            <div className="editheader">
              <TitleInput title={resumeData.title}
              setTitle={(value) => setResumeData((prev) => ({
                ...prev,
                title: value,
              }))
            }
            />
            <div className="FlexContainer">
                <button onClick={() => setOpenThemeSelector(true)} className="buttonTheme">
                    <BiPalette size={16} />
                    <span>Theme</span>
            </button>

            <button onClick={handleDeleteResume } className="buttonDelete" disabled={isLoading}>
                <Trash2 size={16} />
                <span>Delete</span>

            </button>

            <button onClick={() => setOpenPreviewModal(true)} className="buttonDownload">
              <Download size={16} />
              <span>Preview</span>
            </button>
            </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default EditResume
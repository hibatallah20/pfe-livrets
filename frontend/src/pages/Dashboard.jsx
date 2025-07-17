import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout';
import '../styles/Dashboard.css'
import { useNavigate } from 'react-router-dom';
import { FiFile } from "react-icons/fi";
import axios from 'axios';
import ResumeCard from '../components/resumeCard';
import { toast } from 'react-toastify';
import moment from 'moment'
import Modal from '../components/Modal.jsx'
import CreateResumeForm from '../components/CreateResumeForm.jsx';
import { FiTrash2 } from "react-icons/fi";
import { X } from 'react-feather'

const Dashboard = () => {
    const navigate = useNavigate();
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [allResumes, setAllResumes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [resumeToDelete, setResumeToDelete] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    
  // Calculate completion percentage for a resume
  const calculateCompletion = (resume) => {
    let completedFields = 0;
    let totalFields = 0;

    // Profile Info
    totalFields += 3;
    if (resume.profileInfo?.fullName) completedFields++;
    if (resume.profileInfo?.designation) completedFields++;
    if (resume.profileInfo?.summary) completedFields++;

    // Contact Info
    totalFields += 2;
    if (resume.contactInfo?.email) completedFields++;
    if (resume.contactInfo?.phone) completedFields++;

    // Work Experience
    resume.workExperience?.forEach(exp => {
      totalFields += 5;
      if (exp.company) completedFields++;
      if (exp.role) completedFields++;
      if (exp.startDate) completedFields++;
      if (exp.endDate) completedFields++;
      if (exp.description) completedFields++;
    });

    // Education
    resume.education?.forEach(edu => {
      totalFields += 4;
      if (edu.degree) completedFields++;
      if (edu.institution) completedFields++;
      if (edu.startDate) completedFields++;
      if (edu.endDate) completedFields++;
    });

    // Skills
    resume.skills?.forEach(skill => {
      totalFields += 2;
      if (skill.name) completedFields++;
      if (skill.progress > 0) completedFields++;
    });

    // Projects
    resume.projects?.forEach(project => {
      totalFields += 4;
      if (project.title) completedFields++;
      if (project.description) completedFields++;
      if (project.github) completedFields++;
      if (project.liveDemo) completedFields++;
    });

    // Certifications
    resume.certifications?.forEach(cert => {
      totalFields += 3;
      if (cert.title) completedFields++;
      if (cert.issuer) completedFields++;
      if (cert.year) completedFields++;
    });

    // Languages
    resume.languages?.forEach(lang => {
      totalFields += 2;
      if (lang.name) completedFields++;
      if (lang.progress > 0) completedFields++;
    });

    // Interests
    totalFields += (resume.interests?.length || 0);
    completedFields += (resume.interests?.filter(i => i?.trim() !== "")?.length || 0);

    return Math.round((completedFields / totalFields) * 100);
  };
  // show if completed will do ++

  const fetchALLResumes = async () => {
    try {
        setLoading(true)
        const response = await axios.get('http://localhost:4000/api/resume', { 
        withCredentials: true });
        // add completion percentage to each resume
        const resumeWithCompletion = response.data.map(resume => ({
            ...resume,
            completion: calculateCompletion(resume)
        }))

        setAllResumes(resumeWithCompletion)
    } catch (error) {
        console.error('Error fetching resumes:', error)
    }
    finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchALLResumes();
  }, []);

  const handleDeleteResume = async () => {
    if (!resumeToDelete) return;

    try {
         await axios.delete(`http://localhost:4000/api/resume/${resumeToDelete}`, {
      withCredentials: true});
      toast.success("Resume deleted successfully!");
      fetchALLResumes()
    }catch (error) {
        console.error('Error deleting resume:', error)
        toast.error('failed to delete resume')
    } finally {
        setResumeToDelete(null)
        setShowDeleteConfirm(false)
    }
  }

  const handleDeleteClick = (id) => {
    setResumeToDelete(id);
    setShowDeleteConfirm(true);
  }


  return (
    <DashboardLayout>
        <div className="dashboardcontainer">
            <div className="headersWrapper">
                <div>
                    <h1 className="headerTitle">Mon CV</h1>
                    <p className="headerSubtitle">
                        {allResumes.length > 0 ? `Vous avez ${allResumes.length} CV${allResumes.length !== 1 ? 's' : ''}`
                        : 'Start building your professional resume'}
                    </p>
                </div>

                <div className="buttongap">
                    <button className="createButton" onClick={() => setOpenCreateModal(true)}>
                       
                            <span className="createButtonContent">
                                Créer maintenant
                                <FiFile size={18}/>
                            </span>
                    </button>
                </div>
            </div>

            {/* loading state */}
            {loading && (
                <div className="spinnerWrapper">
                    <div className="spinner"></div>
                </div>
            )}
            {/* Empty state */}
            {!loading && allResumes.length === 0 && (
                <div className="emptyStateWrapper">
                    <div className="emptyIconWrapper">
                        <FiFile size={32} color="#7c3aed"/>
                    </div>
                    <h3 className="emptyTitle">Pas encore de CV disponible</h3>
                    <p className="emptyText">
                        Vous n’avez encore créé aucun CV. Commencez dès maintenant à construire votre CV professionnel pour décrocher l’emploi de vos rêves.
                    </p>
                    <button className="createButton" onClick={() => 
                      setOpenCreateModal(true)}>
                        <span className="createButtonContent">
                            Créez votre premier CV
                            <FiFile size={20} />
                        </span>
                    </button>
                </div>
            )}
            {/* grid view */}
            {!loading && allResumes.length > 0 && (
                <div className="grid">
                    <div className="newResumeCard" onClick={() => setOpenCreateModal(true)}>
                        <div className="newResumeIcon">
                             <FiFile size={32} />
                        </div>
                        <h3 className="newResumeTitle">Créer un nouveau CV</h3>
                        <p className="newResumeText">Commencez à construire votre carrière</p>
                    </div>
                    {allResumes.map((resume) => (
                        <ResumeCard key={resume._id} imgUrl={resume.thumbnailLink}
                        title={resume.title} createdAt={resume.createdAt} updatedAt={resume.updatedAt}
                        onSelect={() => navigate(`/resume/${resume._id}`)}
                        onDelete={() => handleDeleteClick(resume._id)}
                        completion={resume.completion || 0}
                        isPremium = {resume.isPremium}
                        isNew = {moment().diff(moment(resume.createdAt), 'days') < 7}
                        />
                    ))}
                </div>
            )}
        </div>
        {/* create modal */}
             <Modal isOpen={openCreateModal} onClose={()=> setOpenCreateModal(false)} hideHeader >
                <div className="modalHeader">
                    <h3 className="modalTitle">
                        Créer de nouveaux CV
                    </h3>
                    <CreateResumeForm onSuccess={() => {
                        setOpenCreateModal(false);
                        fetchALLResumes();
                    }} />
                </div>
                </Modal>
                {/* Delete modal */}
                <Modal 
                   isOpen={showDeleteConfirm} 
                   onClose={() => setShowDeleteConfirm(false)} 
                   title="Confirm Deletion"
                   showActionBtn 
                   actionBtnText="Delete" 
                   actionBtnClassName="deleteActionBtn"
                   onActionClick={handleDeleteResume}
                >
                <div className="modalBody">
               <div className="deleteWrapper">
               <div className="deleteIconWrapper">
                <FiTrash2 className="deleteIcon" size={24} />
               </div>
               <h3 className="deleteTitle">Supprimer le CV?</h3>
               <p className="deleteText">
                 Êtes-vous sûr de vouloir supprimer ce CV ? Cette action est irréversible.
                </p>
               </div>
                </div>
           </Modal>
           
 
      

    </DashboardLayout>
  )
}

export default Dashboard;
import Resume from '../models/resumeModel.js'
import fs from 'fs'
import path from 'path'

export const createResume = async (req, res) => {
    try {
        const { title } = req.body;

        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };

        const newResume = await Resume.create({
            userId: req.userId,  // <-- ici changement
            title,
            ...defaultResumeData,
            ...req.body
        })
        res.status(201).json(newResume)
    } catch (error) {
        res.status(500).json({ message: "Failed to create resume", error:error.message})
    }
}

export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.userId }).sort({
            updatedAt: -1
        });
        res.json(resumes)
    } catch (error) {
        res.status(500).json({ message: "Failed to get resumes", error:error.message})
    }
}

export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.userId })

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" })
        }
        res.json(resume)
    } catch (error) {
         res.status(500).json({ message: "Failed to get resumes", error:error.message})
    }
}

export const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.userId
        })
        if (!resume) {
            return res.status(404).json({ message: "Resume not found or not authorized" })
        }

        Object.assign(resume, req.body)
        const savedResume = await resume.save();
        res.json(savedResume)
    } catch (error) {
        res.status(500).json({ message: "Failed to update resumes", error:error.message})
    }
}

export const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.userId
        })
        if (!resume) {
            return res.status(404).json({ message: "Resume not found or not authorized" })
        }

        const uploadsFolder = path.join(process.cwd(), 'uploads')

        if(resume.thumbnailLink) {
            const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink))
            if(fs.existsSync(oldThumbnail)){
                fs.unlinkSync(oldThumbnail)
            }
        }

        if (resume.profileInfo?.profilePreviewUrl){
            const oldProfile = path.join(
                uploadsFolder,
                path.basename(resume.profileInfo.profilePreviewUrl)
            )
            if (fs.existsSync(oldProfile)){
                fs.unlinkSync(oldProfile)
            }
        }

        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId
        })
        if (!deleted) {
            return res.status(404).json({ message: "Resume not found or not authorized" })
        }
        res.json({ message: "Resume deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Failed to delete resumes", error:error.message})
    }
}

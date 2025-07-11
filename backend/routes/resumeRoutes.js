import express from "express";
/* import {protect} from '../middleware/resumemiddleware.js'; */
import userAuth from '../middleware/userAuth.js';
import { createResume, deleteResume, getResumeById, getUserResumes, updateResume } from '../controllers/resumeController.js'
import { uploadResumeImages} from '../controllers/uploadimages.js'


const resumeRouter = express.Router()

resumeRouter.post('/', userAuth, createResume)
resumeRouter.get('/', userAuth, getUserResumes)
resumeRouter.get('/:id', userAuth, getResumeById)

resumeRouter.put('/:id', userAuth, updateResume)
resumeRouter.put('/:id/upload-images',userAuth, uploadResumeImages)

resumeRouter.delete('/:id',userAuth, deleteResume)

export default resumeRouter; 
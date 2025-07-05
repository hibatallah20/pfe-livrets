import express from "express";
import userAuth from '../middleware/userAuth.js';
import {
  createJob,
  deleteJobPost,
  getJobById,
  getJobPosts,
  updateJob,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

// POST JOB (protected)
jobRouter.post("/upload-job", userAuth, createJob);

// UPDATE JOB (protected)
jobRouter.put("/update-job/:jobId", userAuth, updateJob);

// GET JOB POSTS (public)
jobRouter.get("/find-jobs", getJobPosts);

// GET JOB DETAIL (public)
jobRouter.get("/get-job-detail/:id", getJobById);

// DELETE JOB (protected)
jobRouter.delete("/delete-job/:id", userAuth, deleteJobPost);

export default jobRouter;

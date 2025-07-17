import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Step1 from './pages/livret1/Step1'
import Step2 from './pages/livret1/Step2'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobsList from './pages/joblist'
import Jobdetail from './pages/jobdetail'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import Step3 from './pages/livret1/Step3'
import Step4 from './pages/livret1/Step4'
import Step5 from './pages/livret1/Step5'
import Step6 from './pages/livret1/Step6'
import Step7 from './pages/livret1/Step7'
import Step8 from './pages/livret1/Step8'
import Step9 from './pages/livret1/Step9'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/livret1/step1' element={<Step1/>}/>
        <Route path='/livret1/step2' element={<Step2/>}/>
        <Route path='/livret1/step3' element={<Step3/>}/>
        <Route path='/livret1/step4' element={<Step4/>}/>
        <Route path='/livret1/step5' element={<Step5/>}/>
        <Route path='/livret1/step6' element={<Step6/>}/>
        <Route path='/livret1/step7' element={<Step7/>}/>
        <Route path='/livret1/step8' element={<Step8/>}/>
        <Route path='/livret1/step9' element={<Step9/>}/>
        <Route path='/joblist' element={<JobsList/>}/>
        <Route path='/job-detail/:id' element={<Jobdetail/>}/>
        <Route path='/resume' element={<LandingPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/resume/:resumeId' element={<EditResume/>}/>
      </Routes>
    </div>
  )
}

export default App
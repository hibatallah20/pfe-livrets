import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Step1 from './pages/livret1/Step1'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobsList from './pages/joblist'
import Jobdetail from './pages/jobdetail'


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
        <Route path='/joblist' element={<JobsList/>}/>
        <Route path='/job-detail/:id' element={<Jobdetail/>}/>
      </Routes>
    </div>
  )
}

export default App
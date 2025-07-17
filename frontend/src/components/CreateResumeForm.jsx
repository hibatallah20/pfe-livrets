import React, { useState } from 'react'
import '../styles/createresume.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Target } from 'react-feather'
import { Input } from './Inputs'

const CreateResumeForm = () => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleCreateResume = async (e) => {
    e.preventDefault();

    if(!title) {
      setError("Veuillez saisir le titre du CV ")
      return
    }
    setError("")

    try{
      const response = await axios.post('http://localhost:4000/api/resume', 
      { title },               
      { withCredentials: true },
     );
     if(response.data?._id) {
      navigate(`/resume/${response.data?._id}`)
     }
    } catch (error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message)
      }
      else {
        setError('Une erreur s’est produite. Veuillez réessayer.')
      }
    }
  }
  return (
    <div className="createResumeContainer">
      <h3 className="createResumeTitle">Créer un nouveau CV</h3>
      <p className="createResumeSubtitle">
        Donnez un titre à votre CV pour commencer. Vous pourrez tout personnaliser par la suite.
      </p>

      <form onSubmit={handleCreateResume}>
          <Input value={title} onChange={({ target }) => setTitle(target.value)}
          label='Resume Title' placeholder='e.g., Jack Smith - Software Engineer'
          type='text' />

          {error && <p className="errorMessage">{error}</p>}
          <button type='submit' className="createResumeButton">
           Créer un CV
          </button>
      </form>

    </div>
  )
}

export default CreateResumeForm;

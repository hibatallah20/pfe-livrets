import React, { useRef, useState } from 'react'
import { Camera, Check, Edit, Eye, EyeOff } from 'react-feather'
import '../styles/input.css'

export const Input = ({value, onChange, label, placeholder, type= 'text'}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="wrapper">
        {label && <label className="label">{label}</label>}
        <div className={`inputContainer ${isFocused ? "focused" : ""}`}>
            <input type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            placeholder={placeholder}
            className="inputField"
            value={value}
            onChange={onChange}
            onFocus={()=> setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            />
            {type === 'password' && (
                <button type='button' onClick={() => setShowPassword(!showPassword)}
                className="toggleButton">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            )}
        </div>
    </div>
  )
}

export const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(preview || null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (preview) setPreviewUrl(preview);
  }, [preview]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setPreview?.(url);
    }
  };

  const handleRemove = () => {
    setImage(null);
    setPreviewUrl(null);
    setPreview?.(null);
  };

  const chooseFile = () => inputRef.current.click();

  return (
    <div className="photocontainer">
      <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} className="hiddenInput "/>
      {!previewUrl ? (
        <div
          className={`placeholder ${hovered ? 'hovered' : ''}`}
          onClick={chooseFile}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button type="button" className="cameraButton">
            <Camera size={20} />
          </button>
        </div>
      ) : (
        <div
          className="previewWrapper"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`previewImageContainer ${hovered ? 'hovered' : ''}`} onClick={chooseFile}>
            <img src={previewUrl} alt="profile" className="previewImage" />
          </div>
          <div className="inputoverlay">
            <button
            type="button"
            className="actionButtonWhite"
            onClick={chooseFile}
           >
           <Edit size={16} />
          </button>

         <button
           type="button"
           className="actionButtonRed"
           onClick={handleRemove}
        >
        <Trash2 size={16} />
         </button>
          </div>
        </div>
      )}
    </div>
  );
};
//used in resume title input
export const TitleInput = ({ title, setTitle }) => {
  const [editing, setEditing] = useState(false);
  const [focused, setFocused] = useState(false);


  return (
    <div className="containerTitle">
      {editing ? (
        <>
          <input
            type="text"
            placeholder="Resume title"
            className={`titleinputField  ${focused ? "focused" : ''}`}
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
          <button className="confirmButton" onClick={() => setEditing(false)}>
            <Check className="checkIcon" />
          </button>
        </>
      ) : (
        <>
          <h2 className="titleText">{title}</h2>
          <button className="editButton" onClick={() => setEditing(true)}>
            <Edit className="editIcon "/>
          </button>
        </>
      )}
    </div>
  );
};
export default Input
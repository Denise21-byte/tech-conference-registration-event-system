import React from "react"
import { useNavigate } from "react-router-dom"

export default function EventInfo({ isRegistered }) {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    if (isRegistered) {
      navigate("/my-registration")
    } else {
      navigate("/register")
    }
  }

  return (
    <div className="page">
      <h1>Tech Innovation Conference 2025</h1>
      <p>📅 Date: August 15, 2025</p>
      <p>📍 Location: Convention Center, Nairobi</p>
      <p>A gathering of developers, designers & entrepreneurs...</p>
      <button onClick={handleRegisterClick}>
        {isRegistered ? "View My Registration" : "Register Now"}
      </button>
    </div>
  )
}
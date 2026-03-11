import React from "react"
import { useNavigate } from "react-router-dom"

export default function SubmittedRegistration({ setIsRegistered }) {
  const navigate = useNavigate()
  const saved = JSON.parse(localStorage.getItem("conferenceRegistration"))

  const handleCancel = () => {
    localStorage.removeItem("conferenceRegistration")
    setIsRegistered(false)
    navigate("/")
  }

  if (!saved) return <p>No registration found.</p>

  return (
    <div className="page">
      <h2>You're Already Registered! ✅</h2>
      <p><strong>Name:</strong> {saved.fullName}</p>
      <p><strong>Email:</strong> {saved.email}</p>
      <p><strong>Ticket Type:</strong> {saved.ticketType}</p>
      <p><strong>Notes:</strong> {saved.notes}</p>

      <button onClick={() => navigate("/register")}>✏️ Edit Registration</button>
      <button onClick={handleCancel}>❌ Cancel Registration</button>
    </div>
  )
}
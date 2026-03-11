import React from "react"
import { useNavigate } from "react-router-dom"

export default function ReviewPage({ formData, setIsRegistered }) {
  const navigate = useNavigate()

  const handleConfirm = () => {
    localStorage.setItem("conferenceRegistration", JSON.stringify(formData))
    setIsRegistered(true)
    navigate("/confirmation")
  }

  return (
    <div className="page">
      <h2>Review Your Details</h2>
      <p><strong>Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Organization:</strong> {formData.organization}</p>
      <p><strong>Ticket:</strong> {formData.ticketType}</p>
      <p><strong>Dietary:</strong> {formData.dietary}</p>
      <p><strong>Notes:</strong> {formData.notes}</p>

      <button onClick={() => navigate("/register")}>← Edit</button>
      <button onClick={handleConfirm}>✅ Confirm Registration</button>
    </div>
  )
}
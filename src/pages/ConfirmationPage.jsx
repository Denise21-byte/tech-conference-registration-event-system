import React from "react"
import { useNavigate } from "react-router-dom"

export default function ConfirmationPage() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <h2>🎉 Registration Successful!</h2>
      <p>Thank you! Your seat has been reserved.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}
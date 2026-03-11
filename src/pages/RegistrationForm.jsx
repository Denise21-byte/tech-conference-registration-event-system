import React from "react"
import { useNavigate } from "react-router-dom"

export default function RegistrationForm({ formData, setFormData }) {
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (!formData.fullName || !formData.email) {
      alert("Please fill in required fields")
      return
    }
    navigate("/review")
  }

  return (
    <div>
      <h2>Register for the Conference</h2>
      <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
      <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
        <option>Standard</option>
        <option>VIP</option>
        <option>Student</option>
      </select>
      <input name="dietary" placeholder="Dietary Requirements" value={formData.dietary} onChange={handleChange} />
      <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} />
      <button onClick={handleNext}>Next → Review</button>
    </div>
  )
}
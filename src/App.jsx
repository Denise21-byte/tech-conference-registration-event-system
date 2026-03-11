
import React,{ useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import EventInfo from "./pages/EventInfo"
import RegistrationForm from "./pages/RegistrationForm"
import ReviewPage from "./pages/ReviewPage"
import ConfirmationPage from "./pages/ConfirmationPage"
import SubmittedRegistration from "./pages/SubmittedRegistration"

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "",
    organization: "", ticketType: "Standard",
    dietary: "", notes: ""
  })

  const [isRegistered, setIsRegistered] = useState(false)

  // Check localStorage on first load
  useEffect(() => {
    const saved = localStorage.getItem("conferenceRegistration")
    if (saved) setIsRegistered(true)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventInfo isRegistered={isRegistered} />} />
        <Route path="/register" element={<RegistrationForm formData={formData} setFormData={setFormData} />} />
        <Route path="/review" element={<ReviewPage formData={formData} setIsRegistered={setIsRegistered} />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/my-registration" element={<SubmittedRegistration setIsRegistered={setIsRegistered} />} />
      </Routes>
    </BrowserRouter>
  )
}
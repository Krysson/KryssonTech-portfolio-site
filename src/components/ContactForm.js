import React, { useState } from "react"
import "./CSS/ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [formErrors, setFormErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    const errors = {}
    if (!formData.name) errors.name = "Name is required"
    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    if (!formData.message) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true)
      // Handle form submission, e.g., send data to a server
      console.log("Form data submitted:", formData)
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <div className="contact-form-container">
      {formSubmitted ? (
        <div className="thank-you-message">Thank you for your message!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  )
}

export default ContactForm

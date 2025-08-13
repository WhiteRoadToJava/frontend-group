import React from "react";
import "../../styles/ContactForm.css";
import { useState } from "react";
 
 
 
function ContactForm() {
        const [formData, setFormData] = useState({
                mame:"",
                email:"",
                phone:"",
                message:""
        });
        const [errors, setErrors] = useState({});
        const [successMessage, setSuccessMessage] = useState("");
 
 
 
        const handleSubmit = (e) => {
                e.preventDefault();
                if (validate()) {
                        setSuccessMessage(
                                formData.name + ' ' +  
                                formData.email + ' ' +
                                formData.phone + ' ' +
                                formData.message + ' ' +
                                "Tack för ditt meddelande!");
                        console.log(formData.name + ' ' +
                                formData.email + ' ' +
                                formData.phone + ' ' +
                                formData.message + ' ' +
                                "Tack för ditt meddelande!");
                        setFormData({
                                name: "",
                                email: "",
                                phone: "",
                                message: ""
                        });
                        setErrors({});
                } else {
                        setSuccessMessage("Tyvärr! meddelande skickades inte.");
                        setErrors({});
                }
        }
 
       const validate = () => {
  let tempErrors = {};
  if (!formData.name) {
    tempErrors.name = "Name is required.";
  }
  if (formData.name.length < 3) {
    tempErrors.name = "Namn måste vara minst 3 tecken.";
  }
  if(!formData.email.includes("@")){
    tempErrors.email = "Email är inte giltig.";
  }
  if (!formData.email) {
    tempErrors.email = "Email är requierad.";
  }
  if (!formData.phone) {
    tempErrors.phone = "Telefonnummer är requierad.";
  }
  if (!formData.message) {
    tempErrors.message = "Meddelande är requierad.";
  }
   setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};
 
 
 
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Kontakta ägaren</h1>
      <div className="container">
        <form className="contact-form" action="" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" name="name"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefonnummer</label>
            <input type="tel" id="phone" name="phone" onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Skicka</button>
          </div>
        </form>
        {successMessage && <p className="success-message" style={{
                color: errors.name ||
                errors.email ||
                errors.phone ||
                errors.message ? 'red' :  'green' }}>{successMessage}</p>}
      </div>
    </div>
  );
}
 
export default ContactForm;

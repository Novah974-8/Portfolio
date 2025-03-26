// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Message envoyé!');
  };

  const inputStyle = {
    backgroundColor: '#292929',
    color: '#ffffff',
    border: '1px solid #404040',
    padding: '12px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '16px'
  };

  const buttonStyle = {
    backgroundColor: '#00AA00',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    marginTop: '10px'
  };

  return (
    <div className="section">
      <h2>Me Contacter</h2>
      <p>N'hésitez pas à me contacter pour toute question ou proposition de collaboration.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            style={inputStyle}
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            style={{
              ...inputStyle,
              height: '150px',
              resize: 'vertical'
            }}
            required
          />
        </div>

        <button 
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#008800'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#00AA00'}
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default Contact;
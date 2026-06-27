import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', organization: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      setSent(true)
      setForm({ name: '', email: '', phone: '', organization: '', message: '' })
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Nous contacter</h1>
          <p>Rejoignez le CCF-TAMBA ou envoyez-nous un message</p>
        </div>
      </div>
      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Prenons contact</h2>
              <div className="accent-line"></div>
              <p>
                Vous souhaitez adhérer au CCF-TAMBA, devenir partenaire ou simplement
                en savoir plus sur nos actions ? N'hésitez pas à nous écrire.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <h4>Adresse</h4>
                    <p>Quartier Liberté Est, Case Foyer FAFS<br />Tambacounda, Sénégal</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>habycoulibaly69@gmail.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+221 77 533 74 68</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📜</div>
                  <div>
                    <h4>Récépissé</h4>
                    <p>N°17228/MINT.SP/DGAT/DLP/DLA-PA du 17 Février 2013</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {sent ? (
                <div className="contact-form">
                  <div className="form-success">
                    Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nom complet *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Téléphone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Organisation</label>
                    <input type="text" name="organization" value={form.organization} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

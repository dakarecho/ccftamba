import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const fallbackActivities = [
  {
    id: 1,
    title: 'Lutte contre les MGF et VBG — Projet ALM/OPTION',
    description: 'Formation de 30 relais par commune dans 3 communes (Koussanar, Missirah, Balla). Causeries, dialogues communautaires, débats dans les collèges et forums organisés.',
    category: 'Lutte MGF/VBG',
    year: '2024',
    partner: 'ALM / OPTION',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ee0f9e5c-1772098241485.png',
  },
  {
    id: 2,
    title: 'Plaidoyer pour l\'accès à la terre — 25 hectares obtenus',
    description: 'Plaidoyer réussi pour obtenir 25 hectares dans 3 communes de l\'arrondissement de Missirah avec construction de 5 périmètres maraîchers.',
    category: 'Plaidoyer',
    year: '2023',
    partner: 'FAR',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ca5b458f-1766786092064.png',
  },
  {
    id: 3,
    title: 'Égalité de genre et résilience climatique — CARITAS SAGES',
    description: 'Ateliers d\'élaboration du plan stratégique, sensibilisation sur l\'égalité de genre dans l\'agriculture et plaidoyer pour l\'accès à la terre.',
    category: 'Sensibilisation',
    year: '2022',
    partner: 'CARITAS',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_12dd1ec56-1772242234587.png',
  },
]

export default function ActivitiesSection() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('/api/activities')
      .then(res => setActivities(res.data))
      .catch(() => setActivities(fallbackActivities))
  }, [])

  const items = activities.length > 0 ? activities.slice(0, 3) : fallbackActivities

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Nos <span>actions</span></h2>
        <p className="section-subtitle">Activités en vedette</p>
        <div className="section-ornament"><span className="dot"></span></div>
        <div className="activities-grid">
          {items.map(a => (
            <div key={a.id} className="activity-card">
              <div className="activity-card-image">
                <img src={a.image_url} alt={a.title} />
              </div>
              <div className="activity-card-body">
                <span className="activity-tag">{a.category} {a.year}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <div className="activity-meta">
                  <span>Partenaire : {a.partner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/activities" className="btn btn-outline">Voir toutes les activités</Link>
        </div>
      </div>
    </section>
  )
}

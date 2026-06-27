import { useState, useEffect } from 'react'
import axios from 'axios'

const fallbackActivities = [
  {
    id: 1, title: 'Lutte contre les MGF et VBG — Projet ALM/OPTION',
    description: 'Formation de 30 relais par commune dans 3 communes (Koussanar, Missirah, Balla). Causeries, dialogues communautaires, débats dans les collèges et forums organisés.',
    category: 'Lutte MGF/VBG', year: '2024', partner: 'ALM / OPTION',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ee0f9e5c-1772098241485.png',
  },
  {
    id: 2, title: 'Plaidoyer pour l\'accès à la terre — 25 hectares obtenus',
    description: 'Plaidoyer réussi pour obtenir 25 hectares dans 3 communes de l\'arrondissement de Missirah avec construction de 5 périmètres maraîchers.',
    category: 'Plaidoyer', year: '2023', partner: 'FAR',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ca5b458f-1766786092064.png',
  },
  {
    id: 3, title: 'Égalité de genre et résilience climatique — CARITAS SAGES',
    description: 'Ateliers d\'élaboration du plan stratégique, sensibilisation sur l\'égalité de genre dans l\'agriculture et plaidoyer pour l\'accès à la terre.',
    category: 'Sensibilisation', year: '2022', partner: 'CARITAS',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_12dd1ec56-1772242234587.png',
  },
  {
    id: 4, title: 'Formation en transformation agro-alimentaire',
    description: 'Session de formation sur les techniques de transformation et conservation des produits agricoles destinée aux groupements de femmes.',
    category: 'Formation', year: '2022', partner: 'ANSD',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e8b8047e-1769527834791.png',
  },
  {
    id: 5, title: 'Campagne de sensibilisation sur les droits des femmes',
    description: 'Campagne de sensibilisation sur les droits des femmes dans les 4 départements de la région.',
    category: 'Sensibilisation', year: '2021', partner: 'UNICEF',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_10489531a-1772093558850.png',
  },
  {
    id: 6, title: 'Projet de résilience climatique',
    description: 'Initiatives d\'adaptation au changement climatique pour les femmes rurales.',
    category: 'Environnement', year: '2021', partner: 'USAID',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d2568829-1768481301692.png',
  },
]

export default function Activities() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('/api/activities')
      .then(res => setActivities(res.data))
      .catch(() => setActivities(fallbackActivities))
  }, [])

  const items = activities.length > 0 ? activities : fallbackActivities

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Nos Activités</h1>
          <p>Découvrez nos actions pour l'autonomisation des femmes (2015–2024)</p>
        </div>
      </div>
      <section className="list-page">
        <div className="container">
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
        </div>
      </section>
    </>
  )
}

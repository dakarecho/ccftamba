import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const fallbackNews = [
  {
    id: 1, title: 'Lancement du Plan Stratégique 2025–2030 du CCF-TAMBA',
    content: 'Le CCF-TAMBA a officiellement lancé son plan stratégique pour la période 2025–2030, marquant une nouvelle étape dans la consolidation de ses actions pour l\'autonomisation des femmes.',
    category: 'Communiqué', date: '2025-03-15',
    image_url: '/assets/images/gallery-6.jpeg',
  },
  {
    id: 2, title: 'Bilan du Projet ALM/OPTION 2024 : Lutte contre les MGF et VBG',
    content: 'Retour sur les activités menées dans les communes de Koussanar, Missirah et Balla : formation de relais communautaires, causeries et dialogues pour l\'élimination des MGF.',
    category: 'Rapport d\'activités', date: '2025-01-20',
    image_url: '/assets/images/gallery-7.jpeg',
  },
  {
    id: 3, title: 'Formation en Produits Halieutiques avec le 3FPT',
    content: 'En partenariat avec le Fonds de Financement de la Formation Professionnelle et Technique (3FPT), le CCF-TAMBA a organisé des formations en transformation et conservation des produits de la pêche.',
    category: 'Formation', date: '2024-12-10',
    image_url: '/assets/images/gallery-8.jpeg',
  },
]

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('/api/news')
      .then(res => setNews(res.data))
      .catch(() => setNews(fallbackNews))
  }, [])

  const items = news.length > 0 ? news : fallbackNews

  const formatDate = (d) => {
    const date = new Date(d)
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Actualités</h1>
          <p>Suivez les dernières nouvelles du CCF-TAMBA</p>
        </div>
      </div>
      <section className="list-page">
        <div className="container">
          <div className="news-grid">
            {items.map(n => (
              <div key={n.id} className="news-card">
                <div className="news-card-image">
                  <img src={n.image_url} alt={n.title} />
                </div>
                <div className="news-card-body">
                  <span className="news-tag">{n.category}</span>
                  <div className="news-date">{formatDate(n.date)}</div>
                  <h3>{n.title}</h3>
                  <p>{n.content}</p>
                  <Link to={`/news/${n.id}`} className="news-link">Lire la suite →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const fallbackNews = [
  {
    id: 1,
    title: 'Lancement du Plan Stratégique 2025–2030 du CCF-TAMBA',
    content: 'Le CCF-TAMBA a officiellement lancé son plan stratégique pour la période 2025–2030.',
    category: 'Communiqué',
    date: '2025-03-15',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1be8c55eb-1778439944182.png',
  },
  {
    id: 2,
    title: 'Bilan du Projet ALM/OPTION 2024 : Lutte contre les MGF et VBG',
    content: 'Retour sur les activités menées dans les communes de Koussanar, Missirah et Balla.',
    category: 'Rapport d\'activités',
    date: '2025-01-20',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_10489531a-1772093558850.png',
  },
  {
    id: 3,
    title: 'Formation en Produits Halieutiques avec le 3FPT',
    content: 'En partenariat avec le 3FPT, le CCF-TAMBA a organisé des formations en transformation et conservation des produits de la pêche.',
    category: 'Formation',
    date: '2024-12-10',
    image_url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e8b8047e-1769527834791.png',
  },
]

export default function NewsSection() {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('/api/news')
      .then(res => setNews(res.data))
      .catch(() => setNews(fallbackNews))
  }, [])

  const items = news.length > 0 ? news.slice(0, 3) : fallbackNews

  const formatDate = (d) => {
    const date = new Date(d)
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Restez <span>informés</span></h2>
        <p className="section-subtitle">Dernières actualités</p>
        <div className="section-ornament"><span className="dot"></span></div>
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
                <Link to={`/news/${n.id}`} className="news-link">
                  Lire la suite →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/news" className="btn btn-outline">Toutes les actualités</Link>
        </div>
      </div>
    </section>
  )
}

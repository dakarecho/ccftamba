import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const fallbackNews = {
  1: {
    id: 1, title: 'Lancement du Plan Stratégique 2025–2030 du CCF-TAMBA',
    content: 'Le CCF-TAMBA a officiellement lancé son plan stratégique pour la période 2025–2030, marquant une nouvelle étape dans la consolidation de ses actions pour l\'autonomisation des femmes.\n\nCette cérémonie a rassemblé les membres du comité, les partenaires techniques et financiers, ainsi que les autorités administratives de la région de Tambacounda.\n\nLe plan stratégique 2025–2030 s\'articule autour de 5 axes majeurs :\n\n1. Renforcement des capacités organisationnelles et techniques des femmes\n2. Plaidoyer pour l\'accès aux ressources productives\n3. Lutte contre les violences basées sur le genre\n4. Promotion de l\'égalité de genre\n5. Résilience climatique et sécurité alimentaire',
    category: 'Communiqué', date: '2025-03-15',
    image_url: '/assets/images/gallery-6.jpeg',
  },
  2: {
    id: 2, title: 'Bilan du Projet ALM/OPTION 2024 : Lutte contre les MGF et VBG',
    content: 'Retour sur les activités menées dans les communes de Koussanar, Missirah et Balla : formation de relais communautaires, causeries et dialogues pour l\'élimination des MGF.\n\nLe projet ALM/OPTION a permis de former 30 relais par commune dans 3 communes ciblées. Des causeries éducatives, des dialogues communautaires, des débats dans les collèges et des forums ont été organisés tout au long de l\'année 2024.\n\nCes activités ont touché directement plus de 5 000 personnes, dont des jeunes filles, des femmes, des hommes et des leaders communautaires.',
    category: 'Rapport d\'activités', date: '2025-01-20',
    image_url: '/assets/images/gallery-7.jpeg',
  },
  3: {
    id: 3, title: 'Formation en Produits Halieutiques avec le 3FPT',
    content: 'En partenariat avec le Fonds de Financement de la Formation Professionnelle et Technique (3FPT), le CCF-TAMBA a organisé des formations en transformation et conservation des produits de la pêche.\n\nCette formation a bénéficié à 50 femmes issues de groupements féminins de la région de Tambacounda. Les participantes ont appris les techniques de fumage, de séchage et de conservation du poisson, ainsi que les normes d\'hygiène et de qualité.\n\nÀ l\'issue de la formation, chaque participante a reçu un kit de transformation pour démarrer son activité.',
    category: 'Formation', date: '2024-12-10',
    image_url: '/assets/images/gallery-8.jpeg',
  },
}

export default function NewsDetail() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    axios.get(`/api/news/${id}`)
      .then(res => setArticle(res.data))
      .catch(() => setArticle(fallbackNews[id]))
  }, [id])

  if (!article) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  const formatDate = (d) => {
    const date = new Date(d)
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Link to="/news" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-block', marginBottom: 12 }}>
            ← Retour aux actualités
          </Link>
          <h1>{article.title}</h1>
        </div>
      </div>
      <article className="news-detail">
        <div className="container">
          <div className="news-detail-content">
            <div className="news-detail-header">
              <span className="news-tag">{article.category}</span>
              <div className="news-detail-meta">{formatDate(article.date)}</div>
            </div>
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="news-detail-image" />
            )}
            <div className="news-detail-body">
              {article.content.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

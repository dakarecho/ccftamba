import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <div className="hero-badge">
            Fondé en 2015 · Tambacounda, Sénégal
          </div>
          <h1>
            Ensemble pour<br />
            <span>l'autonomisation</span><br />
            <span className="highlight-gold">des femmes</span>
          </h1>
          <p>
            Le Comité Consultatif des Femmes de Tambacounda (CCF-TAMBA) est un cadre de concertation
            qui regroupe toutes les organisations de femmes. Ensemble, nous œuvrons pour le développement
            et l'autonomisation des femmes au niveau local, départemental, régional et national.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Découvrir notre organisation</Link>
            <Link to="/activities" className="btn btn-outline">Voir nos activités</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-border"></div>
          <div className="hero-image-wrapper">
            <img
              src="/assets/images/gallery-1.jpeg"
              alt="Femmes sénégalaises travaillant dans un jardin maraîcher"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Rejoignez le mouvement</h2>
        <p>
          Faites partie du mouvement pour l'autonomisation des femmes de Tambacounda.
          Que vous soyez une organisation de femmes, une militante ou une partenaire,
          rejoignez le CCF-TAMBA et contribuez à l'autonomisation des femmes.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-white">
            Adhérer au comité
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}

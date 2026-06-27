import { Link } from 'react-router-dom'

const missions = [
  'Défendre les droits et intérêts des femmes auprès des autorités',
  'Assurer la coordination entre les organisations de femmes',
  'Représenter les femmes aux niveaux local, régional et national',
  'Mener des actions de plaidoyer et de lobbying',
  'Renforcer les capacités techniques et organisationnelles',
]

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Un cadre de concertation au service des femmes</h2>
            <div className="accent-line"></div>
            <p>
              Le Comité Consultatif des Femmes de Tambacounda regroupe toutes les organisations
              de femmes de la région. Il est un cadre de participation au développement et à
              l'autonomisation des femmes, participant à l'élaboration, à la mise en œuvre et
              à l'évaluation des programmes de développement.
            </p>
            <div className="vision">
              <strong>Vision :</strong> « Autonomisation des femmes de la région de Tambacounda »
            </div>
            <div className="about-mission">
              <h4>Nos missions</h4>
              {missions.map((m, i) => (
                <div key={i} className="mission-item">
                  <span className="mission-check">✓</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/about" className="btn btn-primary">En savoir plus</Link>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-decoration"></div>
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_12dd1ec56-1772242234587.png"
              alt="Femmes africaines réunies en atelier de formation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

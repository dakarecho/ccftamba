const missions = [
  'Défendre les droits et intérêts des femmes auprès des autorités',
  'Assurer la coordination entre les organisations de femmes',
  'Représenter les femmes aux niveaux local, régional et national',
  'Mener des actions de plaidoyer et de lobbying',
  'Renforcer les capacités techniques et organisationnelles',
]

const values = [
  'Participation citoyenne des femmes',
  'Équité et égalité de genre',
  'Solidarité et entraide',
  'Transparence et redevabilité',
  'Respect des droits humains',
]

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Notre Organisation</h1>
          <p>Comité Consultatif des Femmes de Tambacounda</p>
        </div>
      </div>
      <section className="about-page-content">
        <div className="container">
          <div className="about-page-grid">
            <div className="about-page-text">
              <h2>Qui sommes-nous ?</h2>
              <div className="accent-line"></div>
              <p>
                Le Comité Consultatif des Femmes de Tambacounda (CCF-TAMBA) est un cadre de concertation
                créé en 2015 qui regroupe toutes les organisations de femmes de la région de Tambacounda.
              </p>
              <p>
                Il constitue un espace de participation au développement et à l'autonomisation des femmes,
                participant à l'élaboration, à la mise en œuvre et à l'évaluation des programmes de
                développement au niveau local, départemental, régional et national.
              </p>
              <p>
                <strong>Récépissé officiel N°17228</strong> du 17 Février 2013
              </p>
              <h3>Notre Vision</h3>
              <p>
                « Autonomisation des femmes de la région de Tambacounda »
              </p>
            </div>
            <div className="about-page-image">
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_12dd1ec56-1772242234587.png"
                alt="Femmes africaines réunies en atelier de formation"
              />
            </div>
          </div>
          <div className="about-page-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div className="about-page-text">
              <h3>Nos Missions</h3>
              <ul>
                {missions.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
            <div className="about-page-text">
              <h3>Nos Valeurs</h3>
              <ul>
                {values.map((v, i) => <li key={i}>{v}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

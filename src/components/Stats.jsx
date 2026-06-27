export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">👩</div>
            <div className="stat-number">~2 000</div>
            <div className="stat-label">Femmes membres</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📅</div>
            <div className="stat-number">10</div>
            <div className="stat-label">Années d'activité</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📍</div>
            <div className="stat-number">4</div>
            <div className="stat-label">Départements couverts</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">📚</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Formations réalisées</div>
          </div>
        </div>
      </div>
    </section>
  )
}

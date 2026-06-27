const partners = [
  { acronym: 'A', name: 'ACTION AID', desc: 'ONG Internationale', logo: '/assets/images/actionaid.png' },
  { acronym: 'C', name: 'CARITAS', desc: 'Projet SAGES', logo: '/assets/images/caritas.gif' },
  { acronym: 'U', name: 'USAID', desc: 'Nema & Gold', logo: '/assets/images/usaid.png' },
  { acronym: 'C', name: 'CECI', desc: 'VLF-Sénégal', logo: '/assets/images/ceci.jfif' },
  { acronym: 'A', name: 'Affaires mondiales Canada', desc: 'Partenaire financier', logo: '/assets/images/global-affairs-canada.png' },
  { acronym: '3', name: '3FPT', desc: 'Formation professionnelle', logo: '/assets/images/3fpt.jpg' },
  { acronym: 'F', name: 'FAR', desc: 'Plaidoyer accès à la terre', logo: '/assets/images/far.png' },
  { acronym: 'A', name: 'ALM / OPTION', desc: 'Lutte MGF/VBG', logo: '/assets/images/alm-option.jfif' },
]

export default function Partners() {
  return (
    <section className="partners section">
      <div className="container">
        <h2 className="section-title">Nos <span>partenaires</span></h2>
        <p className="section-subtitle">Ils nous soutiennent</p>
        <div className="section-ornament"><span className="dot"></span></div>
        <div className="partners-grid">
          {partners.map((p, i) => (
            <div key={i} className="partner-card">
              {p.logo ? (
                <div className="partner-logo">
                  <img src={p.logo} alt={p.name} />
                </div>
              ) : (
                <div className="partner-acronym">{p.acronym}</div>
              )}
              {!p.logo && <div className="partner-name">{p.name}</div>}
              <div className="partner-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

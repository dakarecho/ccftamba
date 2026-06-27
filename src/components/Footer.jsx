import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <img src="/assets/images/logo.jpeg" alt="CCF-TAMBA" />
              <div>
                <span className="main">CCF-TAMBA</span>
                <span className="sub">Comité Consultatif des Femmes</span>
              </div>
            </div>
            <p>Pour l'autonomisation des femmes de la région de Tambacounda.</p>
            <div className="footer-address">
              Quartier Liberté Est, Case Foyer FAFS, Tambacounda, Sénégal
            </div>
          </div>
          <div>
            <h4>Organisation</h4>
            <ul className="footer-links">
              <li><Link to="/about">Notre Organisation</Link></li>
              <li><Link to="/activities">Activités 2015–2024</Link></li>
              <li><Link to="/news">Actualités</Link></li>
            </ul>
          </div>
          <div>
            <h4>Rejoindre</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Adhérer</Link></li>
              <li><Link to="/contact">Nous contacter</Link></li>
            </ul>
          </div>
          <div>
            <h4>Informations légales</h4>
            <div className="footer-legal">
              <p>Récépissé N°17228/MINT.SP/DGAT/DLP/DLA-PA</p>
              <p>du 17 Février 2013</p>
              <p style={{ marginTop: 12 }}>Présidente : Mme Traoré Haby Coulibaly</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 CCF-TAMBA — Comité Consultatif des Femmes de Tambacounda. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

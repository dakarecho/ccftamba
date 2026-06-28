import { Link } from 'react-router-dom'

const images = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/gallery-${i + 1}.jpeg`,
}))

export default function GallerySection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Notre <span>galerie</span></h2>
        <p className="section-subtitle">Moments forts de nos activités</p>
        <div className="section-ornament"><span className="dot"></span></div>
        <div className="gallery-grid">
          {images.map((img) => (
            <a key={img.id} href={img.src} target="_blank" className="gallery-item">
              <div className="gallery-image">
                <img src={img.src} alt={`Activité CCF-TAMBA ${img.id}`} loading="lazy" />
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/gallery" className="btn btn-outline">Voir toute la galerie</Link>
        </div>
      </div>
    </section>
  )
}

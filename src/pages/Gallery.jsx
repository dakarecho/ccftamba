const images = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/gallery-${i + 1}.jpeg`,
  alt: `Photo CCF-TAMBA ${i + 1}`,
}))

export default function Gallery() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Galerie</h1>
          <p>Découvrez nos moments forts en images</p>
        </div>
      </div>
      <section className="list-page">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img) => (
              <a key={img.id} href={img.src} target="_blank" className="gallery-item">
                <div className="gallery-image">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

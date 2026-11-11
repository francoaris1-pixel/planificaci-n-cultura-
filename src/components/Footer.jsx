import './Footer.css'

export default function Footer({ dark = false, darkVariant = null }) {
  // dark + darkVariant: variantes condicionales pasadas por el Layout
  // según la vista activa (Principal o Pestaña 1).
  const footerClass = [
    'footer',
    dark && darkVariant === 'principal' ? 'footer--principal' : '',
    dark && darkVariant === 'tabuno' ? 'footer--tabuno' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <footer className={footerClass}>
      <div className="footer__inner">
        <p className="footer__text">
          Plani-Cult &copy; {new Date().getFullYear()} — Proyecto colaborativo
        </p>
      </div>
    </footer>
  )
}

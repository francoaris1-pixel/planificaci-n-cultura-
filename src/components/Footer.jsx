import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          Plani-Cult &copy; {new Date().getFullYear()} — Proyecto colaborativo
        </p>
      </div>
    </footer>
  )
}

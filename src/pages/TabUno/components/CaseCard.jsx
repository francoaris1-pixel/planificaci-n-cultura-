export default function CaseCard({ item, onVerRegistro }) {
  return (
    <article className="tabuno__card">
      <div className="tabuno__card-top">
        <span className="tabuno__card-code">{item.code}</span>
        <span
          className={`tabuno__card-status tabuno__card-status--${item.status
            .toLowerCase()
            .replace(/\s+/g, '-')}`}
        >
          {item.status}
        </span>
      </div>
      <h3 className="tabuno__card-title">{item.title}</h3>
      <p className="tabuno__card-meta">
        {item.date} &nbsp;·&nbsp; {item.zone}
      </p>
      <p className="tabuno__card-desc">{item.description}</p>
      <button
        type="button"
        className="tabuno__btn"
        onClick={() => onVerRegistro(item)}
      >
        Ver Registro
      </button>
    </article>
  )
}

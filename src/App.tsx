import { validationItems } from './validation-items'
import './styles.css'

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">DEMO Project Development</p>
        <h1>DEMO Technical Validation</h1>
        <p className="lede">
          A compact end-to-end verification project for local development,
          GitHub hosting, GitHub Actions, GitHub Pages documentation, Vercel deployment,
          and a Vercel custom domain.
        </p>
        <div className="actions">
          <a href="https://thiswind.github.io/demo-project-development/">Open Docs</a>
          <a href="https://github.com/thiswind/demo-project-development">View Repository</a>
        </div>
      </section>

      <section className="grid" aria-label="Validation checklist">
        {validationItems.map((item, index) => (
          <article className="card" key={item.title}>
            <span className="step">{String(index + 1).padStart(2, '0')}</span>
            <h2>{item.title}</h2>
            <dl>
              <dt>Goal</dt>
              <dd>{item.goal}</dd>
              <dt>Verification</dt>
              <dd>{item.method}</dd>
              <dt>Expected result</dt>
              <dd>{item.expected}</dd>
            </dl>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App

import useState from 'react'
import './MenuButton.css'

function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="menuButton" id="menuButton">
        <button
          onClick={() => setMenuOpen((s) => !s)}
          className={`the-burg ${menuOpen ? 'active' : ''}`}
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </>
  )
}

export default MenuButton

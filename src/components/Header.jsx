import './Header.css'
import MenuButton from './MenuButton'

export default function Header() {
  return (
    <nav>
      <div className="linkbarholderholder">
        <div className="linkbarholder">
          <div className="topofnav">
            <MenuButton/>
            <div className="navlinkbar">
              <a className="navlinkelement" href="#home">Home</a>
              <a className="navlinkelement" href="#projects">Projects</a>
              <a className="navlinkelement" href="#about">About Me</a>
              <a className="navlinkelement" href="./contact.html">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

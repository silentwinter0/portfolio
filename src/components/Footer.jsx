import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footertext">
        <div className="footerdiv">
          <h4 className="footer-header">links</h4>
          <p className="footer-text">
            <a href="https://github.com/silentwinter0/">
              github.com/silentwinter0
            </a>
          </p>
        </div>
        <div className="footerdiv">
          <h4 className="footer-header">
            contact
          </h4>
          <p className="footer">
            silentwinter0@proton.me
          </p>
        </div>
        <div className="footerdiv">
          <h4 className="footer-header">
            legal
          </h4>
          <p className="footer-legal">
            All trademarks referenced herein are the properties of their 
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}

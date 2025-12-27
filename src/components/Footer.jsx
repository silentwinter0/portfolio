import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footertext">
        <div className="footerdiv">
          <h4 className="footer-header">more links</h4>
          <p className="footer-text">lorem ipsum etc.</p>
        </div>
        <div className="footerdiv">
          <h4 className="footer-header">contact info</h4>
          <p className="footer">lorem.ipsum@example.com</p>
          <p className="footer">+555 000 000 000</p>
          <p className="footer">linkedin: blah blah</p>
        </div>
        <div className="footerdiv">
          <h4 className="footer-header">legal info</h4>
          <p className="footer-legal">"pic1.jpg" by Dietmar Rabich, CC BY-SA 4.0</p>
          <p className="footer-legal">"pic2.jpg" by Basile Morin - Own work, CC BY-SA 4.0</p>
        </div>
      </div>
    </footer>
  )
}

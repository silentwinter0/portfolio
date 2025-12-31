import './About.css'
import selfPortrait from '../assets/images/pic1.jpg'

export default function About() {
  return (
    <section className="about">
      <h1>ABOUT ME</h1>
      <div className="selfportrait">
        <img src={selfPortrait} alt="A picture of the website author, myself." />
      </div>
      <p className="bigtext">hey guess what it’s yet another programmer/designer person!</p>
      <p>i’m very sure this person is a perfect fit for your company</p>
    </section>
  )
}

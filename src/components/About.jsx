import './About.css'
import selfPortrait from '../assets/images/pic1.jpg'

export default function About() {
  return (
    <section className="about">
      <h1>ABOUT ME</h1>
      <div className="selfportrait">
        <img src={selfPortrait} alt="A picture of myself." />
      </div>
      <p className="bigtext">I'm currently looking for new projects to work on; 
        please reach out if you'd like to work with me!</p>
      <p>If you have any questions, please reach out at silentwinter0@proton.me</p>
    </section>
  )
}

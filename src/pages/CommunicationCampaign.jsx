import './FrontPage.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Article from '../components/Article.jsx'
import Gallery from '../components/Gallery.jsx'
import Hero from '../components/Hero.jsx'

// Pics
import pic1 from '../assets/images/projects/comms/game.png'
import pic2 from '../assets/images/projects/comms/planning.png'
import pic3 from '../assets/images/projects/comms/illustration1.jpeg'
import pic4 from '../assets/images/projects/comms/illustration2.jpeg'
import pic5 from '../assets/images/projects/comms/IS-visa-artikkeli.png'
import pic6 from '../assets/images/projects/comms/social.png'
import pic7 from '../assets/images/projects/comms/game1.png'
import pic8 from '../assets/images/projects/comms/game2.png'
import pic9 from '../assets/images/projects/comms/game3.png'
import pic10 from '../assets/images/projects/comms/game4.png'

function CommunicationCampaign() {
  return (
    <div className="background">
      <Hero />
      <Header />
      <div className="card">
        <h1>Teaching digital novices to 
            recognize AI images and disinformation | A communication campaign</h1>
        <p>January 2025 – May 2025</p>
        <p className='project-bigtext'>
          <br/>
              How can we raise awareness about misleading AI images? 
              This communication campaign strategy and proof-of-concept game was
              presented to and praised by real professionals for 
              its clear strategy, noting it could be put to use as-is. 
              <br/><br/>
              Worked on campaign design & strategy formulation, research, 
              and content creation.
              <br/><br/>
              Responsible for proof-of-concept design and 
              implementation with React.
        </p>
      </div>
      <div className='card'>
        <h2>Gallery</h2>
        <Gallery images={[
            {src: pic1, alt: 'Game screen', caption: 'The front page of the proof-of-concept game'},
            {src: pic6, alt: 'Social post mockup', caption: "A demonstration of how the social media campaign might work. The first post shows a picture that's more obviously AI-generated, while the latter post one day later contains a more believable AI image."},
            {src: pic3, alt: 'Outdoor illustration 1', caption: "An illustration of how the outdoor campaign might look. Made with JCDecaux's illustration tool."},
            {src: pic4, alt: 'Outdoor illustration 2', caption: "An illustration of how the outdoor campaign might look. Made with JCDecaux's illustration tool."},
            {src: pic5, alt: 'Article mockup', caption: 'One of the article mockups we designed. This is what the campaign-supporting articles could look like.'},
            {src: pic2, alt: 'Campaign planning board', caption: 'Our planning board in Miro, where we refined the strategy for our campaign.'},
          ]} />
      </div>
      <div className='card article-container'>
        <Article
          title='Would you recognize an AI-image?'
          subtitle='The strategy'          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic6}
                alt='Social post mockup'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>Both images in these fictional posts are AI generated.</figcaption>
            </figure>
            <br/><br/>
            This group project was completed for a course in communication and 
            digital media. Our task was to design a communication campaign, 
            seeking to inform a particular audience or to cause a change in the
            social climate, and to select a company that could perform this 
            campaign. We chose to focus on informing those less technically 
            inclined of the prevalence of AI images and mis- and disinformation 
            making use of them on social media. 
            <br/><br/>

            Our campaign was one of three selected by course organizers to be 
            presented to Vapa Media, a marketing and communications company, 
            whose employees praised its clear strategy, idea and execution, 
            stating it could be put to use as-is. In fact, they offered to reach
            out in case they wanted to go forward with implementing the campaign.
            <br/><br/>
            Our selected course audience was the "older generation" of Finnish 
            social media users: users of Facebook, aged 50 and above, and are 
            less likely to understand the newest technologies and particularly 
            how much image generation models have advances in recent years. This 
            poses a significant issue, as these models can be and have already 
            been used to generate intentionally misleading images for propaganda
            and influencing public opinion, by both private and state actors. 
            Additionally, our target audience values their family and stability 
            of life most of all.
            <br/><br/>
            In summary, our strategy was as follows: Our aim is for older 
            internet users to recognize the disinformation created by AI models 
            and to understand its impact on their own lives and social media 
            feeds. Our plan was to measure success with the number of visitors 
            to the campaign website, and with the help of the AI image 
            recognition game presented on the website, where our measure of 
            success is the improvement of results between two rounds of the game.
            <br/><br/>
            The major challenge is that target group's understanding of the 
            subject of AI is weak, and they do not know how to take the potential
            disinformation threat seriously. Furthermore, AI creates a lot of 
            confusion and fear, which helps our campaign as people are paying 
            attention and keen to learn more about it. Thus, we need to 
            communicate to them in a way that is both attention-grabbing and 
            believable. We use examples to tell them how disinformation 
            created with the help of artificial intelligence can have a negative
            impact on their lives, and on the other hand we teach them to 
            recognize the typical characteristics of AI images.
            <br/><br/>
            We elected to use the REAN (Reach, Engage, Activate, Nurture) model 
            for our campaign strategy. Our core elements were the campaign 
            website, which hosts a game challenging users to recognize AI images,
            along with news articles and an ongoing campaign about AI images to
            be published on the social media and web magazines of Ilta-Sanomat, 
            which we chose as the ficticious backers of this campaign. They were
            chosen due to having the right blend of believability, engaging
            sensationalism, and target audience reach, making them uniquely 
            suited to run the campaign.
            <br/><br/>
            The initial stage was reaching our audience by high-visibility 
            campaigning, such as front-page articles relating to the topic, 
            outdoor advertising, and social media challenges, inviting readers
            to challenge themselves with the game. Then, the target group is 
            engaged to open the website, where they will be activated to play 
            the game, read more about the topic, and to share their results with
            friends on social media, further nurturing the campaign. Another 
            core idea was that once the website was up and running, the campaign
            would be easy and efficient to run, as the target group would do most
            of the work further spreading the campaign, while the campaigners 
            could focus on releasing topical articles about recent developments 
            in AI image generation. 
          </>}
        />
        <Article
          title='The proof-of-concept game'
          subtitle='The execution'
          content={<>
            <figure className='inline-article-figure'>
              <img
                src={pic7}
                alt='Game screen'
                className='inline-article-image'
              />
              <img
                src={pic8}
                alt='Game screen'
                className='inline-article-image'
              />
              <img
                src={pic9}
                alt='Game screen'
                className='inline-article-image'
              />
              <img
                src={pic10}
                alt='Game screen'
                className='inline-article-image'
              />
              <figcaption className='inline-article-caption'>The proof-of-concept game in action.</figcaption>
            </figure>
            <br/><br/>
            After the planning stage was completed, we got to work on the 
            execution.
            I was in charge of implementing most of the AI image 
            recognition game, while my group members were in charge of selecting 
            fonts, creating UI elements and the additional parts of the campaign,
            such as the bus stop ads, article mockups and social media posts. 
            We considered several different approaches for the game before 
            landing on a very simple, swiping-based game that could work well on
            both computers and phones. Drawing inspiration from the UI of dating
            apps, the player is presented with an image, and they are prompted 
            to swipe AI images to the left, and real images to the right.
            <br/><br/>
            After the first round, the user is presented with an overview of the
            AI images presented, and how the user could recognize them going 
            forward. Then, the second round begins, and after the game ends, 
            they are presented with their score, along with encouragement to 
            share their results and to keep practicing. The other pages of the
            website also provide additional resources to learn about AI, such as
            a general overview of what AI images are, as well as recent relevant
            and curated articles.
            <br/><br/>
            You can play the game and see our campaign website <a 
            href='https://campaign-project-jade.vercel.app/'>here</a>. Note that
            the website and game are in Finnish.
          </>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default CommunicationCampaign

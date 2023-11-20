import myImage from '../myImage/programmer-work-laptop-computer-website-code-program-concept_133260-5400-removebg-preview.png'
import '../css/About.css'
function About(){
    return(
        <>
        <h1 className='abtme'> About Me</h1>
      <div className="main1">
      
        <div className="head">
         
          <h1>I'M HAVYAS A M</h1>
          <p>
            Hello there,👋 I'm Havyas, a 21-year-old CSE undergrad and a<br/>
            Computer Science Enthusiast currently on an exhilarating journey<br/>
            through the realm of Software Development, Web Development, and<br/>
            Cross-Platform App Development. I'm really passionate about my work<br/>
            as a Full Stack Developer, and I love to solve complex problems of<br/>
            the real world. I share my learnings through projects, articles, and<br/>
            community engagements. ✍🏻
          </p>
        </div>
        <div>
          <img
            id="gif"
            src={myImage}
            alt=""
            width="100px"
            height="200px"
          />
        </div>
      </div>
        </>
    )
}
export default About;
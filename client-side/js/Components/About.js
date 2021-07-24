import adam from "../../assets/adam.jpg"
import filsan from "../../assets/filsan.jpg"
import rose from "../../assets/rose.jpg"
import danielle from "../../assets/dbosworth.jpg"
import jordan from "../../assets/jordan.jpg"


export default function About() {
  return `
    <div class="team-container">
      <h1>Our Team</h1>
      <div class="team5">
        <div class="team-member">
          <div class="team_img">
            <img src="${adam}" alt="Adam_img" />
          </div>
          <h3>Adam Heinemen</h3>
          <p class="role">Full Stack Developer</p>
          <p>
          I am an aspiring web developer looking to grow my skills as a developer along with my passion for quality and design to strengthen my skill set in the tech industry. My previous experience working in high volume, customer focused environments have helped prepare me to strive under pressure and work well in both team and individual situations. My passion for learning and growing as a person, as well as my laid back, focused attitude allow me to fit in in all situations.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${danielle}" alt="Danielle_img" />
          </div>
          <h3>Danielle Bosworth</h3>
          <p class="role">Full Stack Developer</p>
          <p>
          Started her career in Human Resources where she honed her written and verbal communication skills
          as well as gained a deep understanding for professionalism. 
          She found her love for technology and made a career change into IT where she's excelled in tech and customer service. 
          While in IT, she realized her enjoyment for coding and has been crushing Java, HTML and CSS since.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${filsan}" alt="Filsan_img" />
          </div>
          <h3>Filsan Madar</h3>
          <p class="role">Full Stack Developer</p>
          <p>
          Starting her career working in a laboratory and working exclusively on technology that was built in the late 1990's it to helped to build her deep respect for the strives that have been made in the technology. 
          While working on these systems she found her passion for software development and put the skills she learned working in a biology lab into the tech space. 
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${jordan}" alt="Jordan_img" />
          </div>
          <h3>Jordan Easter</h3>
          <p class="role">Full Stack Developer</p>
          <p>
          Construction professional and engineer, transitioning into an agile software developer with a passion for finding innovative solutions while utilizing creative abilities and methodologies.I enjoy bringing to life the visions of tomorrow through the powerful vehicle of technology. Here in 2021 the opportunity to showcase my skills as it pertains to real-world problems fills me with determination, and I look forward to the opportunity to work with companies whom empower their employees with ground-breaking technology, and seek to find solutions to make our world a better place.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${rose}" alt="Rose_img" />
          </div>
          <h3>Rose Holmes-Minton</h3>
          <p class="role">Full Stack Developer</p>
          <p>
          Creative and industrious software developer with over 5 years of experience teaching MIS courses at major post-secondary colleges and over 5 years experience in database analysis and design and project management in the information technology field with Fortune 500 companies.
          </p>
        </div>
      </div>
    </div>
    `;
}

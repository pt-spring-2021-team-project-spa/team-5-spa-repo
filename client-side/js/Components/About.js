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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aperiam facilis modi sit velit fugit possimus, consectetur eos
            accusamus labore maiores asperiores eum animi laudantium quo
            voluptatibus iste vero cum!
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${danielle}" alt="Danielle_img" />
          </div>
          <h3>Danielle Bosworth</h3>
          <p class="role">Full Stack Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consequatur eveniet, provident laudantium temporibus quasi, voluptas
            sit neque adipisci beatae illum iusto at sed doloribus, ipsa porro!
            Itaque, omnis provident.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${filsan}" alt="Filsan_img" />
          </div>
          <h3>Filsan Madar</h3>
          <p class="role">Full Stack Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quos aliquam, minima deserunt magni perferendis, sunt assumenda
            adipisci fugiat sint quod voluptatibus non praesentium enim
            doloremque veritatis, nisi illo animi.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${jordan}" alt="Jordan_img" />
          </div>
          <h3>Jordan Easter</h3>
          <p class="role">Full Stack Developer</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sed
            natus accusantium quidem fugit libero doloremque earum nostrum
            veritatis odio laborum voluptatibus deserunt porro officia corporis,
            cum autem ipsam quasi.
          </p>
        </div>
        <div class="team-member">
          <div class="team_img">
            <img src="${rose}" alt="Rose_img" />
          </div>
          <h3>Rose Holmes-Minton</h3>
          <p class="role">Full Stack Developer</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            doloribus quia quidem ullam non cum voluptatibus molestiae dolor
            ipsa exercitationem totam quod ipsum deleniti praesentium, nostrum
            sunt dicta quos odio.
          </p>
        </div>
      </div>
    </div>
    `;
}

import cavern from "../../assets/cavern.jpg"
import trek from "../../assets/trek-to-k2-2.jpg"
import sea from "../../assets/redsea-1-1024x768.jpg"

export default function ContactUs() {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/contactus.css">
    <title>JacKr Enterprises</title>
</head>
<body class="contact__container">
    <!-- Header Showcase-->
    <header id="showcase" class="grid">
        <div class="bg-image"></div>
        <div class="content-wrap">
            <h1 class="contact__h1">Welcome to JacKr Enterprises</h1>
            <p class="contact__p">We are an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself."</p>
            <!--a href="#section-b" class="btn">Read More</a-->
        </div>
    </header>

    <!-- Main Area-->
    <main id="main">
        <!-- Section A -->
        <section id="section-a" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Adventure Offerings</h2>
                <div class="content-text">
                    <p>JacKr prides itself on educating all their clients on what adventures are provided and what can be expected on a chosen adventure.  JacKr is constantly changing and seeking to innovate adventures that offer the ultimate in adventure excitement in a fun and safe way.  Past adventures offered include JacKr's Spelunking!, EYA! bka Experience Your Aquarium!, and JT,B! bka Just Trek Baby! adventures.</p>
                </div>
            </div>
        </section>

        <!-- Section B-->
        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card">
                        <img class="contact__img" src="${sea}" alt="">
                        <div class="card-content">
                            <h3 class="card-title">EYA!&#8482</h3>
                            <p class="contact__p">Own an aquarium?  Enjoy visiting major aquariums? Love to visit the tropical fish store?  This adventure is all 3 of those questions...<strong>LIVE AND IN LIVING COLOR!</strong> So come Enjoy Your Aquarium!...EYA!&#8482</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img class="contact__img" src="${cavern}" alt="" srcset="">
                        <div class="card-content">
                            <h3 class="card-title">Spelunking!&#8482</h3>
                            <p class="contact__p">Sure.  The tourist caves are beautiful, fun, and unique to visit.  But why do the tourist thing when you can tame the wilds and mark new paths for future tourists to follow.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img class="contact__img" src="${trek}" alt="" srcset="">
                        <div class="card-content">
                            <h3 class="card-title">JT,B!&#8482</h3>
                            <p class="contact__p">"Just Trek Baby!&#8482" is what we say here at JacKr.  Come test your fortitude with treks that make you forget that the word civilization even exists. </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Section C-->
        <section id="section-c" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">JacKr will handle all your cravings for adventure</h2>
                <p class="contact__p">EYA!&#8482, Spelunking!&#8482, and JT,B!&#8482 are just a sampling of the various exhilarating and thrilling eco-friendly global outdoor adventure.</p>
            </div>
        </section>

        <!-- Section D-->
        <section id="section-d" class="grid">
            <div class="box">
                <h2 class="content-title">Contact Us</h2>
                <p class="contact__p">2645 N High Street Columbus, OH 43202</p>
                <p class="contact__p">1.844.932.2626</p>
                <p class="contact__p">greatadventures@jackr.biz</p>
            </div>
            <div class="box">
                <h2 class="content-title">About Our Company</h2>
                <p class="contact__p">Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>JacKr</strong> was born.</p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer id="main-footer" class="grid">
        <div>JacKr Enterprises</div>
        <div>Web Site Created By <a href="http://wecancodeit.org" target="_blank">We Can Code IT</a></div>
    </footer>
</body>
</html>
`
}
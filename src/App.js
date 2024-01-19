import "./App.css";
import "./boostrap/boostrap.css";
import "../node_modules/bulma/css/bulma.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import HeaderUsual from "../src/photo/header.png";

// Import Komponen Website
import Card from "../src/comp/card";
import MediaSocial from "../src/comp/MediaSocial";

function NavBar() {
  return (
    <nav className=" container navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand styleteks" href="www">
          Rahim
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="md navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active fontstyle"
                aria-current="page"
                href="www"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontstyle" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontstyle" href="#">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fontstyle" href="#">
                Skill
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Space() {
  return <div className="space" id="home"></div>;
}

function HeadEr() {
  return (
    <section>
      <header className="head">
        <div className="title2">
          <div className="teksnama semuawidth">
            <h1>LA ODE RAHIMSYAH</h1>
          </div>
          <div className="tekswitch semuawidth">
            <span className="text first-text">I'm a </span>
            <span className="text sec-text">Full Stack Development</span>
          </div>
          <div className="moto semuawidth">
            <p>
              Hai !!, I am Rahim. I am a full stack developer. I love coding,
              watching movies, listening to music and sports, I am from
              Indonesia, I have the motto "keep working in totality". nice to
              meet you, if you are interested you can contact me by pressing the
              contact button
            </p>
          </div>
          <div className="kontakku">
            <button type="button" className="btn btn-primary" id="btn_contacme">
              Contact Me
            </button>
          </div>
        </div>
        <div className="images">
          <img src={HeaderUsual} alt="myphoto"></img>
        </div>
      </header>
    </section>
  );
}

function Service() {
  return (
    <article id="service" className="page">
      <h2>SERVICE</h2>
      <div
        className="container-fluid d-md-flex  flex-row gap-3 justify-content-center column-gap-3 d-sm-flex
"
      >
        <Card titel="Front -End" />
        <Card titel="Back-End" />
      </div>
    </article>
  );
}

function FooterDesign() {
  return (
    <footer>
      <p>Design By Rasyah, you can see this code in my github</p>
      <a href=""></a>
    </footer>
  );
}
function AllComponent() {
  return (
    <div>
      <NavBar />
      <Space />
      <HeadEr />
      <FooterDesign />
    </div>
  );
}
function App() {
  return <AllComponent />;
}

export default App;

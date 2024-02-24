import "./App.css";
import "./boostrap/boostrap.css";
import "./responsive/fortablet.css";
import "./responsive/forandroid600.css";
import "./responsive/forandroid320.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderUsual from "../src/photo/header.png";
// Import Komponen gambar
import github from "../src/photo/icon/github/icons8-github-100.png";

// Import Komponen Website
import Service from "./component/Service";
import MediaSocial from "../src/component/MediaSocial";
import Skill from "../src/component/Skill";
import Gallery from "../src/component/Galerry";

const NavBar = () => {
  return (
    <nav className=" container navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand styleteks" href="www">
          Rahim
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon btn_size_cs"></span>
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
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontstyle" href="/service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontstyle" href="/gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fontstyle" href="/skill">
                Skill
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Component Home
const Space = () => {
  return <div className="space" id="home"></div>;
};

const HeadEr = () => {
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
            <MediaSocial />
          </div>
        </div>
        <div className="images">
          <img src={HeaderUsual} alt="myphoto"></img>
        </div>
      </header>
    </section>
  );
};

const FooterDesign = () => {
  return (
    <footer className="ft-bg">
      <p>
        Design By <i>Rasyah</i>, you can see this code in My github
      </p>
      <a href="https://github.com/Rasyahodhe">
        <img src={github}></img>
      </a>
    </footer>
  );
};
const Home = () => {
  return (
    <div>
      <Space />
      <HeadEr />
      <FooterDesign />
    </div>
  );
};
const AllComponent = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
};

const App = () => {
  return <AllComponent />;
};

export default App;

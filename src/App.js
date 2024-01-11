import "./App.css";

import HeaderUsual from "../src/photo/header.png";
import FacebookUsual from "../src/photo/icon/facebook/icons8-facebook-100.png";
import InstagramUsual from "../src/photo/icon/instagram/icons8-insta-100.png";
import GithubUsual from "../src/photo/icon/github/icons8-github-100.png";
import WhatsappUsual from "../src/photo/icon/whatsapp/icons8-whatsapp-100.png";
import TwitterUsual from "../src/photo/icon/twitter/icons8-twitter-100.png";
import DownGif from "../src/photo/icon/down/icons8-down.gif";

function NavBar() {
  return (
    <nav>
      <div className="title">
        <h1>Rahim</h1>
        <div className="menu-hamburger">
          <input type="checkbox" id="menu-check"></input>
          <div className="garishamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <ul className="menu gone">
        <li>
          <a href={<HeadEr />}>HOME</a>
        </li>
        <li>
          <a href="www.facebook.com">SERVICE</a>
        </li>
        <li>
          <a href="www.facebook.com">GALERY</a>
        </li>
        <li>
          <a href="www.facebook.com">PORTOFOLIO</a>
        </li>
        <li>
          <a href="www.facebook.com">CONTATC</a>
        </li>
      </ul>
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
            <span className="text sec-text"></span>
          </div>
          <div className="moto semuawidth">
            <p>
              Tetap Bekerja dengan totalitas dan selalu haus akan ilmu, tetap
              berkarya selalu semangat
            </p>
          </div>
        </div>
        <div className="images">
          <img src={HeaderUsual} alt="myphoto"></img>
          <div className="buttonmenusocial">
            <input type="checkbox" id="check-media"></input>
            <img src="" alt=""></img>
          </div>
          <div className="mediasocial">
            <ul className="social">
              <li className="ukurantutupmenumedia">
                <img src={InstagramUsual} alt=""></img>
                <a href="ww">Instagram</a>
              </li>
              <li className="ukurantutupmenumedia">
                <img src={FacebookUsual} alt=""></img>
                <a href="www">Facebook</a>
              </li>
              <li className="ukurantutupmenumedia">
                <img src={WhatsappUsual} alt=""></img>
                <a href="www">Whatsapp</a>
              </li>
              <li className="ukurantutupmenumedia">
                <img src={GithubUsual} alt=""></img>
                <a href="www">Github</a>
              </li>
              <li className="ukurantutupmenumedia">
                <img src={TwitterUsual} alt=""></img>
                <a href="www">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <article id="service" className="page">
        <h2>SERVICE</h2>
      </article>
    </section>
  );
}
function AllComponent() {
  return (
    <div>
      <NavBar />
      <Space />
      <HeadEr />
    </div>
  );
}
function App() {
  return <AllComponent />;
}

export default App;

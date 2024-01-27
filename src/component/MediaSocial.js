import "./css/MediaSocial.css";
import "../boostrap/boostrap.css";
import FacebookUsual from "../photo/icon/facebook/icons8-facebook-100.png";
import InstagramUsual from "../photo/icon/instagram/icons8-insta-100.png";
import GithubUsual from "../photo/icon/github/icons8-github-100.png";
import WhatsappUsual from "../photo/icon/whatsapp/icons8-whatsapp-100.png";
import TwitterUsual from "../photo/icon/twitter/icons8-twitter-100.png";

function MediaSocial() {
  return (
    // <div className="mediasocial">
    //   <ul className="social">
    //     <li className="ukurantutupmenumedia">
    //       <img src={InstagramUsual} alt=""></img>
    //       <a href="ww">Instagram</a>
    //     </li>
    //     <li className="ukurantutupmenumedia">
    //       <img src={FacebookUsual} alt=""></img>
    //       <a href="www">Facebook</a>
    //     </li>
    //     <li className="ukurantutupmenumedia">
    //       <img src={WhatsappUsual} alt=""></img>
    //       <a href="www">Whatsapp</a>
    //     </li>
    //     <li className="ukurantutupmenumedia">
    //       <img src={GithubUsual} alt=""></img>
    //       <a href="www">Github</a>
    //     </li>
    //     <li className="ukurantutupmenumedia">
    //       <img src={TwitterUsual} alt=""></img>
    //       <a href="www">Twitter</a>
    //     </li>
    //   </ul>
    // </div>
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Contact
      </button>
      <ul className="dropdown-menu bungkus">
        <li className="isi">
          <img className="ukurangambar" src={InstagramUsual} alt=""></img>
          <a
            className="dropdown-item"
            href="https://www.instagram.com/rahimsyahode/"
          >
            Instagram
          </a>
        </li>
        <li className="isi">
          <img className="ukurangambar" src={FacebookUsual} alt=""></img>
          <a
            className="dropdown-item"
            href="https://www.facebook.com/rasyah.smandara?mibextid=ZbWKwL"
          >
            Facebook
          </a>
        </li>
        <li className="isi">
          <img className="ukurangambar" src={WhatsappUsual} alt=""></img>
          <a className="dropdown-item" href="https://wa.link/7h4nkq">
            Whatsapp
          </a>
        </li>
        <li className="isi">
          <img className="ukurangambar" src={GithubUsual} alt=""></img>
          <a className="dropdown-item" href="https://github.com/Rasyahodhe">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MediaSocial;

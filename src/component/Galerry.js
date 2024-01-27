import "../boostrap/boostrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/Gallery.css";

const Image = (props) => {
  return (
    <li className="gl_element_li">
      <div className="gl_element_li_component">
        <img src={props.nameimg}></img>
        <h2> Event Bornto Protect </h2>
        <p>I was nominated for 100 borntoprotect people</p>
      </div>
    </li>
  );
};

const Gallery = () => {
  var images = [];
  for (let i = 0; i < 10; i++) {
    images.push(`https://source.unsplash.com/random/200×200/?potrait=${[i]}}`);
  }
  return (
    <div>
      <h1 className="gl_h1">Gallery</h1>
      <ul className="gl_cont_ul">
        <span className="backgroundspan"></span>
        {images.map((image) => (
          <Image nameimg={image} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;

import HeaderUsual from "../photo/header.png";

function Card({ titel }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={HeaderUsual} alt="Front End" className="card-img-top"></img>
        <h5 className="card-title">{titel ? titel : "Front End"}</h5>
        <p className="card-text">
          Lorem ipsum ini adalah pekerjaan yang bisa saya tawarkan jadi apa anda
          berminat !
        </p>
        <a href="" className="btn btn-primary">
          Go Somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;

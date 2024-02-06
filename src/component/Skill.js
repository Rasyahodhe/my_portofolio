import "../boostrap/boostrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/Skill.css";

var Skillku = [
  {
    namaSkill: "Javascript",
    sr: "https://raw.githubusercontent.com/Rasyahodhe/my_portofolio/develop/src/photo/Skill/javascript.png",
  },
  {
    namaSkill: "HTML",
    sr: "https://raw.githubusercontent.com/Rasyahodhe/my_portofolio/develop/src/photo/Skill/html.png",
  },
  {
    namaSkill: "CSS",
    sr: "https://raw.githubusercontent.com/Rasyahodhe/my_portofolio/develop/src/photo/Skill/css.png",
  },
  {
    namaSkill: "React Js",
    sr: "https://raw.githubusercontent.com/Rasyahodhe/my_portofolio/develop/src/photo/Skill/react.png",
  },
  {
    namaSkill: "Boostrap",
    sr: "https://raw.githubusercontent.com/Rasyahodhe/my_portofolio/develop/src/photo/Skill/bostrap.png",
  },
];

const NameSkill = (props) => {
  return (
    <li>
      <div className="skl_li_content">
        <img src={props.namegambar}></img>
        <h2>{props.skillname}</h2>
      </div>
    </li>
  );
};

const Skill = () => {
  return (
    <>
      <h1 className="skl_head">My Skill</h1>
      <ul className="skl_container_element">
        {Skillku.map((skills) => (
          <NameSkill skillname={skills.namaSkill} namegambar={skills.sr} />
        ))}
      </ul>
    </>
  );
};

export default Skill;

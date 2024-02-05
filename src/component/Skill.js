import "../boostrap/boostrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/Skill.css";

var Skillku = [
  { namaSkill: "Javascript", sr: "" },
  { namaSkill: "HTML", sr: "" },
  { namaSkill: "CSS", sr: "" },
  { namaSkill: "React Js", sr: "" },
  { namaSkill: "Boostrap", sr: "" },
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

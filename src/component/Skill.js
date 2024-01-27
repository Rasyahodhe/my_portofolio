import "../boostrap/boostrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/Skill.css";

const NameSkill = (props) => {
  return (
    <li>
      <h2>{props.skillname}</h2>
    </li>
  );
};

const Skill = () => {
  var Skillku = [
    "JavaScript",
    "HTML",
    "CSS",
    "React Js",
    "Bostrap",
    "bulma",
    "materealize",
  ];
  return (
    <>
      <h1>MY SKILL</h1>
      <ul>
        {Skillku.map((skills) => (
          <NameSkill skillname={skills} />
        ))}
      </ul>
    </>
  );
};

export default Skill;

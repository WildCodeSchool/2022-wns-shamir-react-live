import ISkill from "../interfaces/ISkill";

const Skill = ({ name, rating }: ISkill) => (
  <li>
    {name}
    {rating ? <span className="votes">{rating}</span> : <div></div>}
  </li>
);

export default Skill;

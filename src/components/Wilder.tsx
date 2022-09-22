import blank_profile from "../assets/blank_profile.png";
import IWilder from "../interfaces/IWilder";
import Skill from "./Skill";

interface IWilderComponentProps {
  wilderInfos: IWilder;
  onDeleteButtonClicked: () => void;
  onEditButtonClicked: () => void;
}

const Wilder = ({
  wilderInfos,
  onDeleteButtonClicked,
  onEditButtonClicked,
}: IWilderComponentProps) => (
  <article className="card">
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>{wilderInfos.name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {wilderInfos.skills?.map((skill) => (
        <Skill key={skill.id} name={skill.name} rating={skill.rating} />
      ))}
    </ul>
    <button onClick={onDeleteButtonClicked}>Supprimer</button>
    <button onClick={onEditButtonClicked}>Edit</button>
  </article>
);

export default Wilder;

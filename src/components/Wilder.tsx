import blank_profile from "../assets/blank_profile.png";
// import Skill from "./Skill";

interface IWilderComponentProps {
  wilderInfos: {
    name: string;
  };
}

const Wilder = ({ wilderInfos }: IWilderComponentProps) => (
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
      {/* {wilderInfos.skills?.map((skill) => (
        <Skill
          key={skill.title}
          skillName={skill.name}
          skillRating={skill.votes}
        />
      ))} */}
    </ul>
    {/* <button onClick={onDeleteButtonClicked}>Supprimer</button> */}
  </article>
);

export default Wilder;

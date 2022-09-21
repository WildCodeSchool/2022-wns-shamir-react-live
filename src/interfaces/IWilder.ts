import ISkill from "./ISkill";

export default interface IWilder {
  id: number;
  name: string;
  skills: ISkill[];
}

import { IUser } from "../models/userModel";
export default class User implements IUser{
  id: number;
  email: string;
  steamID: string;
  license: string;
  name: string;
  password: string;
  isDead: boolean;
  exp: number;
  money: number;
  bank: number;
  public constructor(data: IUser){
    this.id = data.id;
    this.email = data.email;
    this.steamID = data.steamID;
    this.license = data.license;
    this.name = data.name;
    this.password = data.password;
    this.isDead = data.isDead;
    this.exp = data.exp;
    this.money = data.money;
    this.bank = data.bank;
  }
}
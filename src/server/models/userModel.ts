import { model, Schema, Model, Document } from 'mongoose';
import CONFIG from '../config/config.js'

export interface IUser {
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
}

const UserSchema = new Schema<IUser>({
  id: {type: Number, default: 0, unique: true, required: true},
  email: {type: String, required: true, unique: true},
  steamID: {type: String, required: true},
  license: {type:String, required: true},
  name: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isDead: {type: Boolean, required: true, default: false},
  exp: {type: Number, default: 0},
  money: {type: Number, default: CONFIG.DEFAULT_MONEY},
  bank: {type: Number, default: CONFIG.DEFAULT_BANK},

})

const User: Model<IUser> = model('User', UserSchema)

export default User;
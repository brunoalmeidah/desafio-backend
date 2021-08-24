import { model, Schema } from 'mongoose';
import IHobby from '../interfaces/IHobby';

const schema = new Schema<IHobby>({
  name: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  year: { type: Number, required: true },
});

export default model<IHobby>('Hobby', schema);
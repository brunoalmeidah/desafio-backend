import { model, Schema } from 'mongoose';
import IUser from '../interfaces/IUser';

const schema = new Schema<IUser>({
  name: { type: String, required: true },
  hobbies: [{type: Schema.Types.ObjectId, ref: 'Hobby'}]
});

export default model<IUser>('User', schema);
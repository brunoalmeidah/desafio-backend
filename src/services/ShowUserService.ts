import mongoose from 'mongoose';
import AppError from  '../shared/errors/AppError';
import IUser from'../interfaces/IUser'
import UserModel from '../schemas/User';


class ShowUserService {
  public async execute(id: string) : Promise<IUser | null> {
    const user = await UserModel.aggregate().lookup({
      from: 'hobbies',
      localField: 'hobbies',
      foreignField: '_id',
      as: 'hobbies'
    }).match({ _id: new mongoose.Types.ObjectId(id) })
    .exec()
    .then((users: IUser[]) => users[0])
    if(!user) throw new AppError('User not found', 404);
    return user;
  }
}

export default ShowUserService;
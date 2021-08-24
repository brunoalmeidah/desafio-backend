import IHobby from'../interfaces/IHobby'
import UserModel from '../schemas/User';
import HobbyModel from '../schemas/Hobby';
import AppError from '../shared/errors/AppError';

interface IRequest {
  userId: string;
  experienceLevel: string;
  name: string;
  year: number;
}
class CreateHobbyService {
  public async execute({userId, experienceLevel, name, year }: IRequest) : Promise<IHobby> {
    const user = await UserModel.findById(userId);
    if(!user) throw new AppError('User not Found');
    const hobby = new HobbyModel({experienceLevel, name, year});
    const newHobby = await hobby.save();
    user.hobbies.push(newHobby);
    user.save()
    return newHobby;
  }
}

export default CreateHobbyService;
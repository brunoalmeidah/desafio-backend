import AppError from  '../shared/errors/AppError';
import IUser from'../interfaces/IUser'
import UserModel from '../schemas/User';

interface IRequest {
  name: string;
}
class UpdateUserService {
  public async execute(id: string, { name }: IRequest) : Promise<IUser> {
    if(!name) throw new AppError('Name is required')
    const user = await UserModel.findById(id);
    if(!user) throw new AppError('User not found', 404);
    user.name = name
    return user.save()
  }
}

export default UpdateUserService;
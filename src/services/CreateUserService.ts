import AppError from  '../shared/errors/AppError';
import IUser from'../interfaces/IUser'
import UserModel from '../schemas/User';

interface IRequest {
  name: string;
}
class CreateUserService {
  public async execute({ name }: IRequest) : Promise<IUser> {
    if(!name) throw new AppError('Name is required')
    const user = new UserModel({ name });
    return user.save()
  }
}

export default CreateUserService;
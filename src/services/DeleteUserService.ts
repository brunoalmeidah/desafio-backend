import AppError from  '../shared/errors/AppError';
import UserModel from '../schemas/User';

class DeleteUserService {
  public async execute(id: string) : Promise<void> {
    const user = await UserModel.findById(id);
    if(!user) throw new AppError('User not found', 404);
    await user.delete();
  }
}

export default DeleteUserService;
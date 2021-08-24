import IUser from'../interfaces/IUser'
import UserModel from '../schemas/User';

class ListUsersService {
  public async execute() : Promise<IUser[]> {
    const users = await UserModel.find()
    return users
  }
}

export default ListUsersService;
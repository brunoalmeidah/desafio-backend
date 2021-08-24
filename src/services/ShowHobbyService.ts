import AppError from  '../shared/errors/AppError';
import IHobby from'../interfaces/IHobby'
import HobbyModel from '../schemas/Hobby';


class ShowHobbyService {
  public async execute(id: string) : Promise<IHobby | null> {
    const hobby = await HobbyModel.findById(id);
    if(!hobby) throw new AppError('Hobby not found', 404);
    return hobby;
  }
}

export default ShowHobbyService;
import AppError from  '../shared/errors/AppError';
import HobbyModel from '../schemas/Hobby';

class DeleteHobbyService {
  public async execute(id: string) : Promise<void> {
    const hobbie = await HobbyModel.findById(id);
    if(!hobbie) throw new AppError('Hobbie not found', 404);
    await hobbie.delete();
  }
}

export default DeleteHobbyService;
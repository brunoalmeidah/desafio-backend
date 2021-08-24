import AppError from  '../shared/errors/AppError';
import IHobby from'../interfaces/IHobby'
import HobbieModel from '../schemas/Hobby';

interface IRequest {
  name: string;
  experienceLevel: string;
  year: number
}
class UpdateHobbyService {
  public async execute(id: string, { name, experienceLevel, year }: IRequest) : Promise<IHobby> {
    const hobby = await HobbieModel.findById(id);
    if(!hobby) throw new AppError('User not found', 404);
    hobby.name = name;
    hobby.experienceLevel = experienceLevel;
    hobby.year = year;
    return hobby.save()
  }
}

export default UpdateHobbyService;
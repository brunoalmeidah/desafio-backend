import { Request, Response } from 'express';
import CreateHobbyService from '../services/CreateHobbyService';
import DeleteHobbyService from '../services/DeleteHobbyService';
import ShowHobbyService from '../services/ShowHobbyService';
import UpdateHobbyService from '../services/UpdateHobbyService';
class HobbiesController {
  
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showHobby = new ShowHobbyService()
    const Hobby = await showHobby.execute(id);
    return response.json(Hobby);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const createHobby = new CreateHobbyService()
    const Hobby = await createHobby.execute(body);
    return response.json(Hobby);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;
    const updateHobby = new UpdateHobbyService()
    const Hobby = await updateHobby.execute(id, body);
    return response.json(Hobby);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteHobby = new DeleteHobbyService();
    await deleteHobby.execute(id)
    return response.status(204).send();
  }
}

export default new HobbiesController()
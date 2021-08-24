import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUsersService from '../services/ListUsersService';
import ShowUserService from '../services/ShowUserService';
import UpdateUserService from '../services/UpdateUserService';
class UsersController {

  public async index(_: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersService();
    const users = await listUsers.execute();
    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showUser  = new ShowUserService()
    const user = await showUser.execute(id);
    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;
    const createUser = new CreateUserService();
    const user = await createUser.execute(body);
    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;
    const updateUser = new UpdateUserService();
    const user = await updateUser.execute(id, body);
    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUser = new DeleteUserService();
    await deleteUser.execute(id)
    return response.status(204).send();
  }

}

export default new UsersController()
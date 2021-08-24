import mongoose from 'mongoose';
import should from 'should';
import CreateUserService from '../services/CreateUserService';

let createUser: CreateUserService;

describe('Users tests', () => {
  before(()=>{
    mongoose.connect('mongodb://localhost:27017/desafiobackend', {useNewUrlParser: true, useUnifiedTopology: true});
    createUser = new CreateUserService()
  })
  after(()=>{
    mongoose.disconnect();
  })
  it('Should create a new user', async function() {
    const body = {
      name: 'Bruno de Almeida Honorato'
    }
    const newUser = await createUser.execute(body);
    should(newUser).not.be.null();
    newUser.should.have.property('_id');
    newUser.should.have.property('name');
    newUser.name.should.be.eql(body.name);
  });
});
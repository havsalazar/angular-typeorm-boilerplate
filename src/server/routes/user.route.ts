import * as express from 'express';
import { User } from './../entity/user.entity';
import AppDataSource from './../data-source';

const router = express.Router();
const UserRepository = AppDataSource.getRepository(User);

router.get('/', async (req, res, next) => {
  try {
    const users = await UserRepository.find();
    res.status(200).send(users);
  } catch (error) { 
    res.status(500).send(error);
  }
});

router.get('/getUserById/:id', async (req, res, next) => {
  try {
    const id = req.params['id'];
    const users = await UserRepository.findOneBy({id});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const tempUser=await UserRepository.create(req.body)
    const result = await UserRepository.save(tempUser);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await  UserRepository.findOneBy({
        id: req.params.id,
    })
    UserRepository.merge(user, req.body)
    const results = await UserRepository.save(user)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await UserRepository.delete(req.params.id)
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router };

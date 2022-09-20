import { sign } from '../helpers/jwtHelper.js';
import User from '../models/user.js';

const usersController = {
  async login(req, res, next) {
    try {
      const { name, password } = req.body;
      if (!name || !password) {
        throw { name: 'BadRequest' };
      }

      const user = User.findByName(name);
      if (!user) {
        throw { name: 'UserNotFound' };
      }
      if (user.password !== password) {
        throw { name: 'PasswordWrong' };
      }

      const token = sign({ id: user.id, name: user.name });
      res.status(200).json({ token });
    } catch (error) {
      next(error.name);
    }
  },
};

export default usersController;

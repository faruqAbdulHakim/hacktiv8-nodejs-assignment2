import { verify } from '../helpers/jwtHelper.js';

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers['x-token'];
    const { id, name } = verify(token);
    req.user = { id, name };
    next();
  } catch (error) {
    next(error.name);
  }
};

export default authMiddleware;

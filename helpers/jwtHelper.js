import jwt from 'jsonwebtoken';

/**
 *
 * @param {object | string} payload
 * @returns
 */
export const sign = (payload) => {
  return jwt.sign(payload, 'inisecretkey');
};

/**
 *
 * @param {string} token
 * @returns
 */
export const verify = (token) => {
  return jwt.verify(token, 'inisecretkey');
};

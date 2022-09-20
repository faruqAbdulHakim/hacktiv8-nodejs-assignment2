import { users } from '../data/index.js';

class User {
  /**
   *
   * @param {string} name
   * @returns {{id: number, name: string, password: string} | undefined} user object
   */
  static findByName(name) {
    return users.find((user) => user.name === name);
  }
}

export default User;

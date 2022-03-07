import { API } from './API';
import { BASE_URL } from '../../config';

class UsersAPI extends API {
  getUsers() {
    return fetch(`${ this._baseURL }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

export const usersAPI = new UsersAPI({
  baseURL: BASE_URL
});

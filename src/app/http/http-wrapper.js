import axios from "axios/index";

const BASE_URL = 'http://localhost:3000';
const DIVIDER = '/';
const USER_PL = 'data-users';

let usersArray = [];

class HttpWrapperClass {
  getUserById(id) {
    axios
      .get(BASE_URL + DIVIDER + USER_PL + DIVIDER + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getAllUsers(returnUsersCallback) {
    axios
      .get(BASE_URL + DIVIDER + USER_PL)
      .then((resp) => {
        resp.data.map(user => usersArray.push(user.last_name));
        returnUsersCallback(usersArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const httpWrapper = new HttpWrapperClass();
export {httpWrapper}

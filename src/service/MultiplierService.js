import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8901/api/v1/multiplier';

class MultiplierService {

    fetchMultiplier() {
        console.log('fetchMultiplier');
        return axios.get(USER_API_BASE_URL);
    }
    // fetchUserByFirstName(firstName) {
    //     console.log('fetchUserByFirstName = ' + firstName);
    //     return axios.get(USER_API_BASE_URL + '/search/' + firstName);
    // }
    //
    // fetchUserById(userId) {
    //     console.log('fetchUserById = ' + userId);
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }
    //
    // deleteUser(userId) {
    //     console.log('deleteUser = ' + userId);
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }
    //
    // addUser(user) {
    //     console.log('addUser = ' + user);
    //     return axios.post(USER_API_BASE_URL, user);
    // }
    //
    //
    // addUserList(userList) {
    //
    //     return axios.post(USER_API_BASE_URL + '/list' , userList);
    // }
    //
    // editUser(user) {
    //     console.log('editUser = ' + user);
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }
    //
    // login(userName, password) {
    //     console.log('userName = ' + userName);
    //     console.log('password = ' + password);
    //     return axios.get(USER_API_BASE_URL + '/login/'+ userName + '/' + password);
    // }

}

export default new MultiplierService();
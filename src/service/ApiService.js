import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8901/api/v1/users';
//const USER_LIST_API_URL = 'http://localhost:3000/api/v1/usersList';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

class ApiService {

    fetchUsers() {
        console.log('fetchUsers');
        return axios.get(USER_API_BASE_URL);
    }
    fetchUserByFirstName(firstName) {
        console.log('fetchUserByFirstName = ' + firstName);
        return axios.get(USER_API_BASE_URL + '/search/' + firstName);
    }

    fetchUserById(userId) {
        console.log('fetchUserById = ' + userId);
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        console.log('deleteUser = ' + userId);
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        console.log('addUser = ' + user);
        return axios.post(USER_API_BASE_URL, user);
    }

    addUserList(userList) {
        console.log('addUserList = ' + userList);
        return axios.post(USER_API_BASE_URL + '/list' , userList, headers);
    }

    editUser(user) {
        console.log('editUser = ' + user);
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
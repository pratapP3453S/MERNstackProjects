import axios from 'axios';

export function signupUserAPI(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post("/api/v1/users/signup", userData);
            resolve(response.data);
        } catch (error) {
            reject(error); 
        }
    });
}

export function loginUserAPI(userData) {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.post("/api/v1/users/login", userData);
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}

export function logoutUserAPI() {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.post("/api/v1/users/logout")
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
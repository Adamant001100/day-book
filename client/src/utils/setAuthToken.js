import axios from 'axios';

const setAuthToken = token => {
    if(token) {
       // Apply authorization token to every request if logged in
       // Применить авторизационный токен к каждому запросу, если залогинен
       axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;


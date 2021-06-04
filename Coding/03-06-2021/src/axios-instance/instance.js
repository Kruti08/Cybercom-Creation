import axios from 'axios';

const api = axios.create({
    baseURL: 'https://react-app-8080d-default-rtdb.firebaseio.com/',
});

api.interceptors.request.use(function (config) {
    // config.text = "testing";
    // console.log(config);
    document.querySelector('#overlay').style.display = 'block';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

api.interceptors.response.use(function (response) {
    // response.test = "trying"
    // console.log(response);
    document.querySelector('#overlay').style.display = 'none';
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default api;
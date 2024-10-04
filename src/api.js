import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:8080'
});

// Interceptor to add token to every request
api.interceptors.request.use(


    (config) => {
      const noAuthEndpoints = ['user/signup', 'user/login'];
      const requiresAuth = !noAuthEndpoints.some(endpoint => config.url.includes(endpoint));

      const token = localStorage.getItem('token');
      config.headers['Content-Type'] = `application/json`;

      if (token  && requiresAuth) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      console.log('CONFIG : ',config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export const sendMessage = (message) => {
    return api.post('api/messages/send', message);
  };
  
  export const fetchMessages = () => {
    return api.get('/messages');
  };

  export const login = (credentials) => {
    console.log("Logging :", credentials);
    return api.post('chatv1/user/login', credentials); // No token included
};

export const signup = (userData) => {
    return api.post('chatv1/user/signup', userData); // No token included
};
  
  export default api;

import axios from 'axios';

// let token;
// if (window.localStorage.getItem('persist:token')) {
//      token = JSON.parse(JSON.parse(window.localStorage.getItem('persist:token')).accesToken)
//   console.log(token)
//   console.log(JSON.stringify(window.localStorage.getItem('persist:token').accesToken))
//     console.log(`Bearer ${token}`)

// }

const instance = axios.create({
  baseURL: ' https://wallet-project.cyclic.app/',
});

instance.interceptors.request.use(config => {
  //   console.log(

  const token = JSON.parse(
    JSON.parse(window.localStorage.getItem('persist:token')).accesToken
  );
  //   );
  //  config.headers.Authorization = `Bearer ${}`
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(
      JSON.parse(window.localStorage.getItem('persist:token')).accesToken
    )}`;
  }
  //   console.log('config:', config);

  //   console.log('config.headers:', config.headers);

  return config;
});

export default instance;

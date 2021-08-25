import axios from 'axios';

const APP_ID =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb';
const APP_URL = 'https://challenge-fielo.herokuapp.com';

const requestHeaders = (token) => {
  return {
    headers: {
      'x-access-token': token,
    },
  };
};

const apis = axios.create({
  baseURL: APP_URL,
  crossDomain: true,
});

//
// Bing Image
//
export const getBackgroundImage = () =>
  apis.get('http://localhost:3000/api/bing');

//
//  Auth
//
export const getAuth = () =>
  apis.post('auth', { headers: { 'x-app-id': APP_ID } });

//
//  User
//
export const getUsers = (token) => apis.get('users', requestHeaders(token));
export const getUserId = (token, id) =>
  apis.get(`users/${id}`, requestHeaders(token));
export const getUserActivities = (token, id) =>
  apis.get(`users/${id}/activities`, requestHeaders(token));
export const getUserPrograms = (token, id) =>
  apis.get(`programs/${id}`, requestHeaders(token));
export const getUserLevel = (token, id) =>
  apis.get(`programs/${id}/levels`, requestHeaders(token));

const Api = {
  getAuth,
  getUsers,
  getUserId,
  getUserActivities,
  getUserPrograms,
  getUserLevel,
  getBackgroundImage,
};

export default Api;

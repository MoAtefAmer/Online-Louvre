import jwt from 'jwt-decode';
import { httpService } from './http.service';

const apiEndPoint = process.env.REACT_APP_BASE_URL;

const apiLink = apiEndPoint + '/login';

const tokenKey = 'token';
const userRoleKey = 'userRole';
const usernameKey ='username'

export const authService = {
  login,
  getJwt,
  logout,
  getCurrentUserRole,
  tokenKey,
  userRoleKey,
  usernameKey,
  // getCurrentUser,
};

async function login(username, password) {
  const data = await httpService.post(apiLink, { username, password });
  const authMsg = data.data;
  const { token } = authMsg;

  const user = jwt(token);

//  const asd= await httpService.setJwt(token);
//  console.log(asd)
  localStorage.setItem(userRoleKey, user.userRole);
  localStorage.setItem(tokenKey, token);
  localStorage.setItem(usernameKey,user.username)

  return data;
}

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userRoleKey);
  localStorage.removeItem(usernameKey)
   httpService.setJwt('');
  document.location.href('/')
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function getCurrentUserRole() {
  try {
    const role = localStorage.getItem(userRoleKey);
    return role;
  } catch (ex) {
    return null;
  }
}

// function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     const user = jwt(jwt);
//     return user;

//   } catch (ex) {
//     return null;
//   }
// }

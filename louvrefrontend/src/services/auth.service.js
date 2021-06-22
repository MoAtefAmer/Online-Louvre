import jwtDecode from "jwt-decode";
import {httpService} from "./http.service";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl + "/login";
const tokenKey = "token";
const refreshTokenKey = "refreshToken";
const cancel = 'cancelRequests';

export const authService = {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt,
  removeJwtToken,
  refreshToken,
  setCancelRequests,
  getCancelRequests,
};

async function login(phone, password) {
  const {data: jwt} = await httpService.post(apiEndpoint, {phone, password});
  return jwt;
}

function logout() {
  localStorage.removeItem(tokenKey);
  httpService.setJwt('');
}

async function loginWithJwt(jwt, refreshToken) {
  localStorage.setItem(tokenKey, jwt);
  if (refreshToken !== null) {
    localStorage.setItem(refreshTokenKey, refreshToken);
  }
  httpService.setJwt(jwt);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt).user;
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function removeJwtToken() {
  localStorage.removeItem(tokenKey);
  httpService.setJwt('');
}

async function refreshToken() {
  removeJwtToken();
  const refreshToken = localStorage.getItem(refreshTokenKey);
  const response = await httpService.post(`${apiEndpoint}/token`, { refreshToken });
  if (response) loginWithJwt(response.data.token, null);
  return response.data.token;
}

function setCancelRequests(boolCancel) {
  localStorage.setItem(cancel, boolCancel);
}

function getCancelRequests() {
  return localStorage.getItem(cancel);
}
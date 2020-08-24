import { AsyncStorage } from 'react-native';
import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  // if (!token) throw new Error('no token');
  return token;
}

export async function isLoggedIn() {
  const res = await fetch(`${URI}/user/isloggedin`, {
    method: 'get',
    headers: {
      authorization: await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function register(body) {
  const res = await fetch(`${URI}/user/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function login(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getArticles(offset) {
  const res = await fetch(`${URI}/articles/${offset}`, {
    method: 'get',
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getArticle(id) {
  const res = await fetch(`${URI}/article/${id}`, {
    method: 'get',
    headers: {
      authorization: await getToken(),
    }
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function createFavorite(id) {
  const res = await fetch(`${URI}/favorite/create/${id}`, {
    method: 'post',
    headers: {
      authorization: await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getFavorites(id) {
  const res = await fetch(`${URI}/favorite/get`, {
    method: 'get',
    headers: {
      authorization: await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

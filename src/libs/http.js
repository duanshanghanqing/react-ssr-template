import axios from 'axios';

export const createHttp = (option = {}) => {
  const instance = axios.create({
    baseURL: '',
    params: {},
    ...option,
  });
  return instance;
};

export const apiMap = {
  dog: 'https://dog.ceo',
  cat: 'https://api.thecatapi.com',
};

export const dogAPI = createHttp({
  baseURL: apiMap.dog,
});

export const catAPI = createHttp({
  baseURL: apiMap.cat,
});

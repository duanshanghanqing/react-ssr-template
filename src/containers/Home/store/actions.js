import { http } from 'src/libs';

export const CHANGE_HOME_DOG = 'CHANGE_HOME_DOG';
export const changeDog = data => ({
  type: CHANGE_HOME_DOG,
  data,
});
export const getDog = () => dispatch => http.dogAPI.get('/api/breeds/image/random').then((res) => {
  dispatch(changeDog(res.data));
});

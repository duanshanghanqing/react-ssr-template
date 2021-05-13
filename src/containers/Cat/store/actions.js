import { http } from 'src/libs';

export const CHANGE_CAT_LIST = 'CHANGE_CAT_LIST';
export const changeList = data => ({
  type: CHANGE_CAT_LIST,
  data,
});
export const getCatList = () => dispatch => http.catAPI.get('/v1/images/search?limit=10&size=full&sub_id=demo-a5f059').then((res) => {
  dispatch(changeList(res.data));
});

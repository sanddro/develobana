import { ERRORS, LOGIN_USER } from '../types';
import { fetchPost, currentUser } from '../../helpers';

const register = (registerInfo, history) => async dispatch => {
    const response = await fetchPost('/api/user/register', registerInfo);
    const data = await response.json();

    if(!response.ok){
      dispatch({ type: ERRORS, data });
    }else {
      history.push('/login');
    }

};

const login = (loginInfo, history) => async dispatch => {
  const response = await fetchPost('/api/user/login', loginInfo);
  const data = await response.json();

  if(!response.ok){
    dispatch({ type: ERRORS, data });
  }else {
    const token = data.token;
    localStorage.setItem('jwttoken', token);
    dispatch({ type: LOGIN_USER, data: currentUser() });
  }

};


export { register, login };
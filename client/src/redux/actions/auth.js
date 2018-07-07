import { ERRORS } from '../types';

const register = (registerInfo, history) => async dispatch => {
    const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerInfo)
    });

    const data = await response.json();

    if(!response.ok){
      dispatch({ type: ERRORS, data });
    }else {
      history.push('/home');
    }

};

export { register };
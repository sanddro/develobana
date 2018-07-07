import jwt_decode from 'jwt-decode';
import { LOGIN_USER } from './redux/types';

export async function fetchPost(url, data) {
    return fetchCustom('POST', url, data);
} 

export async function fetchGet(url, data) {
    return fetchCustom('GET', url, data);
}

export function currentUser(){
    const token = localStorage.jwttoken;
    if(token){
        console.log(jwt_decode(token));
        return jwt_decode(token);
    }
    return false;    
}

export function setCurrUser(store) {
    if(localStorage.jwttoken){
        const user = jwt_decode(localStorage.jwttoken);
        store.dispatch({
            type: LOGIN_USER,
            data: user
        });
    }
}

function fetchCustom(method, url, data) {
    let headers = {
        'Content-Type': 'application/json',
    }

    const token = localStorage.getItem('jwttoken');
    console.log('token', token);
    if(token)
        headers.Authorization = token;

    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data)
    });
}
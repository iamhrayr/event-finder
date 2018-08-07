import { FETCH_USER } from './actionTypes';
import firebase from '../firebase';

export const fetchUser = () => {
    return dispatch => {
        firebase.onAuthStateChanged(user => {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        });
    }
}



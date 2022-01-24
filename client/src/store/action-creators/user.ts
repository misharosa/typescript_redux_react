import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionType.FETCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response.data)
            setTimeout(() => {
                dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({ type: UserActionType.FETCH_USERS_ERROR, payload: 'Виникла помилка при завантаженні користувачів' })
        }
    }
}

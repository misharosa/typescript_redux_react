export interface UserState {
    users: User[];
    loading: boolean;
    error: null | string,
}

interface User {
    address: Address;
    company: Company;
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
}

interface Geo {
    lat: string
    lng: string
}

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
    type: UserActionType.FETCH_USERS;
}

interface FetchUserSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActionType.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;
import { createAction, createReducer } from '@reduxjs/toolkit';
import { fetchRegisterUser } from '../thunk/FetchUser';

interface IRegisterState {
    credentials : {
        Pseudo:string
        email : string,
        password: string,
        creer_le:string,
        //avatar: string
    },
    passwordConfirm: string,
    errorMessage: string | null,
    isRegisterSucceed: boolean,
}

const initialState:IRegisterState = {
    credentials  : {
        Pseudo:"",
        email : "",
        password:"",
        creer_le:new Date(Date.now()).toLocaleString().substring(0, 10).replaceAll("/", "-")
        //avatar: ""
    },
    passwordConfirm:"",
    errorMessage:null,
    isRegisterSucceed: false,
};

export const changeErrorMessageRegisterValue = createAction<string>('register/changeErrorMessageRegisterValue')
export const changeNomRegisterValue = createAction<string>('register/changeNomRegisterValue')
export const changeEmailRegisterValue = createAction<string>('register/changeEmailRegisterValue')
export const changePasswordRegisterValue = createAction<string>('register/changePasswordRegisterValue')
export const changePasswordConfirmRegisterValue = createAction<string>('register/changePasswordConfirmRegisterValue')
export const changeAvatarRegisterValue = createAction<string>('register/changeAvatarRegisterValue')

const registerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeErrorMessageRegisterValue, (state, action) => {
            state.errorMessage = action.payload
        })
        .addCase(changeNomRegisterValue, (state, action) => {
            state.errorMessage = null
            state.credentials.Pseudo = action.payload
        })
        .addCase(changeEmailRegisterValue, (state, action) => {
            state.errorMessage = null
            state.credentials.email = action.payload
        })
        .addCase(changePasswordRegisterValue, (state, action) => {
            state.errorMessage = null
            state.credentials.password = action.payload
        })
        .addCase(changePasswordConfirmRegisterValue, (state, action) => {
            state.errorMessage = state.passwordConfirm === state.credentials.password  ? null : "Les mots de passe doivent être identique"
            state.passwordConfirm = action.payload
        })
        .addCase(changeAvatarRegisterValue, (state) => {
            state.errorMessage = null
            //state.credentials.avatar = action.payload
        })
        .addCase(fetchRegisterUser.fulfilled, (state) => {
            state.errorMessage = null
            state.credentials.email = ''
            state.credentials.password = ''
            state.isRegisterSucceed = true;

            //state.token = action.payload.access_token
            //localStorage.setItem('token', action.payload.access_token);
        })
        .addCase(fetchRegisterUser.rejected, (state, action) => {
            state.isRegisterSucceed = false;
            state.errorMessage = action.error.code === "ERR_BAD_REQUEST" ? "L'enregistrement a échoué. Vérifiez vos champs et recommencez." : "";
        })
    });
        
export default registerReducer;
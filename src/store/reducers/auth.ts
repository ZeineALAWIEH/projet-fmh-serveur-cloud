import { createAction, createReducer } from '@reduxjs/toolkit';
import { fetchLogin } from '../thunk/FetchUser';

interface IAuthState {
    credentials : {
        //email : string, =>Platzi
        username:string,
        password: string
      },
      errorMessage: string | null,
      token:string | null,
      isLoginSucceed :boolean
}

const initialState:IAuthState = {
    credentials  : {
        //email : "", =>Platzi
        username:"",
        password:""
      },
      errorMessage:null,
      token: null,
      isLoginSucceed : false
};

export const changeEmailValue = createAction<string>('auth/changeEmailValue')
export const changePasswordValue = createAction<string>('auth/changePasswordValue')
export const logout = createAction('auth/logout');

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeEmailValue, (state, action) => {
            state.errorMessage = null
            state.credentials.username = action.payload
            //state.credentials.email = action.payload =>Platzi
        })
        .addCase(changePasswordValue, (state, action) => {
            state.errorMessage = null
            state.credentials.password = action.payload
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.errorMessage = null
            state.credentials.username = ''
            state.credentials.password = ''
            state.isLoginSucceed = true;

            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token);
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.isLoginSucceed = false;
            state.errorMessage = action.error.code === "ERR_BAD_REQUEST" ? "Identifiant et/ou mot de passe incorrect" : "";
        })
        .addCase(logout, (state) => {
            //supprimer le token du state et du localStorage lors de la déconnexion
            state.token = null;
            localStorage.removeItem("token");
            state.isLoginSucceed = false;
      
            // ou à le supprimer des headers de notre instance axios
            //axios.defaults.headers.common = {};
          })
    });
        
export default authReducer;
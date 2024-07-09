import { createAction, createReducer } from '@reduxjs/toolkit';

interface IContactState {
    credentials : {
        email : string,
        subject: string,
        message:string
      },
      errorMessage: string | null;
}

const initialState:IContactState = {
    credentials  : {
        email : "",
        subject:"",
        message:""
      },
      errorMessage:null,
};

export const changeEmailContactValue = createAction<string>('contact/changeEmailContactValue')
export const changeSubjectValue = createAction<string>('contact/changeSubjectValue')
export const changeMessageValue = createAction<string>('contact/changeMessageValue')

const contactReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeEmailContactValue, (state, action) => {
            state.errorMessage = null
            state.credentials.email = action.payload
        })
        .addCase(changeSubjectValue, (state, action) => {
            state.errorMessage = null
            state.credentials.subject = action.payload
        })
        .addCase(changeMessageValue, (state, action) => {
            state.errorMessage = null
            state.credentials.message = action.payload        
        })
    });
        
export default contactReducer;
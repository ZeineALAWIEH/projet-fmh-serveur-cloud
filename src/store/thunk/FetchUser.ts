import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';
import axios from 'axios';
import {base_url} from '../../constants/global'


//Send request for login
export const fetchLogin = createAsyncThunk('user/fetchLogin', async (_, thunkAPI) => {

    const state = thunkAPI.getState() as RootState

    const credentialsSubmit = state.auth.credentials;

    //const { data } = await axios.post("https://api.escuelajs.co/api/v1/auth/login", credentialsSubmit); 
    const { data } = await axios.post(`${base_url}/projet-15-find-my-hero-back/public/api/login_check`, credentialsSubmit); 

    //ajoute une Authorization dans le header de chaque requête que fera axios :
    //Content-Type:: application/json => toujours présent dans le header pour envoyer des data de type json
    //Authorization: Bearer {token} => ajouter pour créer l'autorization
    //Utilité : Plus besoin de d'ajouter un paramètre à toutes les requetes comme ci dessous
    // const axiosConfig = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    //const res = await axios.get(`/favorites`, axiosConfig);
    //axios.defaults.headers.common = { Authorization: `Bearer ${data.token}` };

    return data;

});


//Get user authorization + data user
//A chaque page qui doit être sécurisé, il faut appelé ce fetch ci-dessous
//lister toutes les routes qui doivent être sécurisé à la racine (=> layout)
export const fetchUserAuthorization = createAsyncThunk('user/fetchUserAuthorization', async () => {

    const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    //const { data } = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", axiosConfig); 
    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/user/`, axiosConfig); 

    console.log("user infos", data);

    return data;

});

//Register a new user
export const fetchRegisterUser = createAsyncThunk('user/fetchRegisterUser', async (_, thunkAPI) => {

  const state = thunkAPI.getState() as RootState

  const credentialsSubmit = state.register.credentials;

  console.log(credentialsSubmit);
  
  //const { data } = await axios.post("https://api.escuelajs.co/api/v1/users/", credentialsSubmit); 
  const { data } = await axios.post(`${base_url}/projet-15-find-my-hero-back/public/api/user/add`, credentialsSubmit); 

  console.log("Response Registration :", data);
  
  return data;

});

//Create a new review & set a note to the hero
export const fetchUserReview = createAsyncThunk('user/fetchUserReview', async (heroId:number|string|undefined, thunkAPI) => {

  const state = thunkAPI.getState() as RootState
  const review = state.user.reviewPost

  const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  
  const { data } = await axios.post(`${base_url}/projet-15-find-my-hero-back/public/api/reviews/personnage/${heroId}/add`, review ); 
  
  return data;

});

//Add hero to favorites for a connected user
export const fetchUserAddFavorites = createAsyncThunk('user/fetchUserAddFavorites', async (heroId:number|string|undefined) => {

  const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  
  const { data } = await axios.post(`${base_url}/projet-15-find-my-hero-back/public/api/favorites/user/add/${heroId}`); 
  
  return data;

});

//Delete hero from favorites for a connected user
export const fetchUserDelFavorites = createAsyncThunk('user/fetchUserDelFavorites', async (heroId:number|string|undefined) => {

  const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  
  const { data } = await axios.delete(`${base_url}/projet-15-find-my-hero-back/public/api/favorites/user/delete/${heroId}`); 
  
  return data;

});

//Get hero from favorites for a connected user
export const fetchUserFavorites = createAsyncThunk('user/fetchUserFavorites', async () => {

  const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : "";
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  
  const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/favorites/user/`); 
  
  return data;

});
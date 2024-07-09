import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';
import axios from 'axios';
import { IHeros } from '../../types';
import { base_url } from '../../constants/global';

//Get all heros
export const fetchHeros = createAsyncThunk('heros/fetchHeros', async () => {

    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/personnages`); 
  
    return data;

});


//get one specific heros
export const fetchSingleHero = createAsyncThunk('heros/fetchSingleHero', async (heroId:number|string|undefined) => {

    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/personnages/${heroId}`);
        
    return data;

});

//get one specific RANDOM heros
export const fetchSingleHeroRandom = createAsyncThunk('heros/fetchSingleHeroRandom', async () => {

    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/personnages/random`);
        
    return data;

});

//get videos of heros
export const fetchHeroVideos = createAsyncThunk('heros/fetchHeroVideos', async () => {

    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/videos`);
        
    return data;

});


//get heros from search bar
export const fetchSearchHeros = createAsyncThunk('heros/fetchSearchHeros', async (_, thunkAPI) => {

    const state = thunkAPI.getState() as RootState

    const { data } = await axios.get(`${base_url}/projet-15-find-my-hero-back/public/api/personnages`);
        
    const dataFiltered = data?.filter((h:IHeros) => {
        const wordsearched =state.searchBar.wordSearching.trim().toLowerCase();

        //user search is 0 or null or undefined or NaN or empty
        if(!wordsearched) return false; //aucune valeur du tableau n'est retournée
        
        return h.prenom.toLowerCase().includes(wordsearched)

    });  
  
    return dataFiltered;

});


//create a new hero (post)
/*
{
  "prenom": "p",
  "nom": "n",
  "date_de_creation": 1234, => integer
  "age": 1,                 => integer
  "espece": "a",
  "armes": "a",
  "competences": "c",
  "origine": "o",
  "apercu": "r",
  "story": "h",
  "selectedSaga": "1",
  "photo_de_profil":"https://monlien.fr/vers/images/du/hero" => mettre avatar par défault ou un lien vers une image du héro
}
*/

export const fetchAddHeros = createAsyncThunk('heros/fetchAddHeros', async (_, thunkAPI) => {

    const state = thunkAPI.getState() as RootState

    //console.log(state.addHero.hero);
    
    const { data } = await axios.post(`${base_url}/projet-15-find-my-hero-back/public/api/personnages/add`, state.addHero.hero);
  
    return data;

});


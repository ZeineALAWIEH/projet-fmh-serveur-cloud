import {
    createAction,
    createReducer,
  } from '@reduxjs/toolkit';
import { fetchAddHeros } from '../thunk/FetchHeros';

interface IAddHeroState {
    hero : {
        prenom:string,
        nom:string,
        date_de_creation:number,
        age: number,
        espece: string,       
        armes:string,
        competences:string,
        origine:string,
        apercu:string,
        story:string,
        photo_de_profil:string,
        mysaga:Array<number>
    },
    isLoading:boolean,
    responseMessage:string
}

const initialState:IAddHeroState = {
    hero : {
        prenom: "",
        nom: "",
        date_de_creation:1950,
        age: 0,
        espece:  "",       
        armes: "",
        competences: "",
        origine: "",
        apercu: "",
        story: "",
        photo_de_profil:"",
        mysaga:[]
    },
    isLoading:false,
    responseMessage:""
};

export const changeSelectedSaga = createAction<string>('addHero/changeSelectedSaga');
export const changeHeroPhotoProfil = createAction<string>('addHero/changeHeroPhotoProfil');
export const changeHeroStory = createAction<string>('addHero/changeHeroStory');
export const changeHeroApercu = createAction<string>('addHero/changeHeroApercu');
export const changeHeroOrigine = createAction<string>('addHero/changeHeroOrigine');
export const changeHeroCompetences = createAction<string>('addHero/changeHeroCompetences');
export const changeHeroArmes = createAction<string>('addHero/changeHeroArmes');
export const changeHeroEspece = createAction<string>('addHero/changeHeroEspece');
export const changeHeroAge = createAction<string | number>('addHero/changeHeroAge');
export const changeHeroCreationYear = createAction<string | number>('addHero/changeHeroCreationYear');
export const changeHeroNom = createAction<string>('addHero/changeHeroNom');
export const changeHeroPrenom = createAction<string>('addHero/changeHeroPrenom');

export const addHeroReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeSelectedSaga , (state, action) => {
            state.hero.mysaga.push(parseInt(action.payload))           
        })
        .addCase(changeHeroPhotoProfil , (state, action) => {
            state.hero.photo_de_profil = action.payload
        })
        .addCase(changeHeroStory , (state, action) => {
            state.hero.story = action.payload
        })
        .addCase(changeHeroApercu , (state, action) => {
            state.hero.apercu = action.payload
        })
        .addCase(changeHeroOrigine , (state, action) => {
            state.hero.origine = action.payload
        })
        .addCase(changeHeroCompetences , (state, action) => {
            state.hero.competences = action.payload
        })
        .addCase(changeHeroArmes , (state, action) => {
            state.hero.armes = action.payload
        })
        .addCase(changeHeroEspece , (state, action) => {
            state.hero.espece = action.payload
        })
        .addCase(changeHeroAge , (state, action) => {
            state.hero.age = typeof action.payload =="string" ? parseInt(action.payload) : action.payload
        })
        .addCase(changeHeroCreationYear , (state, action) => {
            state.hero.date_de_creation = typeof action.payload =="string" ? parseInt(action.payload) : action.payload
        })
        .addCase(changeHeroNom , (state, action) => {
            state.hero.nom = action.payload
        })
        .addCase(changeHeroPrenom , (state, action) => {
            state.hero.prenom = action.payload
        })
        .addCase(fetchAddHeros.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchAddHeros.fulfilled, (state) => {
            state.isLoading = false;
            state.responseMessage="Le héro a bien été ajouté !"            
            state.hero = {
                prenom: "",
                nom: "",
                date_de_creation:1950,
                age: 0,
                espece:  "",       
                armes: "",
                competences: "",
                origine: "",
                apercu: "",
                story: "",
                mysaga: [],
                photo_de_profil:""
            }
        })
        .addCase(fetchAddHeros.rejected, (state) => {
            state.isLoading = false;
        })

    });
 
export default addHeroReducer;

/* Gestion des formulaires : méthode à tester, repris de Orecipes>reducers>user.ts correction (Dossier Falafel React)

export type TInputName = keyof ICredentials;

export const changeFieldState = createAction<{
  newValue: string;
  inputName: TInputName;
}>('user/changeFieldState');

....code

    .addCase(changeFieldState, (state, action) => {
      const { inputName, newValue } = action.payload;
      console.log(action.payload.inputName);
      // Accesseur dynamique de propriété :
      // const x = "blabla"
      // Object[x] => Object.blabla
      state.credentials[inputName] = newValue;
    })





*/
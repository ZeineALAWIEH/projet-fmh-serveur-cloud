/* export interface IHeros {
  id:number,
  prenom: string,
  photo_de_profil: string,
  apercu: string,
  espece:string;
  armes:string,
  competences: string,
  origine: string,
  note_moyenne_utilisateur:number|undefined,
  story:string,
  date_de_creation:number;
  photo_de_profil: string;
}  */

export interface IHeros {
    age: number
    id: number
    date_de_creation: number
    note_moyenne_utilisateur: number|undefined
    prenom: string
    apercu: string
    armes: string
    competences: string
    espece: string
    nom: string
    origine: string
    story: string
    photo_de_profil: string
    picture: IHerosMultimedia[]
    video: IHerosMultimedia[]
    review: IHerosReviews[]
    saga: ISagas[]
    user: IUser[]

}

export interface IHerosMultimedia {
  lien:string,
  nom:string,
}

export interface IHerosReviews {
  id: number,
  content: string,
  user:IUser
}

export interface ISagas {
  id:string|number,
  picture: string,
  nom: string,
  creator:string,
  date_de_creation:number|string,
  personnages: IHeros[]
}

export interface IVideos {
  id:number,
	lien: string,
	nom: string,
	personnages: IHeros
}

export interface IUser {
  id:number,
  email: string,
  roles: [],
  password:string,
  Pseudo: string,
  favorite: IHeros[]
  creer_le:string
}

export interface IUserPlatzi {
  id: number,
  email: string,
  password: string,
  name: string,
  role: string,
  avatar: string,
  creationAt: string,
  updatedAt: string
}


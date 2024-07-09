import { IHeros } from "../../../types";
import Rating from "../../Generic/Rating";
import Accordion from "../../Generic/Accordion"
import { Link } from "react-router-dom";
import { slug_url } from "../../../constants/global";

interface props {
  hero:IHeros | null
}


export default function SingleHeroSum({hero}:props) {

  let heroRating = "Aucun vote"
  if (hero != null &&
      hero.note_moyenne_utilisateur !== undefined &&
      hero.note_moyenne_utilisateur !== null   
      ) 
  {
      heroRating = String(hero.note_moyenne_utilisateur).replace(".", ",")
  } 
 

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-9 w-11/12 md:w-8/12 mx-auto">
        <figure className="p-9 me-3">
          <img src={hero?.photo_de_profil} alt="Album" className="md:h-96 lg:h-auto rounded-box"  />
        </figure>

        <div className="card-body lg:w-11/12">
          <h2 className="card-title">{hero?.prenom} </h2>
          { hero?.saga[0] != undefined &&
            <span>
              (de la saga : <Link to={`${slug_url}/sagas/${hero?.saga[0].id}`} className="text-teal-600">{hero?.saga[0].nom}</Link>)
              </span>
          }
          <Rating styleElement="self-start" 
                  note={heroRating} />
          
          <ul
            className=" flex flex-wrap 
                        [&_li]:border-2     
                        [&_li]:m-2    
                        [&_li]:bg-base-200    
          ">
            {/* Block Infos générales */}
            <li className="w-full">
              <div className="font-bold p-2 text-center text-white bg-black">
                Information générales
              </div>

              <Accordion titre="Espèces" contenu={hero?.espece} />
              <Accordion titre="Armes" contenu={hero?.armes} />
              <Accordion titre="Compétences" contenu={hero?.competences} />
              <Accordion titre="Origine" contenu={hero?.origine} />
        
            </li>

            {/* Autres Blocks */}
            {/* <li className="w-full">
              <div className="font-bold p-2 text-center text-white bg-black">
                Information générales
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Actions Héroïques
                </div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam mollitia, officia architecto perferendis nobis sequi?
                    Ea velit assumenda, tempora totam consequuntur optio
                    suscipit adipisci alias? Nemo laboriosam doloremque sapiente
                    harum?
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Type de héros
                </div>
                <div className="collapse-content">
                  <p>Plombier héroïque</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Pouvoirs / Capacités
                </div>
                <div className="collapse-content">
                  <p>
                    Force améliorée Sauts améliorés Résistance améliorée Vitesse
                    améliorée Réflexes améliorés Agilité améliorée Endurance
                    améliorée Pyrokinésie Transformations par des Power-Ups
                    Combattant de maître Pilote expert Maîtrise du marteau
                    Intelligence élevée Polyvalence Charisme Leadership Par des
                    Power-Ups: Pyrokinésie Cryokinésie Géokinésie Vol Sauts
                    surhumains Maîtrise du boomerang
                  </p>
                </div>
              </div>
        
            </li> */}

          </ul>
        </div>
      </div>
    </>
  );
}

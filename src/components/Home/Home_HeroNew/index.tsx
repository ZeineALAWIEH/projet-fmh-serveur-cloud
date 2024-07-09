import { Link } from "react-router-dom";
import { IHeros } from "../../../types";
import { slug_url } from "../../../constants/global";

interface props {
  heros:IHeros[]

}

export default function HomeHeroNew({heros}:props) {

  //heros.slice(-1) return [{...}] => tableau d'objet qui possède 1 seul élement => obligé de faire [0] pour récupérer l'objet
  const firstLastHero = heros.slice(-1)[0];  
  const secondLastHero = heros.slice(-2, -1)[0]; 
 
  return (
    <> 
     <h2 className='text-center font-bold text-5xl pt-12'>Les derniers héros ajoutés par les autres utilisateurs</h2>

      <div className="card lg:card-side bg-base-100 shadow-xl my-20 border-2 w-8/12 mx-auto">
        
        <figure>
          <img src={firstLastHero.photo_de_profil} alt="Album" className="md:h-96 " />
        </figure>

        <div className="card-body">
          <h2 className="card-title self-center lg:self-end">{firstLastHero.prenom}</h2>
          <p className="mb-6 self-center lg:self-end">{firstLastHero.apercu}</p>

          <div className="flex flex-col gap-4 items-center lg:items-end text-center ">
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
                  <span className="font-bold">Espèces : </span> <span>{firstLastHero.espece}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Origine :</span>  <span>{firstLastHero.origine}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Compétence :</span> <span>{firstLastHero.competences}</span>
              </div>
          </div>

          <div className="card-actions justify-center lg:justify-end">
            <Link to={`${slug_url}/heros/${firstLastHero.id}`} className="btn btn-primary">
              Voir la fiche du héro
            </Link>
          </div>
        </div>

      </div>


      <div className="card lg:card-side bg-base-100 shadow-xl my-20 border-2 flex flex-col flex-row-reverse w-8/12 mx-auto">

        <div className="card-body">
          <h2 className="card-title self-center lg:self-start">{secondLastHero.prenom}</h2>
          <p className="mb-6 self-center lg:self-start">{secondLastHero.apercu}</p>

          <div className="flex flex-col gap-4 lg:items-start items-center text-center ">
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
                  <span className="font-bold">Espèces : </span> <span>{secondLastHero.espece}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Origine :</span>  <span>{secondLastHero.origine}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Compétence :</span> <span>{secondLastHero.competences}</span>
              </div>
          </div>


          <div className="card-actions justify-center lg:justify-start">
            <Link to={`${slug_url}/heros/${secondLastHero.id}`} className="btn btn-primary" >
              Voir la fiche du héro
            </Link>
          </div>
        </div>

        <figure className="order-first lg:order-last">
          <img src={secondLastHero.photo_de_profil} alt="Album" className="md:h-96" />
        </figure>

      </div>


      <div className='my-4 border-4 relative mb-16'>
        <Link to={`${slug_url}/user/addHero`} 
              className="btn btn-primary absolute w-full sm:w-96 
                        -inset-y-6 sm:inset-x-[18%] md:inset-x-[21%] lg:inset-x-[31%] xl:inset-x-[39%]
                        ">
          Ajouter un héro
        </Link>
      </div>

    </>
  );
}

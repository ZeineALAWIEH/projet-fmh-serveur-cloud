import Rating from '../../Generic/Rating'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useEffect } from 'react';
import { fetchSingleHeroRandom } from '../../../store/thunk/FetchHeros';
import { slug_url } from '../../../constants/global';

export default function HomeHeroRandom() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSingleHeroRandom())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const heroRandom = useAppSelector((state) => state.heros.singleHeroRandom)

  let heroRating = "Aucun vote"
  if (heroRandom != null &&
      heroRandom.note_moyenne_utilisateur !== undefined &&
      heroRandom.note_moyenne_utilisateur !== null   
      ) 
  {
      heroRating = String(heroRandom.note_moyenne_utilisateur).replace(".", ",")
  } 


  return (
    <>
    <h2 className='text-center font-bold text-5xl py-6'>Le héros aléatoire</h2>
    <div className="hero min-h-96 bg-base-200 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse w-72 sm:w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <img
            src={heroRandom?.photo_de_profil}
            alt="hero random"
            className=""
            />
          </div>
        </div>


        <div className="text-center lg:text-left flex flex-col w-64 sm:w-full">
          <h1 className="text-4xl font-bold self-center">{heroRandom?.prenom}</h1>

          <Rating styleElement="self-center" note={heroRating} />

          <p className="py-6 text-center">{heroRandom?.apercu}</p>

          <div className="flex flex-col gap-4 items-center text-center ">
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
                  <span className="font-bold">Espèces : </span> <span>{heroRandom?.espece}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Origine :</span>  <span>{heroRandom?.origine}</span>
            </div>
            <div className="rounded-box bg-teal-600 text-white p-3 w-64 sm:w-9/12 xl:w-7/12">
              <span className="font-bold">Compétence :</span> <span>{heroRandom?.competences}</span>
              </div>
          </div>

          {/* self-end */}
          <Link to={`${slug_url}/heros/${heroRandom?.id}`} 
                className="btn btn-primary mt-6 w-full">
            Voir la fiche héro
          </Link>
        </div>



      </div>
    </div>
    </>
  );
}

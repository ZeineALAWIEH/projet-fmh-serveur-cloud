import Review from './Review'
import AddReview from './AddReview'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IHeros, IHerosReviews } from '../../../types'
import { DecrementShowReview, IncrementShowReview, changeNbReviewShow } from '../../../store/reducers/user'
import { useEffect } from 'react'
import { slug_url } from '../../../constants/global'


interface props {
  hero: IHeros | null
}

export default function SingleHeroComment({hero}:props) {

  const dispatch = useAppDispatch()
  //si besoin de isLogged dans le composant alors ajouter la route dans le Layout
  const isLogged = useAppSelector((state) => state.user.isLogged)
  const location = useLocation()
  
  const nbReviewShow = useAppSelector((state) => state.user.nbReviewShow)
  
  let heroReviews: IHerosReviews[] = [
    {
      "id":0,
      "content":"Aucun commentaire pour ce personnage.",
      "user": {
        "id":0,
        "Pseudo": "",
        "email":"",
        "roles": [],
        "password":"",
        "favorite": [],
        "creer_le":""
      }
    }
  ]
  if (heroReviews != null &&
      hero?.review !== undefined &&
      hero.review !== null   
      ) 
  {
      heroReviews = hero.review
  } 


  const heroReviewsSorted = [...heroReviews].sort((x, y) => {
    return y.id - x.id;
  }); 

  
  useEffect(() => {
    if(nbReviewShow > heroReviewsSorted.length) dispatch(changeNbReviewShow(heroReviewsSorted.length))                  
    if(nbReviewShow < 6) dispatch(changeNbReviewShow(5))  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nbReviewShow])

  const heroReviewsSortedFiltered = heroReviewsSorted.slice(0,nbReviewShow)

  const reviews = heroReviewsSortedFiltered.map((hr) => {
    return <Review key={hr.id} review={hr} />
  })


  return (
    <>
      <h2 className='text-2xl font-bold mt-9'>Commentaires ({heroReviews.length}) et notation du personnage</h2>
      <div className='w-full border-4'></div>
      <div className='p-3 md:p-6'>

        {reviews}

        {heroReviewsSorted.length > 0 ? 
        <div className='flex flex-wrap gap-3 justify-center'>
          <div onClick={() => dispatch(IncrementShowReview())} 
                  className='btn bg-green-200 text-lg'>
              Voir plus de commentaires
          </div>

          <div onClick={() => dispatch(DecrementShowReview())} 
                  className='btn bg-yellow-200 text-lg'>
              Voir moins de commentaires
          </div>
         </div> :
         <div className='text-center py-6 font-bold text-lg'>
            Aucun commentaire pour ce personnage. Soyez le premier à commentez !
          </div>
        }

        {isLogged  ? 
          <AddReview />:
          <Link to={`${slug_url}/login`} state={{ prevPath: location.pathname }} 
                className='btn btn-primary w-full my-6 text-lg '
          >
            Se connecter pour ajouter un commentaire et noter le personnage
            </Link>
        }

      </div>

    
    </>
  )
}

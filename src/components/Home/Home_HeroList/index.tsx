import Card from '../../Generic/Card'
import { Link } from 'react-router-dom'
import { IHeros } from '../../../types'
import { slug_url } from '../../../constants/global';

interface props {
  heros:IHeros[]
}


export default function HomeHeroList({heros}:props) {

  const herosSorted = [...heros].sort((x, y) => {
    const yNote = y.note_moyenne_utilisateur === (undefined) ? 0 : y.note_moyenne_utilisateur ; 
    const xNote = x.note_moyenne_utilisateur === (undefined) ? 0 : x.note_moyenne_utilisateur ; 
    return xNote - yNote;
  }); 

  const herosSortedFiltered = herosSorted.slice(-5)

  const herosList = herosSortedFiltered.map((h) => {
    return <Card  key={h.id} 
                  imgSrc={h.photo_de_profil} 
                  title={h.prenom}
                  apercu={h.apercu} 
                  heroId={h.id} 
                  linkTo={`${slug_url}/heros/${h.id}`} />
  });

  return (
    <>
        <h2 className='font-bold text-xl py-9'>Les héros les mieux notés</h2>
        <div className='flex flex-wrap justify-center gap-5 mb-9'>{herosList}</div>
        
        <div className='mt-20 mb-4 border-4 relative'>
          <Link to={`${slug_url}/heros`}
                className="btn btn-primary absolute w-full sm:w-96
                           -inset-y-6 sm:inset-x-[18%] md:inset-x-[21%] lg:inset-x-[31%] xl:inset-x-[39%]
                           "
                >
                Voir plus de héros
          </Link>
        </div>
        
    
    
    </>
  )
}

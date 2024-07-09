import { slug_url } from '../../../constants/global';
import { IHeros } from '../../../types';
import Card from '../../Generic/Card'

interface props {
  listOfHeros:IHeros[]
}

export default function SingleSagaListOfHero({listOfHeros}:props) {

console.log(listOfHeros);


  const herosList = listOfHeros.map((h) => {
    return <Card  key={h.id} 
                  imgSrc={h.photo_de_profil} 
                  title={h.prenom}
                  apercu={h.apercu} 
                  linkTo={`${slug_url}/heros/${h.id}`} />
  });

  return (
    <>
        <h2 className='font-bold text-2xl py-3'>Les héros de la saga</h2>
        <div className='border-4 mb-9'></div>
        <div className='flex flex-wrap justify-center gap-5 mb-9'>
          {herosList.length > 0 ? herosList : "Aucun personnage n'a été enregistré dans cette saga"}
        </div>
        {/* <Pagination /> */}
    
    </>
  )
}

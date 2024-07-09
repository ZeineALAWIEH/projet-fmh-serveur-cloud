import Card from "../../Generic/Card";
import { useAppSelector } from "../../../hooks/redux";
import { slug_url } from "../../../constants/global";

export default function UserFavorites() {
  
  const user = useAppSelector((state) => state.user.data)

  const herosList = user?.favorite.map((h) => {
    return <Card  key={h.id} 
    imgSrc={h.photo_de_profil} 
    title={h.prenom}
    apercu={h.apercu} 
    heroId={h.id} 
    linkTo={`${slug_url}/heros/${h.id}`} />
  });
  
  return (
    <>
        <h2 className='font-bold text-xl py-3'>Mes héros préférés</h2>
        <div className='border-4 mb-9'></div>
        <div className='flex flex-wrap justify-center gap-5 mb-9'>
          {herosList!=undefined ? 
            (herosList.length > 0 ? 
              herosList : "Aucun personnage n'a été enregistré"): 
            "Aucun personnage n'a été enregistré"
          }
        </div>
        {/* <Pagination /> */}
    
    </>
  )
}


import Card from '../../components/Generic/Card';
import PageBanner from '../../components/Generic/PageBanner'
import { slug_url } from '../../constants/global';
import { useAppSelector } from '../../hooks/redux';

export default function SearchResult() {

  const requestEmptyMessage = "Aucun résultat ne correspond à votre recherche."
  const searchResult = useAppSelector((state) => state.heros.listSearch)
  const wordSearching = useAppSelector((state) => state.searchBar.wordSearching)

  const searchHeroList = searchResult.map((h) => {
    return <Card  key={h.id} 
                  imgSrc={h.photo_de_profil} 
                  title={h.prenom}
                  heroId={h.id}
                  apercu={h.apercu} 
                  linkTo={`${slug_url}/heros/${h.id}`} />
  });

  return (
    <>
        <PageBanner title={`Résultat de votre recherche : "${wordSearching}"`} banner=""/>
        <div className="flex flex-wrap justify-center gap-5 mb-9">
            {searchResult.length === 0 ? requestEmptyMessage : searchHeroList }
        </div>
        
    </>
  )
}

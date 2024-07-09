import Card from "../../Generic/Card";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { utilFilterListHero } from '../../../Utils/utilFilterList'
import { changeHeroListLastPage } from "../../../store/reducers/pagination";
import { useEffect } from "react";
import { slug_url } from "../../../constants/global";

interface props {
  currentPage:number,
  elementPerPage:number,
}

export default function HeroListCard({currentPage, elementPerPage}:props) {

  const dispatch =useAppDispatch()
  const heros = useAppSelector((state)=> state.heros.list)
  const isCheckedHumain = useAppSelector((state) => state.filterHeroList.isChecked.humain)
  const isCheckedElfe = useAppSelector((state) => state.filterHeroList.isChecked.elfe)
  const isSortedAlphabet = useAppSelector((state) => state.filterHeroList.isRadio.alphabet)
  const isSortedCreationDate = useAppSelector((state) => state.filterHeroList.isRadio.creationDate)
  const isSortedPertinence = useAppSelector((state) => state.filterHeroList.isRadio.pertinence)

  //Etape d'affichage:
  //  1-Filtrage ? herosFiltered : heros 
  //  2-Tri => herosFilteredSorted || herosSorted
  //  2-Pagination => herosFilteredSortedPaginated || herosSortedPaginated

  //---------------------------------------------------------------------------
  //Sidebar Filtrage personnalisé (Attention, doit se faire avant la pagination)
  //---------------------------------------------------------------------------
  //FIltrage personnalisé de la liste des héros (toujours avant le tri)
  //filtrage possible : especes [humain, elfe]
  /**
   * Fonctionnement :
   * 1- crééer des checkbox controlés (ajouter le state du checkbox dans le reducer)
   * 2- Ajouter le nouveau filtre dans filterEspeceIsChecked => key=nomAfilter: value=isCheckedNomAfilter
   */

  interface IfilterEspeceIsChecked {
    humain: boolean;
    elfe: boolean;
  }

  const filterEspeceIsChecked: IfilterEspeceIsChecked = {
    humain:isCheckedHumain,
    elfe:isCheckedElfe,
  }

  const herosSidebarFiltered = heros.filter((h) => {

    let especeSelected = false;
    const filterEspeceIsCheckedKey = Object.keys(filterEspeceIsChecked)

    for(const especeCheckbox of filterEspeceIsCheckedKey) {
      if( h.espece.toLowerCase().trim().includes(especeCheckbox) ) especeSelected = filterEspeceIsChecked[especeCheckbox as keyof IfilterEspeceIsChecked];
    }
      
    return especeSelected;
  })

  const herosAfterFilter = herosSidebarFiltered.length == 0 ? heros : herosSidebarFiltered;

  //Tri personnalisé de la liste des héros (toujours après le filtrage personnalisé)
  //******************************************************************************************************************** */
  /* ATTENTION : le tableau d'objet "heros" et ceux qui découle de lui par filtrage (comme herosSidebarFiltered par exemple)
  sont des tableau immuable (immutable) car ils sont récupérés à partir du state (state.heros.list). 
  Tous les states sont immutable et ne peuvent pas être modifiés directement. Ils doivent passer par l'action creator ou créer une copie
  comme expliquée ci-dessous. 
  Donc on ne peut pas modifier directement le tableau heros ou les autres qui découlent de lui.
  
  Or les fonction .sort(), .pop(), .push() modifie directement le contenu du tableau.
  
  Ainsi, lorsque l'on applique une de ces méthodes, une erreur "lecture seule" apparait : ... "read-only 0" ...
  Comme pour les states, on est obliger de travailler sur une copie 
  (pour modifié une ptés d'un objet task par exemple, on fait "...task, done:!task.done" 
  => "...task" créée une copie et l'objet). 
  
  Il faut donc créer une nouvelle copie du tableau sans modifié l'original.
  Pour cela il faut écrire: const nouveauTableau = [...tableauObjet].sort() par exemple et PAS tableauObjet.sort() directement (ce dernier 
  modifie tableauObjet)

  Remarque: dans l'atelier todolist E11, le trie a été fait sur des data directement issues du fetch. Les data n'était pas des states.
  Dans ce cas précis, il était possible de faire directement data.sort()
  */
 //******************************************************************************************************************** */

  const herosSorted = [...herosAfterFilter].sort((x, y) => {
    // true values first
    //return (x === y)? 0 : x? -1 : 1;
    // false values first
    //return (x.date_de_creation === y.date_de_creation) ? 0 : x.date_de_creation? 1 : -1;
    if(isSortedCreationDate)  return y.date_de_creation - x.date_de_creation; //date du plus récent au plus ancien => du plus grand au plus petit
    else if (isSortedAlphabet) return x.prenom < y.prenom ? -1 : 1;
    else if (isSortedPertinence) return x.id - y.id; //du plus petit au plus grand
    else return x.id - y.id;
  }); 

  //---------------------------------------------------------------------------
  //Code nécessaire à la pagination
  //---------------------------------------------------------------------------
  //calcule le nombre de page total = nombre d'élément au total / nombre d'élément par page
  const nbPageTotal = herosSorted.length / elementPerPage;
    
  //When use a dispatch, always use it in a useEffect
  useEffect(()=> {
    dispatch(changeHeroListLastPage(Math.ceil(nbPageTotal)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nbPageTotal])

  //Pagination : filter heros from "const heros" list
  const herosFilteredReady = utilFilterListHero(currentPage,elementPerPage,herosSorted)
  
  //---------------------------------------------------------------------------
  //Affichage des cartes de héros
  //---------------------------------------------------------------------------
  //map the 9 heros selected just before
  const herosList = herosFilteredReady.map((h) => {
    return <Card  key={h.id} 
                  imgSrc={h.photo_de_profil} 
                  title={h.prenom}
                  apercu={h.apercu}
                  heroId={h.id} 
                  linkTo={`${slug_url}/heros/${h.id}`} />
  });
  
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mb-9">
        {herosList}
      </div>
    </>
  );
}

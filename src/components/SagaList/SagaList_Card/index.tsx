import { useEffect } from "react";
import { utilFilterListSaga } from "../../../Utils/utilFilterList";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeSagaListLastPage } from "../../../store/reducers/pagination";
import Card from "../../Generic/Card";
import { slug_url } from "../../../constants/global";


interface props {
  currentPage:number,
  elementPerPage:number,
}

export default function SagaListCard({currentPage, elementPerPage}:props) {

  const dispatch =useAppDispatch()
  const sagas = useAppSelector((state) => state.sagas.list)
  const letterFilter = useAppSelector((state) => state.filterSagaList.letter)
 

  //---------------------------------------------------------------------------
  //Sidebar Filtrage personnalisé (Attention, doit se faire avant la pagination)
  //---------------------------------------------------------------------------
  let sagasReady = sagas

  //A letter has been selected in the filter
  if(letterFilter !== "") {
    sagasReady = sagas.filter((s) => {
      return s.nom.toLowerCase().trim().charAt(0) === letterFilter.toLowerCase().trim()
    })
  } 


  //---------------------------------------------------------------------------
  //Code nécessaire à la pagination
  //---------------------------------------------------------------------------
  //Pagination : filter sagas from "const sagas" list
  const sagasFilteredReady = utilFilterListSaga(currentPage,elementPerPage,sagasReady)

  //calcule le nombre de page total = nombre d'élément au total / nombre d'élément par page
  const nbPageTotal = sagasReady.length / elementPerPage;
  
  //When use a dispatch, always use it in a useEffect
  useEffect(()=> {
    dispatch(changeSagaListLastPage(Math.ceil(nbPageTotal)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nbPageTotal])


  //---------------------------------------------------------------------------
  //Affichage des cartes de héros
  //---------------------------------------------------------------------------
  const sagasList = sagasFilteredReady.map((s) => {
    return (
      <Card
        key={s.id}
        imgSrc={s.picture}
        title={s.nom}
        apercu=""
        linkTo={`${slug_url}/sagas/${s.id}`}
      />
    );
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mb-9">
        {sagasList}
      </div>
    </>
  );
}

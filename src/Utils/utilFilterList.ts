import { IHeros, ISagas} from "../types";

/* logique de la fontion utilFilterList  
    const currentPage = 2;
    const cardPerPage = 4;
    const herosFiltered = heros.filter((_, index) => {
      return (index >= (currentPage - 1) * cardPerPage && index < currentPage * cardPerPage);
  }) */

//filter list with type IHeros
export function utilFilterListHero (currentPage:number, elementPerPage:number, list:IHeros[]) {
    const filteredList = list.filter((_, index) => {
        return (index >= (currentPage - 1) * elementPerPage && index < currentPage * elementPerPage);
    })

    return filteredList;
}

//filter list with type ISagas
export function utilFilterListSaga (currentPage:number, elementPerPage:number, list:ISagas[]) {
    const filteredList = list.filter((_, index) => {
        return (index >= (currentPage - 1) * elementPerPage && index < currentPage * elementPerPage);
    })

    return filteredList;
}
import PageBanner from '../../components/Generic/PageBanner'
import SagaListCard from '../../components/SagaList/SagaList_Card'
import Pagination from '../../components/Generic/Pagination'
import PageListCircle from '../../components/Generic/PageList_circle'
import SagaListFilter from '../../components/SagaList/SagaList_filter'
import bannerSaga from "../../assets/images/banner-4.jpg";
import { changeSagaListCurrentPage } from '../../store/reducers/pagination'
import { useAppSelector } from '../../hooks/redux'

export default function SagaList() {

  const currentPageSagaList = useAppSelector((state) => state.pagination.pageSagaList.currentPage)
  const elementPerPageSagaList = useAppSelector((state) => state.pagination.pageSagaList.elementPerPage)
  const lastPageSagaList = useAppSelector((state) => state.pagination.pageSagaList.lastPage)

  return (
    <>
      <PageBanner title="Liste des sagas" banner={bannerSaga}/>
      <SagaListFilter />
      <div className='flex'>
        <PageListCircle  />
        <SagaListCard currentPage={currentPageSagaList} 
                      elementPerPage={elementPerPageSagaList} />
      </div>
      <Pagination currentPage={currentPageSagaList} 
                  lastPage={lastPageSagaList} 
                  changeCurrentPage={changeSagaListCurrentPage}/>
    </>
  )
}


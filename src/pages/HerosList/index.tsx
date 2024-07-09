import PageBanner from '../../components/Generic/PageBanner'
import HeroListCard from '../../components/HeroList/HeroList_card'
import HeroListCircle from '../../components/Generic/PageList_circle'
import Pagination from '../../components/Generic/Pagination'
import HeroListFilter from '../../components/HeroList/HeroList_filter'
import bannerHero from "../../assets/images/banner-2.jpg";
import { useAppSelector } from '../../hooks/redux'
import { changeHeroListCurrentPage } from '../../store/reducers/pagination'


export default function HeroList() {

  const lastPageHeroList = useAppSelector((state) => state.pagination.pageHeroList.lastPage)
  const currentPageHeroList = useAppSelector((state) => state.pagination.pageHeroList.currentPage)
  const elementPerPageHeroList = useAppSelector((state) => state.pagination.pageHeroList.elementPerPage)

  return (
    <>
      <PageBanner title="Liste des héros" banner={bannerHero}/>
      <HeroListFilter />
      <div className='flex'>
        <HeroListCircle  />
        <HeroListCard currentPage={currentPageHeroList} elementPerPage={elementPerPageHeroList} />
      </div>
      <Pagination currentPage={currentPageHeroList} 
                  lastPage={lastPageHeroList} 
                  changeCurrentPage={changeHeroListCurrentPage}/>
    </>
  )
}

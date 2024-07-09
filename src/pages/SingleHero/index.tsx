import { useParams } from "react-router-dom";
import PageBanner from "../../components/Generic/PageBanner";
import PageListCircle from "../../components/Generic/PageList_circle";
import SingleHeroComment from "../../components/SingleHero/SingleHeroComment";
import SingleHeroSum from "../../components/SingleHero/SingleHeroSum";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchSingleHero } from "../../store/thunk/FetchHeros";
import { useEffect } from "react";
import Tabs from '../../components/SingleHero/Tabs'
import { changeIsNewReview } from "../../store/reducers/user";

export default function SingleHero() {

  const { slugHeroId }= useParams();

  const dispatch =useAppDispatch();
  const isNewReview = useAppSelector((state) => state.user.isNewReview)

  //Send request to get single hero data
  useEffect(()=> {
    dispatch(fetchSingleHero(slugHeroId));
    dispatch(changeIsNewReview())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugHeroId, isNewReview])

  const SingleHeroData = useAppSelector((state) => state.heros.singleHero)

  return (
    <>
      <PageBanner title={`Fiche du héro : ${SingleHeroData?.prenom}`} banner="" />
      <div className="flex">
        <PageListCircle />

        <div className="content w-full md:w-11/12 ">
          <SingleHeroSum hero={SingleHeroData}/>

          <Tabs hero={SingleHeroData} />

          <SingleHeroComment hero={SingleHeroData}  />

        </div>
      </div>
    </>
  );
}

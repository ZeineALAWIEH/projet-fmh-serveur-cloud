import PageBanner from '../../components/Generic/PageBanner'
import PageListCircle from '../../components/Generic/PageList_circle'
import SingleSagaSum from '../../components/SingleSaga/SingleSagaSum'
import SingleSagaListOfHero from '../../components/SingleSaga/SingleSagaListOfHero'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchSingleSaga } from '../../store/thunk/FetchSagas';

export default function SingleSaga() {

  const { slugSagaId }= useParams();

  const dispatch =useAppDispatch();

  //Send request to get single saga data
  useEffect(()=> {
    dispatch(fetchSingleSaga(slugSagaId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugSagaId])

  const singleSagaData = useAppSelector((state) => state.sagas.singleSaga)

  const listOfHeros = singleSagaData?.personnages !== undefined ? singleSagaData?.personnages : [];
  

  return (
    <>
      <PageBanner title="Fiche d'une saga" banner="" />
      <div className='flex'>
        <PageListCircle  />
        <div className='content w-full'>
          <SingleSagaSum saga={singleSagaData} />
          <SingleSagaListOfHero listOfHeros={listOfHeros} />
        </div>
      </div>
  
    </>
  )
}

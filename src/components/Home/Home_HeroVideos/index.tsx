import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { fetchHeroVideos } from "../../../store/thunk/FetchHeros"

export default function HomeHeroVideos() {

  const dispatch = useAppDispatch()
  const heroVideos = useAppSelector((state) => state.heros.listVideos)

  useEffect(() => {
    dispatch(fetchHeroVideos())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])      

   
  const heroVideosSorted = [...heroVideos].sort((x, y) => x.id - y.id); 
  const heroVideosSortedFiltered = heroVideosSorted.slice(-4)

  return (
    <>
      <h2 className="font-bold text-xl py-9">Les héros les plus récents</h2>
      <div className="flex flex-wrap justify-center gap-5 mb-9">
        {heroVideosSortedFiltered.map((v, index) => {
          return (
            <iframe
              key={index}
              width="auto"
              height="315"
              src={`https://www.youtube.com/embed/${v.lien}?si=L1jZAHlxwaJ-Sqvo `}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className=""
            ></iframe>
          );
        })}

      </div>
      <div className="my-4 border-4"></div>
    </>
  );
}

import { Link } from "react-router-dom";
import { IHerosMultimedia } from "../../../types";

interface props {
  list:IHerosMultimedia[]| undefined
}

export default function SingleHeroCarouselVideo({list}:props) {
 
  let heroVideos: JSX.Element[] = []
  let herosVideosCarouselLink : JSX.Element[] = []

  if(list !== undefined) {
    heroVideos = list.map((v, index) => {
      return (
        <div key={index} id={`item${index}`} className="carousel-item w-full flex justify-center ">
          <iframe
            width="auto"
            height="315"
            src={`https://www.youtube.com/embed/${v.lien}?si=L1jZAHlxwaJ-Sqvo `}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className=""
          ></iframe>
        </div>
      );
    })

    herosVideosCarouselLink = heroVideos.map((_, index) => {
          return <Link  preventScrollReset={true} 
                        key={index}
                        to={`#item${index}`} 
                        className="btn btn-xs">{index}</Link>
    })

  }

  
  return (
    <>

      {/* Lien des videos */}
      <div className="flex justify-center">
        <div className="carousel my-6">      
          {heroVideos}
        </div>  
      </div>
      
      {/* Pagination du carousel */}
      <div className="flex justify-center w-full py-2 gap-2">
         {herosVideosCarouselLink}
      </div>
    </>
  );
}

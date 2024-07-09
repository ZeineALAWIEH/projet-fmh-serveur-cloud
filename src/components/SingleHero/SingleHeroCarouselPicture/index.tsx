import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IHerosMultimedia } from "../../../types";

interface props {
  list:IHerosMultimedia[]| undefined
}

export default function SingleHeroCarouselPicture({list}:props) {

  let images =  [
    {
      original: "",
      thumbnail: "",
    }
  ]   

  if(list !== undefined) {
    images =list.map((hi) => {
      return (
        {
          original: hi.lien,
          thumbnail: hi.lien,
        }
      )
    })
  }

  return (
    <div className="p-6">
     <ImageGallery items={images} showBullets={true} showIndex={true} />
    </div>
  );
}

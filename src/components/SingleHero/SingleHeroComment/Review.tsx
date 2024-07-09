import { IHerosReviews } from "../../../types";

interface props {
  review:IHerosReviews
}

export default function Review({review}:props) {
  
  //const today = new Date().toLocaleDateString("fr-FR");

  return (
    <>
 {/*    schéma du flex :
    - 1er flex pour que la col avatar et la colonne "author + content" ne soit pas l'une en dessous de l'autre
    - 2eme flex dans "author + content" est un flex-col pour que author et content soit l'un en dessous de l'autre
    --------------------
    | avatar  | author  | 
    |         | content |
 */}
      <div className="flex py-3">
        {/* Avatar */}


            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-xl w-24">
                 <span className="text-3xl">{review.user?.Pseudo !== null ? review.user?.Pseudo.charAt(0) : "NA"}</span>
              </div>
            </div>


{/*         <div className="avatar flex-col">
          <div className="w-20 rounded">         
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div> */}
        

        {/* Author and content */}
        <div className="px-6 flex flex-col">
          <div className="author">
            <span className="font-bold me-3">{review.user.Pseudo}</span>
            {/* <span className="text-slate-400">Aujourd'hui le {today}</span> */}
          </div>
          <div className="content text-justify">{review.content}</div> 
        </div>


  
      </div>
    </>
  );
}

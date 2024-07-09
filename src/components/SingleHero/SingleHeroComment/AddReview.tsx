import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeHeroNote, changeReviewValue } from "../../../store/reducers/user";
import { fetchUserReview } from "../../../store/thunk/FetchUser";

export default function AddReview() {

  const dispatch = useAppDispatch()
  const review = useAppSelector((state) => state.user.reviewPost.content)
  const userNote = useAppSelector((state) => state.user.reviewPost.note)

  const { slugHeroId } = useParams();

  let slugHeroIdValid = "0"
  if(slugHeroId !== undefined) slugHeroIdValid = slugHeroId
  
  const handleSubmitReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(fetchUserReview(slugHeroIdValid))
  }

  return (
    <>
      <form className="flex flex-col items-center border-2 rounded-box bg-slate-300 gap-5 p-6 my-9">

        <label className="font-bold">
          Noter le personnage (entre 0 et 5) :
        </label>
          <input  type="number" 
                  min={0}
                  max={5}
                  value={userNote}
                  onChange={(e) => dispatch(changeHeroNote(e.target.value))}
                  className="input input-bordered input-primary w-full md:w-1/2" 
                  placeholder="Entre 0 et 5" 
          />
        

        <label className="font-bold">
          Ecrire un commentaire :
        </label>
        <textarea
          placeholder="Ecrire un commentaire"
          value={review}
          onChange={(e) => dispatch(changeReviewValue(e.target.value))}
          className=" textarea textarea-bordered textarea-primary
                                    sm:textarea-sm md:textarea-md lg:textarea-lg 
                                    w-full md:w-1/2 h-48
                                    "
        />
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary w-full md:w-1/2 min-h-20 md:min-h-14 text-lg"
        >
          Ajouter un commentaire et une note
        </button>
      </form>
    </>
  );
}

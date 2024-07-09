import { useAppDispatch } from "../../../hooks/redux"
import { changeLetter } from "../../../store/reducers/filterSagaList"

interface props {
    letter:string,
}

export default function BtnLetter({letter}:props) {

  const dispatch =useAppDispatch()

  return (
    <li className="border rounded-box mb-1 bg-teal-300
                    p-1 text-center font-bold cursor-pointer 
                    hover:scale-125 hover:bg-teal-800 hover:text-white
                  "
        onClick={(e) => dispatch(changeLetter(e.currentTarget.textContent))}
        >
      {letter}
    </li>
  )
}

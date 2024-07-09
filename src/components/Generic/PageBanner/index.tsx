
interface props {
    title: string;
    banner:string;
}

export default function PageBanner({title, banner}:props) {
  return (
    <div className="w-full mb-9 shadow-lg rounded-box 
                    bg-center
                    font-bold text-4xl text-white
                    bg-base-200 border-b-2 border-slate-300 text-center"
          style={{backgroundImage:`url(${banner})`}}   
    >
        <div className="hero-overlay bg-opacity-80 py-9 rounded-box">{title}</div>
    </div>
  )
}

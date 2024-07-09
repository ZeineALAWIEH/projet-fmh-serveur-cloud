

interface props {
    titre:string,
    contenu:string | undefined,
}

export default function Accordion({titre, contenu}:props) {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="single-hero-accordion" />
        <div className="collapse-title text-xl font-medium">{titre}</div>
        <div className="collapse-content text-justify">
          <p>{contenu}</p>
        </div>
      </div>
    </>
  );
}

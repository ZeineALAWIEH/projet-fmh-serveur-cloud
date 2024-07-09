
interface props {
    content:string | undefined,
}

export default function SingleHeroDescription({content}:props) {
  return (
    <>
      {content}
    </>
  );
}

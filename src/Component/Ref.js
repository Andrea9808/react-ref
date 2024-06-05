import React, {useRef} from "react";

const RefExample = () => {
  const ref = useRef(null);
  console.log(ref);

  const handleScroll = () => {
    if(!ref || !ref.current){
      return;
    } 

    //behavior è il comportamento dello scroll
    //smooth è un effetto di scorrimento
    //block è la posizione del blocco
    //NB. safari non supporta il smooth
    ref.current.scrollIntoView({ behavior: "smooth", block : "center"});
  }
  return (
    <>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button onClick={handleScroll} className="btn btn-info">Scroll</button>
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref ={ref}>Testo Testo</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </>
  );
};

export default RefExample;

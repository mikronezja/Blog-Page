import { useState } from "react";

const Licznik = () => {
  const [licznik, setLicznik] = useState(() =>
    !localStorage.clickcount ? 1 : Number(localStorage.clickcount)
  );
  const Clicked = () => {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    setLicznik(localStorage.clickcount);
  };

  return (
    <>
      <div>{licznik}</div>
      <button onClick={Clicked}>Dodaj</button>
    </>
  );
};

export default Licznik;

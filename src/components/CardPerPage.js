import { useState } from "react";


const CardPerPage = ({setCardsPerPage, setCurrentPage}) => {
    const [is4Active, SetIs4Active] = useState(true);
    const [is8Active, SetIs8Active] = useState(false);
    const [is12Active, SetIs12Active] = useState(false);

  const handleLayOut = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    switch (e.target.value) {
      case "12":
        setCardsPerPage(12);
        SetIs12Active(true);
        SetIs4Active(false);
        SetIs8Active(false);
        break;
      case "8":
        setCardsPerPage(8);
        SetIs8Active(true);
        SetIs4Active(false);
        SetIs12Active(false);
        break;
      case "4":
        setCardsPerPage(4);
        SetIs4Active(true);
        SetIs8Active(false);
        SetIs12Active(false);
        break;
      default:
        setCardsPerPage(4);
    }
  };
  return (
    <div className="number-per-page">
      <div className="see">
        see
        <button
          className={is4Active ? "per-page active" : "per-page"}
          onClick={handleLayOut}
          value={4}
        >
          4
        </button>
        <button
          className={is8Active ? "per-page  active" : "per-page "}
          onClick={handleLayOut}
          value={8}
        >
          8
        </button>
        <button
          className={is12Active ? "per-page twelve active" : "per-page twelve"}
          onClick={handleLayOut}
          value={12}
        >
          12
        </button>
        <div className="text-end">movies per page</div>
      </div>
    </div>
  );
};


export default CardPerPage;
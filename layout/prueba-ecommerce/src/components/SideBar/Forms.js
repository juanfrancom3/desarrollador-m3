import {useState} from "react";
import ColorInputs from "./ColorInputs";
import PricesInputs from "./PricesInputs";
import SizesInputs from "./SizesInputs";

const Forms = () => {
  const [showDown,
    setShowDown] = useState(false);

  const [showDown2,
    setShowDown2] = useState(false);

  const [showDown3,
    setShowDown3] = useState(false);

  const toggleDown = () => {
    setShowDown(!showDown);
  };

  const toggleDown2 = () => {
    setShowDown2(!showDown2);
  };

  const toggleDown3 = () => {
    setShowDown3(!showDown3);
  };

  return (
    <div className="principal-div">
      <div className="form-div">
        <h1 className="sub-title">Blusas</h1>
        <h3
          className={showDown
          ? "label change h3-colors"
          : "label h3-colors"}
          onClick={toggleDown}>
          CORES
        </h3>
        <div
          className={showDown
          ? "check-divs active"
          : "content check-divs"}>
          <ColorInputs/>
        </div>

        <h3
          className={showDown2
          ? "label change h3-sizes"
          : "label h3-sizes"}
          onClick={toggleDown2}>
          TAMANHOS
        </h3>

        <div
          className={showDown2
          ? "sizes active"
          : "sizes content"}>
          <SizesInputs/>
        </div>

        <h2
          className={showDown3
          ? "promotation-price label change"
          : "promotation-price label"}
          onClick={toggleDown3}>
          FAIXA DE PRECO
        </h2>
        <div
          className={showDown3
          ? " promotation-div active"
          : "promotation-div content"}>
          <PricesInputs/>
        </div>
      </div>
    </div>
  );
};

export default Forms;

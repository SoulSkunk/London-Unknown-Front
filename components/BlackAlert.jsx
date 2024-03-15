import { useState, useEffect } from "react";

function BlackAlert() {
  const [displayText, setDisplayText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []); // Se déclenche une seule fois à l'initialisation du composant

  return (
    <div className="blackline_alert bg-black text-neutral-100 text-sm font-sans font-normal h-6 flex items-center justify-center">
      <div className="txt_area">
        {/* Il manque la transi d'opacité */}
        <p>
          {displayText
            ? "BUY NOW PAY LATER WITH KLARNA"
            : "FREE UK SHIPPING FOR UK ORDERS OVER £150"}
        </p>
      </div>
    </div>
  );
}

export default BlackAlert;

import React, { useState } from "react";

export default function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleToggle() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={handleToggle}          
    >
      <div className="image">
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>


        {showDetails && (
          <>
            <p>{`Specialty: ${hog.specialty}`}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </>
        )}
      </div>

      <div className="extra content">
        <button onClick={(e) => {
            e.stopPropagation(); 
            onHide();
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

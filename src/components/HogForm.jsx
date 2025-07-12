import React, { useState } from "react";

function HogForm({ setHogs }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      "highest medal achieved": medal,
      image: `https://example.com/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`
    };
    setHogs((prevHogs) => {
        return[...prevHogs, newHog];
    });

    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
      <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      <label>
        Greased:
        <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      </label>
      <input type="text" placeholder="Highest Medal Achieved" value={medal} onChange={(e) => setMedal(e.target.value)} required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
import React, { useState } from "react";

export default function HogForm({ onHogFormSubmit }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("");

  function handleSubmit(e) {
    e.preventDefault()

    const newHog = {
      name,
      specialty,
      weight: Number(weight),
      greased,
      "highest medal achieved": medal,
      image: "https://via.placeholder.com/200"
    };
    onHogFormSubmit(newHog);
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("");
    };

  return (
    <form className="add button" onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <label>
        Name:
        <input
          aria-label="Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Weight:
        <input
          aria-label="Weight:"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </label>

      <label>
        Specialty:
        <input
          aria-label="Specialty:"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </label>

      <label>
        Greased?
        <input
          aria-label="Greased?"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </label>

      <label>
        Highest Medal Achieved:
        <input
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Hog</button>
    </form>
  );
}

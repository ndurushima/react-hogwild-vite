import React, { useState } from "react";
import Nav from "./Nav";
import hogData from "../porkers_data";
import HogCard from "./HogCard";
import HogForm from "./HogForm";

export default function App() {

const [hogs, setHogs] = useState(hogData); 
const [greasedOnly, setGreased] = useState(false);    
const [sortBy, setSortBy] = useState("");       
const [hidden, setHidden] = useState(new Set());

const hideHog = (name) => setHidden(prev => new Set(prev).add(name));
function handleAddHog(newHog) { 
	setHogs(prev => [...prev, newHog]);
}

let visible = hogs.filter(h => !hidden.has(h.name));
if (greasedOnly) visible = visible.filter(h => h.greased);
if (sortBy === "name")
    visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "weight")
    visible = [...visible].sort((a, b) => a.weight - b.weight);

   return (
     <div className="App">
       <Nav />

       <div style={{ margin: "1rem" }}>
         <label>
           <input
             type="checkbox"
             aria-label="Greased Pigs Only?"
             checked={greasedOnly}
             onChange={e => setGreased(e.target.checked)}
           />{" "}
           Greased Pigs Only?
         </label>

         <label style={{ marginLeft: "1rem" }}>
           Sort by:{" "}
           <select
             aria-label="Sort by:"
             value={sortBy}
             onChange={e => setSortBy(e.target.value)}
           >
             <option value="">none</option>
             <option value="name">name</option>
             <option value="weight">weight</option>
           </select>
         </label>
       </div>

       <div className="ui three stackable cards">
         {visible.map(hog => (
           <HogCard key={hog.name} hog={hog} onHide={() => hideHog(hog.name)} />
         ))}
       </div>

       <HogForm onHogFormSubmit={handleAddHog} />
     </div>
   );
 }

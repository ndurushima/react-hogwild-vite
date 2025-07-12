import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogCard from "./HogCard";
import HogForm from "./HogForm";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="ui container">
        <div className="ui three stackable cards">
          {hogs.map((hog) => (
            <HogCard hog={hog} key={hog.name} />
          ))}
		<HogForm setHogs={(newHogs) => {
		  hogs.push(...newHogs);
		}} />	
        </div>
      </div>
    </div>
  );
}

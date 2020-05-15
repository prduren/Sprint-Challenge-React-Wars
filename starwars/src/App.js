import React from "react";
import "./App.css";
import Character from "./components/Character";
import useAxios from "axios-hooks";

const App = () => {
  const [{ data, loading, error }] = useAxios(
    "https://swapi.py4e.com/api/people/"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error, null, 2)}</p>;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.results.map((char) => (
        <Character key={char.url} char={char} />
      ))}
    </div>
  );
};

export default App;

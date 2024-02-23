import React, { useEffect, useState } from "react";
import "./Characters.css";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters").then((response) => {
      response.json().then((data) => {
        setCharacters(data);
      });
    });
  }, []);

  return (
    <div>
      <div className="anasayfah2">
        <Link to="/">Main-Page</Link>
      </div>

      <div className="hp-characters">
        <h1>Harry Potter | Movie Characters</h1>
      </div>
      <div className="Characters-container">
        <ul>
          {characters.slice(0, 25).map((character) => (
            <li key={character.id}>
              <Link to={`/CharactersDetails/${character.id}`}>
                {character.name}
                <div className="hp-image-container">
                  <img
                    src={character.image}
                    alt={character.name}
                    width="200"
                    height="200"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;

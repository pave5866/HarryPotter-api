import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./charactersDetails.css";
const CharactersDetails = () => {
  const { id } = useParams();

  const [characters, setCharacters] = useState({});
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`).then(
      (response) => {
        response.json().then((characters) => {
          setCharacters(characters[0]);
          console.log(characters);
        });
      }
    );
  }, []);
  return (
    <div className="CharactersDetails-container">
      <div className="anasayfah3">
        <h1>Characters-Details</h1>
        <h3>
          <Link to="/">Main-Page</Link>
        </h3>
      </div>
      <div className="hp-details2">
        <div className="hp-details-characterss">
          <h2>{characters.name}</h2>
          <img src={characters.image} alt="characters" />
          <p>{characters.house}</p>
          <p>{characters.dateOfBirth}</p>
          <p>{characters.ancestry}</p>
        </div>
      </div>
    </div>
  );
};

export default CharactersDetails;

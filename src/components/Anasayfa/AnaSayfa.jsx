import React from "react";
import { Link } from "react-router-dom";
import HpTattooImage from "../../assets/HpTattoo.jpg";
import "./anaSayfa.css";
const Anasayfa = () => {
  return (
    <div>
      <div className="anasayfah1">
        <h1>Home-Page</h1>
      </div>
      <div className="tikla-karaktergor">
        <Link to="/Characters">Click To See Characters</Link>
      </div>
    </div>
  );
};

export default Anasayfa;

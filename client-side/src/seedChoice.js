import React from 'react';
import {Link} from "react-router-dom";

const seedChoice = (props) => {
  return (
    <div>
      <Link to="./gameDisplay">Carrot</Link>
      <Link to="./gameDisplay">Cabbage</Link>
      <Link to="./gameDisplay">Tomato</Link>
    </div>
  );
};

export default seedChoice;
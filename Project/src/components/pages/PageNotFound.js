import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export default function (){

  return (
    <div className="center">
      <img src="images/img-2.jpg" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

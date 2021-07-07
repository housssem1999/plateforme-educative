import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';

export default function (){

  return (
    <div className="ntfound">
      <div><h1>Hey, cette page n'existe pas !</h1></div>
      <div>  <Link to="/" className="retour">
        Retourner à l'accueil
      </Link></div>
    
    </div>
  );
}

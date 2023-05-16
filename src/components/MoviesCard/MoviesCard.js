import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <li className="movies-card">
      <img className="movies-card__image" alt={props.title} src={props.image}/>
      <button className={props.button} aria-label="Кнопка лайка или удаления" type="button"/>
      <div className="movies-card__description">
          <h3 className="movies-card__title">{props.title}</h3>
          <div className="movies-card__info">
            <p className="movies-card__duration">{props.duration}</p>
          </div>
       
      </div>
    </li>
  );
}

export default MoviesCard;
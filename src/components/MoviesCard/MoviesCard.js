import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const hours = Math.trunc(props.duration/60);
  const minutes = Math.trunc(props.duration - hours * 60);

  return (
    <li className="movies-card">
      <a className="movies-card__link" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt={props.title} src={props.image}/>
      </a>
      <button
          className={props.button}
          aria-label="Кнопка удаления фильма"
          type="button"
          onClick={props.clickOnTheButton}
          />
      <div className="movies-card__description">
        <h3 className="movies-card__title">{props.title}</h3>
        <div className="movies-card__info">
          <p className="movies-card__duration">{hours} ч {minutes} мин</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
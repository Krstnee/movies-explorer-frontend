import React from "react";
import "./Portfolio.css";
import arrow from "../../images/strelka.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Krstnee/how-to-learn" target="_blank" rel="noreferrer">
              <p className="portfolio__link-text">Статичный сайт</p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Krstnee/russian-travel" target="_blank" rel="noreferrer">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Krstnee/react-mesto-api-full" target="_blank" rel="noreferrer">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
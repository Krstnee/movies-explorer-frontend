import React from "react";
import "./AboutMe.css";
import photo from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-container">
          <div className="about-me__info">
            <h3 className="about-me__name">Кристина</h3>
            <p className="about-me__description">Фронтенд-разработчик, 20 лет</p>
            <p className="about-me__text">Я живу в г. Москве, учусь в Финансовом университете при правительстве РФ, на направлении прикладной информатики.
            Я всегда была увлечена программированием, и поэтому поступила в Яндекс.Практикум. После окончания обучения планирую
            дальше развиваться в профессии веб-разработчика.</p>
            <ul className="about-me__contacts-list">
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://github.com/Krstnee" target="_blank" rel="noreferrer">Github</a>
              </li>
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://t.me/Krstnee" target="_blank" rel="noreferrer">Telegram</a>
              </li>
            </ul>
          </div>
          <img className="about-me__image" alt="Фотография студента" src={ photo }/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
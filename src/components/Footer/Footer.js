import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__copyright">&#169; 2023</p>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a className="footer__contacts-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__contacts-item">
              <a className="footer__contacts-link" href="https://github.com/Krstnee" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="footer__contacts-item">
              <a className="footer__contacts-link" href="https://t.me/Krstnee" target="_blank" rel="noreferrer">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
      </footer>
  );
}

export default Footer;

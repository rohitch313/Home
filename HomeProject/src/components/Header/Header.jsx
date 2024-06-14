import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import style from "../Header/Header.module.css"

const Header = () => {
  return (
    <>
      <section className={`container ${style.detail}`}>
        <div className="container d-flex justify-content-center">
          <div className={style.logodiv}>
            <img className={style.logo} src="/images/logo.png" alt="logo" />
          </div>
          <div className={style.icon}>
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faTwitter} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faFacebook} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faPinterestP} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faInstagram} />
          </div>
          <div className={style.center}>
            <div className={style.offer}>
              <aside className={style.call}>
                <img src='/images/call_icon.png' alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>Call anytime</p>
                  <p className={style.para2}>+98(000)-9630</p>
                </div>
              </aside>
              <aside className={style.message}>
                <img src="/images/message_icon.png" alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>Send email</p>
                  <p className={style.para2}>ambed@agrios.com</p>
                </div>
              </aside>
              <aside className={style.location}>
                <img src="/images/location_icon.png" alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>380 St Kilda Road</p>
                  <p className={style.para2}>Melbourne, Australia</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className={style.navBarSection}>
        <div className="navBar container d-flex justify-content-center">
          <div className={style.navBarContent}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                    <li className="nav-item">
                      <a className="nav-link" href="Pages/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Pages/about.html">About</a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="Pages/list.html">Lists</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/services.html">Services</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Project
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="Pages/grid.html">Projects</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/health-food.html">Healthy-food</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        News
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="Pages/news-grid.html">News-grid</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/news-list.html">News-lists</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/news-details.html">News-details</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="Pages/shop.html">Shop</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/shop-details.html">Shop-detail</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="Pages/contact.html">Contact</a>
                    </li>

                    <div className={style.searchIconDiv}>
                      <div className={style.searchIcon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>

                    <div className={style.shopCart}>
                      <FontAwesomeIcon className={style.icon} icon={faCartShopping} />
                      <sup><a href="#">0</a></sup>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

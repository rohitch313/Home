import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <section className={`container ${style.detail}`}>
        <div className="container d-flex justify-content-center">
          <div className={style.logo - div}>
            <img className={style.logo} src="Assests/photos/logo.png" alt="logo" />
          </div>
          <div className={style.icon}>
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faTwitter} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faFacebook} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faPinterestP} />
            <FontAwesomeIcon className={style.FontAwesomeIcon} icon={faInstagram} />
          </div>
          <div className={style.center}>
            <div className="offer">
              <aside className="call">
                <img src="Assests/photos/call_icon.png" alt="" />
                <div className="paragraph">
                  <p className="para1">Call anytime</p>
                  <p className="para2">+98(000)-9630</p>
                </div>
              </aside>
              <aside className="message">
                <img src="Assests/photos/message_icon.png" alt="" />
                <div className="paragraph">
                  <p className="para1">Send email</p>
                  <p className="para2">ambed@agrios.com</p>
                </div>
              </aside>
              <aside className="location">
                <img src="Assests/photos/location_icon.png" alt="" />
                <div className="paragraph">
                  <p className="para1">380 St Kilda Road</p>
                  <p className="para2">Melbourne, Australia</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="navBar-section">
        <div className="navBar container d-flex justify-content-center">
          <div className="navBar-content">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a className="dropdown-item" href="index.html">Home-1</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/Home-2.html">Home-2</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/Home-3.html">Home-3</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/Home-4.html">Home-4</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/Home-5.html">Home-5</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="Pages/Home-6.html">Home-6</a>
                        </li>
                      </ul>
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

                    <div className="searchIcon-div">
                      <div className="searchIcon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>

                    <div className="shop-cart">
                      <FontAwesomeIcon icon={faCartShopping} />
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

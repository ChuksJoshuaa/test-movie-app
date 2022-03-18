import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      ></link>
      <header role="banner" id="nav">
        <nav className="navbar navbar-expand-md navbar-grey bg-dark">
          <div className="container">
            <h1 className="logo">TestApp</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link className="nav-link navy" to="/">
                    Home
                  </Link>
                </li>
              </ul>

              <ul
                className="navbar-nav ml-auto pl-lg-5 pl-0"
                style={{ visibility: "hidden" }}
              >
                <li className="nav-item ">
                  <Link className="nav-link navy" to="/movie">
                    Movie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .spanner {
    font-family: "Great Vibes", cursive;
    font-size: 2.5rem;
    color: white;
  }

  .navy {
    color: #fff;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .navy:hover {
    color: orangered;
  }

  .logo {
    font-size: 2em;
    color: white;
    font-family: "Rajdhani", sans-serif;
  }
  .navbar-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(223, 227, 235)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }

  .navbar-toggler {
    border-color: orangered;
  }
`;

export default Navbar;

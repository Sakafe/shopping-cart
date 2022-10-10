import React from 'react';
import "./Header.css"


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-light " href="#">Sakafe</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-light " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-light " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form action="" class='d-flex ms-auto  search-bar'>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
         
            );
          }; 

export default Header;
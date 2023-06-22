<template>
  
   <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" to="/">
        <img src="@/img/logo.png" alt="Logo" height="30">
        Vicent Forner - Professor
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/unitats" class="nav-link">Unitats</router-link>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <router-link to="/cursos">
            <p class="nav-link nav-title">Cursos</p>
            </router-link>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/cursos/2bat">
              PXSI - II - 2n BAT
            </router-link>
          </div>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <router-link to="/ferramentes">
            <p class="nav-link nav-title">Ferramentes</p>
            </router-link>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/ferramentes/qr">
              Generador de QR
            </router-link>
            <router-link class="dropdown-item" to="/ferramentes/sorteig">
              Sorteig
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/ferramentes/tic">
              TIC
            </router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/contacte" class="nav-link">Contacte</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
    // Puedes agregar métodos o lógica adicional aquí si es necesario
  }
  </script>
  
  <style scoped>

    /* MENU */
    .navbar {
    background-color: var(--main-color);
    
  }

  #menu {
    background-color: var(--main-color);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .navbar-brand {
    color: #fff;
    font-weight: bold;
  }
  
  .nav-title {
    display: inline;
    color: white;
  }

  .nav-title:hover {
    color: var(--black-color);
    text-decoration: none;
  }

  a:has(.nav-title) {
    text-decoration: none;
  }

  .nav-link, router-link {
    color: #fff;
  }

  .nav-link:hover, router-link:hover {
    color: var(--black-color);
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

  .dropdown-menu, .dropdown-item {
    background-color: var(--main-color);
    color: #fff;
  }
  .dropdown-menu:hover, .dropdown-item:hover{
    background-color: var(--main-color);
    color: var(--black-color);
  }

  </style>
  
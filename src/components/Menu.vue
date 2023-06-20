<template>
    <div class="menu">
      <div class="logo">
        <img src="@/img/logo.png" alt="Logo">
        <h1>Vicent Forner - Professor</h1>
      </div>
      <div class="opciones">
        <ul>
          <li>
            <a href="#">Unitats</a>
            <ul class="desplegable">
              <li>
                <a href="#">PXSI - II - 2n BAT</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Ferramentes</a>
            <ul class="desplegable">
              <li>
                <a href="#">Generador de QR</a>
              </li>
              <li>
                <a href="#">Sorteig</a>
              </li>
              <li>
                <a href="#">TIC</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contacte</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
    // Puedes agregar métodos o lógica adicional aquí si es necesario
  }
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .opciones ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .opciones li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .opciones li a {
    text-decoration: none;
    color: #333;
  }
  
  .desplegable {
    display: none;
    position: absolute;
    background-color: #fff;
    padding: 10px;
  }
  
  .desplegable li {
    margin-bottom: 5px;
  }
  
  .opciones li:hover .desplegable {
    display: block;
  }
  </style>
  
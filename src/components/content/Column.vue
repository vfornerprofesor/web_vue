<template>
    <div :class="[existentClass, additionalClass]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
name: 'MenuComponent',
  props: {
    existentClass: {
      type: String,
      default: 'col' // Valor por defecto: cadena vacía
    },
    additionalClass: {
      type: String,
      default: '' // Valor por defecto: cadena vacía
    }
  }
}
  </script>
  
  <style>
  @media (min-width: 1200px) {

    .two_cols {
      width: 50%;
    }
  
    .three_cols {
      width: 33%;
    }
  
    .four_cols {
      width: 25%;
    }
  
    .five_cols {
      width: 20%;
    }
  }
  </style>
  
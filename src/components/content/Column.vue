<template>
    <div :class="[classeExistent, classeAdicional]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
name: 'MenuComponent',
  props: {
    classeExistent: {
      type: String,
      default: 'col' // Valor por defecto: cadena vacía
    },
    classeAdicional: {
      type: String,
      default: '' // Valor por defecto: cadena vacía
    }
  }
}
  </script>
  
  <style>
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
  </style>
  
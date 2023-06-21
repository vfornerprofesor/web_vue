<template>
    <div :class="[classeExistent, classeAdicional]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
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
  
  </style>
  
<template>
    <div :class="[existentClassBlock, additionalClassBlock]">
        <div :class="[existentClassRow, additionalClassRow]">
            <slot></slot>
        </div>
    </div>
  </template>
  <script>
export default {
  name: 'MenuComponent',
  props: {
    existentClassRow: {
      type: String,
      default: 'row' // Valor por defecto: cadena vacía
    },
    additionalClassRow: {
      type: String,
      default: '' // Valor por defecto: cadena vacía
    },
    existentClassBlock: {
      type: String,
      default: 'block' // Valor por defecto: cadena vacía
    },
    additionalClassBlock: {
      type: String,
      default: '' // Valor por defecto: cadena vacía
    }
  }
}
</script>
  <style>
  .fila {
    display: flex;
  }
  </style>
  
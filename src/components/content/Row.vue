<template>
    <div :class="[classeExistentBlock, classeAdicionalBlock]">
        <div :class="[classeExistentRow, classeAdicionalRow]">
            <slot></slot>
        </div>
    </div>
  </template>
  <script>
export default {
  name: 'MenuComponent',
  props: {
    classeExistentRow: {
      type: String,
      default: 'row' // Valor por defecto: cadena vacía
    },
    classeAdicionalRow: {
      type: String,
      default: '' // Valor por defecto: cadena vacía
    },
    classeExistentBlock: {
      type: String,
      default: 'block' // Valor por defecto: cadena vacía
    },
    classeAdicionalBlock: {
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
  
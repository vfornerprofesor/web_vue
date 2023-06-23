<template>
    <div class="accordion">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
      >
        <div
          class="accordion-title"
          @click="toggleAccordion(index)"
        >
          {{ item.title }}
          <span
            :class="['accordion-arrow', { 'accordion-arrow-up': item.open }]">
          </span>
        </div>
        <div
          v-if="item.open"
          class="accordion-content"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { title: 'Título 1', content: 'Contenido 1', open: false },
          { title: 'Título 2', content: 'Contenido 2', open: false },
          { title: 'Título 3', content: 'Contenido 3', open: false }
        ]
      };
    },
    methods: {
      toggleAccordion(index) {
        this.items[index].open = !this.items[index].open;
      }
    }
  };
  </script>
  
  <style scoped>
  .accordion {
    border: 1px solid #ccc;
  }
  
  .accordion-item {
    border-bottom: 1px solid #ccc;
  }
  
  .accordion-title {
    background-color: #f5f5f5;
    padding: 10px;
    cursor: pointer;
    position: relative;
  }
  
  .accordion-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: transform 0.3s;
    rotate: -45deg;
  }
  
  .accordion-arrow-up {
    transform: translateY(-50%) rotate(-180deg);
  }
  
  .accordion-content {
    padding: 10px;
  }
  </style>
  
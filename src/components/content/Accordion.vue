<template>
  <div class="div_accordion" @click="clicAccordeon(id_accordeon)" :id_own="id_accordeon" closed="true">
    <span :class="['accordion-arrow', { 'accordion-arrow-up': false }]">
    </span>
    <slot name="header"></slot>
  </div>

  <div :id_parent="id_accordeon">
    <slot name="content"></slot>
  </div>

</template>

  
<script>
export default {
  props: {
    id_accordeon: {
      type: String,
      required: true
    },
  },
  mounted() {
    // Función onload asignada a la vista
    this.handleOnLoad();
  },
  methods: {
    clicAccordeon(element) {
      var header = document.querySelectorAll('[id_own="' + element + '"]')[0];
      var closed = header.getAttribute('closed');

      //MOSTRAR
      if (closed == 'true') {
        console.log('Mostrant ', element);
        var elements = document.querySelectorAll('[id_parent="' + element + '"]');
        for (var el of elements) {
          //el.hidden = false;
          el.classList.remove('accordion-hide');
          void el.offsetWidth;
          el.classList.add('accordion-show');

        }
        var arrow = header.getElementsByClassName('accordion-arrow')[0];
        if (arrow) {
          arrow.classList.add('accordion-arrow-up');
        }
        header.setAttribute('closed', 'false');
      } else {
        console.log('Ocultant ', element);

        //OCULTAR
        var elements = document.querySelectorAll('[id_parent="' + element + '"]');
        for (var el of elements) {
          //el.hidden = true;
          el.classList.remove('accordion-show');
          void el.offsetWidth;
          el.classList.add('accordion-hide');

          var id_own_el = el.getAttribute('id_own');
          var closed_el = el.getAttribute('closed');
          if (id_own_el && closed_el == 'false') {
            this.clicAccordeon(id_own_el);
          }
        }
        var arrow = header.getElementsByClassName('accordion-arrow')[0];
        if (arrow) {
          arrow.classList.remove('accordion-arrow-up');
        }
        header.setAttribute('closed', 'true');
      }

    },
    handleOnLoad() {
      var elements = document.querySelectorAll('[closed="true"]');
      for (var el of elements) {
        var id_own = el.getAttribute('id_own');
        var children = document.querySelectorAll('[id_parent="' + id_own + '"]');
        for (var child of children) {
          //child.hidden = true;
          child.classList.add('accordion-hide');
        }
      }
    },
  }
};
</script>
  

<style scoped>
.accordion-hide {
  display: none;
}

.accordion-show {
  display: block;
}

.div_accordion {
  position: relative;
}

.accordion-arrow {
  position: absolute;
  top: calc(50% - 10px);
  left: 20px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: transform 0.3s;
  rotate: -45deg;
}

.accordion-arrow-up {
  transform: rotate(-180deg);
  transition: transform 0.3s;
}
</style>
<!--
<Accordion id_accordeon="basic">
    <template v-slot:header>
      TÍTULO
    </template>
    <template v-slot:content>
      CONTENIDO
    </template>
  </Accordion>
-->
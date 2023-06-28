<script setup>
import Title from '../components/blocks/Title.vue';
import Unit from '../components/blocks/Unit.vue';
import Content from '../components/blocks/Content.vue';
import Column from '../components/content/Column.vue';
import Row from '../components/content/Row.vue';
import List from '../components/content/List.vue';
import Text from '../components/content/Text.vue';
import Code from '../components/content/Code.vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';

</script>

<template>
  <Title title="Unitats" :number=1></Title>

  <Code language="javascript">
    <pre>
      var a = 1;
      var b = 2;
      console.log(a + b);
    </pre>
    </Code>

    <Code language="python">
      <pre>
        def hello():
            print("Hola, mundo!")
        
        hello()
      </pre>
    </Code>
    <Code language="html">
        <div>
          <p>Hola</p>
        </div>
      </pre>
    </Code>



  <div class="div_accordion" @click="clicAccordeon('programacio')" id_own="programacio" closed="true">
    <span :class="['accordion-arrow', { 'accordion-arrow-up': false }]">
    </span>
    <Title title="Programació" :number=2></Title>
  </div>
  <div class="div_accordion" @click="clicAccordeon('basic')" id_own="basic" id_parent="programacio" closed="true">
    <span :class="['accordion-arrow', { 'accordion-arrow-up': false }]">
    </span>
    <Title title="Bàsic" :number=3></Title>
  </div>
  <div id_parent="basic">
    <Content>
      <Row>
        <Column additionalClass="text-center">
          <Unit img_name="pensament_computacional" link_page_name="pensament_computacional"
            title="Pensament Computacional">
          </Unit>
        </Column>

      </Row>
    </Content>
  </div>

  <div class="div_accordion" @click="clicAccordeon('blocs')" id_own="blocs" id_parent="programacio" closed="true">
    <span :class="['accordion-arrow', { 'accordion-arrow-up': false }]">
    </span>
    <Title title="Blocs" :number=3></Title>
  </div>
  <div id_parent="blocs">
    <Content>
      <Row>
        <Column additionalClass="text-center">
          <Unit img_name="scratch" link_page_name="scratch" title="Scratch"></Unit>
        </Column>
        <Column additionalClass="text-center">
          <Unit img_name="app_inventor" link_page_name="app_inventor" title="App Inventor"></Unit>
        </Column>
      </Row>
    </Content>
  </div>
</template>
<script>
export default {
  components: {
    Title
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
}
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

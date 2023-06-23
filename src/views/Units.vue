<script setup>
import Title from '../components/blocks/Title.vue';
import Unit from '../components/blocks/Unit.vue';
import Content from '../components/blocks/Content.vue';
import Column from '../components/content/Column.vue';
import Row from '../components/content/Row.vue';
</script>

<template>
  <Title title="Unitats" :number=1></Title>

  <div @click="clicAccordeon('programacio')">
    <Title title="Programació" :number=2></Title>
  </div>
  <div @click="clicAccordeon('basic')" id_parent="programacio">
    <Title title="Bàsic" :number=3></Title>
  </div>
  <div id_parent="basic">
    <Content>
      <Row>
        <Column classeAdicional="text-center">
          <Unit img_name="pensament_computacional" link_page="pensament_computacional" title="Pensament Computacional">
          </Unit>
        </Column>

      </Row>
    </Content>
  </div>

  <div @click="clicAccordeon('blocs')" id_parent="programacio">
    <Title title="Blocs" :number=3></Title>

    <div id_parent="blocs">
      <Content>
        <Row>
          <Column classeAdicional="text-center">
            <Unit img_name="scratch" link_page="scratch" title="Scratch"></Unit>
          </Column>
          <Column classeAdicional="text-center">
            <Unit img_name="app_inventor" link_page="app_inventor" title="App Inventor"></Unit>
          </Column>
        </Row>
      </Content>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Title
  },
  methods: {
    clicAccordeon(element) {
      var elements = document.querySelectorAll('[id_parent="' + element + '"]');
      for (var el of elements) {
        el.hidden = true;
      }
    }
  }
}
</script>
<style scoped></style>

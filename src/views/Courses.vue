<script setup>
import Title from '../components/blocks/Title.vue';
import Unit from '../components/blocks/Unit.vue';
import Row from '../components/content/Row.vue';
import Column from '../components/content/Column.vue';
</script>

<template>
  <Title title="Cursos" :number=1></Title>

  <Title title="ESO" :number=3 :centered="true"></Title>
  <Row>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="1eso" link_page_name="1eso" additionalClass="block_colored"></Unit>
    </Column>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="2eso" link_page_name="2eso" additionalClass="block_colored"></Unit>
    </Column>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="3eso" link_page_name="3eso" additionalClass="block_colored"></Unit>
    </Column>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="4eso" link_page_name="4eso" additionalClass="block_colored"></Unit>
    </Column>
  </Row>

  <Title title="Batxillerat" :number=3 :centered="true"></Title>
  <Row>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="1bat" link_page_name="1bat" additionalClass="block_colored"></Unit>
    </Column>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="2bat" link_page_name="2bat" additionalClass="block_colored"></Unit>
    </Column>
  </Row>

  <Title title="Sistemes microinformàtics i xarxes" :number=3 :centered="true"></Title>
  <Row>
    <Column additionalClass="four_cols text-center">
      <Unit img_name="awe" link_page_name="awe" additionalClass="block_colored"></Unit>
    </Column>
  </Row>

  
</template>


<style scoped></style>

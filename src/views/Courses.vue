<script setup>
import Title from '../components/blocks/Title.vue';
import Unit from '../components/blocks/Unit.vue';
import Row from '../components/content/Row.vue';
import Column from '../components/content/Column.vue';
import Text from '../components/content/Text.vue';
import Content from '../components/blocks/Content.vue';
</script>

<template>
  <Title title="Cursos" number=1></Title>

  <Content>
    <Text
      text="hola açò és una linia amb *una negreta* i també amb un [enllaç a jo que se](https://www.google.es) i ja està"
    ></Text>
  </Content>

  <Title title="ESO" number=3 centered="true"></Title>
  <Row>
    <Column classeAdicional="four_cols text-center">
      <Unit img_name="logo" link_page="/cursos/1eso" title="1r d'ESO"></Unit>
    </Column>
    <Column classeAdicional="four_cols text-center">
      <Unit img_name="css" link_page="/cursos/2eso" title="2n d'ESO"></Unit>
    </Column>
    <Column classeAdicional="four_cols text-center">
      <Unit img_name="html" link_page="/cursos/3eso" title="3r d'ESO"></Unit>
    </Column>
    <Column classeAdicional="four_cols text-center">
      <Unit img_name="css" link_page="/cursos/4eso" title="4t d'ESO"></Unit>
    </Column>
  </Row>

  <Title title="BATXILLERAT" number=3 centered="true"></Title>
  <Row>
    <Column classeAdicional="four_cols text-center">
      <Unit link_img="src/img/logo.png" link_page="/cursos/1bat" title="1r de BAT"></Unit>
    </Column>
    <Column classeAdicional="four_cols text-center">
      <Unit link_img="src/img/logo.png" link_page="/cursos/2bat" title="2n de BAT"></Unit>
    </Column>
  </Row>

  <Title title="CICLE FORMATIU SMX" number=3 centered="true"></Title>
  <Row>
    <Column classeAdicional="four_cols text-center">
      <Unit link_img="src/img/logo.png" link_page="/cursos/awe" title="Aplicacions web"></Unit>
    </Column>
  </Row>
</template>


<style scoped></style>

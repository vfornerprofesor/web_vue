<script setup>
import Title from '../components/blocks/Title.vue';
import Unit from '../components/blocks/Unit.vue';
import Content from '../components/blocks/Content.vue';
import Column from '../components/content/Column.vue';
import Row from '../components/content/Row.vue';
import Accordion from '../components/content/Accordion.vue';

</script>

<template>
  <Title title="Unitats" :number=1></Title>

  <Content>

    <Accordion id_accordeon="programacio">
      <template v-slot:header>
        <Title title="Programació" :number=2></Title>
      </template>
      <template v-slot:content>
        <Accordion id_accordeon="basic">
          <template v-slot:header>
            <Title title="Bàsic" :number=3></Title>
          </template>
          <template v-slot:content>
            <Content>
              <Row>
                <Column additionalClass="text-center">
                  <Unit img_name="pensament_computacional" link_page_name="pensament_computacional"
                    title="Pensament Computacional">
                  </Unit>
                </Column>
  
              </Row>
            </Content>
          </template>
        </Accordion>
  
        <Accordion id_accordeon="blocs">
          <template v-slot:header>
            <Title title="Blocs" :number=3></Title>
          </template>
          <template v-slot:content>
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
          </template>
        </Accordion>
  
        <Accordion id_accordeon="python">
          <template v-slot:header>
            <Title title="Python" :number=3></Title>
          </template>
          <template v-slot:content>
            <Content>
              <Row>
                <Column additionalClass="text-center">
                  <Unit img_name="python" link_page_name="python" title="Python"></Unit>
                </Column>
                <Column additionalClass="text-center">
                  <Unit img_name="python2" link_page_name="python2" title="Python II"></Unit>
                </Column>
              </Row>
            </Content>
          </template>
        </Accordion>
  
        <Accordion id_accordeon="web">
          <template v-slot:header>
            <Title title="Web" :number=3></Title>
          </template>
          <template v-slot:content>
            <Content>
              <Row>
                <Column additionalClass="text-center">
                  <Unit img_name="html" link_page_name="html" title="HTML"></Unit>
                </Column>
                <Column additionalClass="text-center">
                  <Unit img_name="css" link_page_name="css" title="CSS"></Unit>
                </Column>
                <Column additionalClass="text-center">
                  <Unit img_name="php" link_page_name="php" title="PHP"></Unit>
                </Column>
              </Row>
            </Content>
          </template>
        </Accordion>
  
        <Accordion id_accordeon="base_de_dades">
          <template v-slot:header>
            <Title title="Base de dades" :number=3></Title>
          </template>
          <template v-slot:content>
            <Content>
              <Row>
                <Column additionalClass="text-center">
                  <Unit img_name="mysql" link_page_name="mysql" title="MySQL">
                  </Unit>
                </Column>
  
              </Row>
            </Content>
          </template>
        </Accordion>
  
        <Accordion id_accordeon="robotica">
          <template v-slot:header>
            <Title title="Robòtica" :number=3></Title>
          </template>
          <template v-slot:content>
            <Content>
              <Row>
                <Column additionalClass="text-center">
                  <Unit img_name="microbit" link_page_name="microbit" title="Microbit">
                  </Unit>
                </Column>
  
              </Row>
            </Content>
          </template>
        </Accordion>
  
      </template>
    </Accordion>
  
    <Accordion id_accordeon="aplicacions_web">
      <template v-slot:header>
        <Title title="Aplicacions Web" :number=2></Title>
      </template>
      <template v-slot:content>
        <Content>
          <Row>
            <Column additionalClass="text-center">
              <Unit img_name="wordpress" link_page_name="wordpress" title="Wordpress">
              </Unit>
            </Column>
  
          </Row>
        </Content>
      </template>
    </Accordion>
  
    <Accordion id_accordeon="inteligencia_artificial">
      <template v-slot:header>
        <Title title="Intel·ligència Artificial" :number=2></Title>
      </template>
      <template v-slot:content>
        <Content>
          <Row>
            <Column additionalClass="text-center">
              <Unit img_name="ia" link_page_name="ia" title="Conceptes bàsics IA">
              </Unit>
            </Column>
            <Column additionalClass="text-center">
              <Unit img_name="ia_ferramentes" link_page_name="ia_ferramentes" title="Ferramentes IA">
              </Unit>
            </Column>
          </Row>
        </Content>
      </template>
    </Accordion>
  
    <Accordion id_accordeon="ofimatica">
      <template v-slot:header>
        <Title title="Ofimàtica" :number=2></Title>
      </template>
      <template v-slot:content>
        <Content>
          <Row>
            <Column additionalClass="text-center">
              <Unit img_name="full_calcul" link_page_name="full_calcul" title="Full de càlcul">
              </Unit>
            </Column>
  
          </Row>
        </Content>
      </template>
    </Accordion>
  </Content>
</template>
<script>
export default {
  components: {
    Title
  }
}
</script>

<style scoped></style>

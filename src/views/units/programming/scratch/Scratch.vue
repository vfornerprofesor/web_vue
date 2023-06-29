<script setup>
import Title from '@/components/blocks/Title.vue';
import Content from '@/components/blocks/Content.vue';
import Text from '@/components/content/Text.vue';
import Row from '@/components/content/Row.vue';
import Column from '@/components/content/Column.vue';
import Unit from '@/components/blocks/Unit.vue';

</script>
<template>
    <Title title="Scratch" :number=1></Title>
    <Content>
        <Text text="Contingut extret de [Programa Ergo Sum](https://www.programoergosum.es/)."/>
        <Row>
            <Column additionalClass="four_cols text-center">
                <Unit img_name="pensament_computacional" link_page_name="scratch_laberint"
                    title="Pensament Computacional">
                  </Unit>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Unit img_name="pensament_computacional" link_page_name="scratch_flappy_bird"
                    title="Pensament Computacional">
                  </Unit>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Unit img_name="pensament_computacional" link_page_name="scratch_space_invaders"
                    title="Pensament Computacional">
                  </Unit>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Unit img_name="pensament_computacional" link_page_name="scratch_pong"
                    title="Pensament Computacional">
                  </Unit>
            </Column>
        </Row>
    </Content>
</template>
<script setup>
import Title from '../components/blocks/Title.vue';
import Row from '../components/content/Row.vue';
import Column from '../components/content/Column.vue';
</script>

<template>
    <Title number=1 title="Vicent Forner" subtitle="Professor d'Informàtica"></Title>
    <Row>
        <Column>
            <p>Aquesta pàgina conté recursos d’informàtica per a tots els nivells educatius de l’educació secundària
                obligatòria, batxillerat i cicles formatius que pot impartir un professor de secundària d’Informàtica.</p>
            <p>Tots els recursos es poden utilitzar sempre i quan s’anomene aquesta font. També, des de la pàgina de
                contacte pots demanar els materials o rúbriques d’avaluació, així com indicar si es troba alguna errada.</p>
        </Column>

        <Column>
            <div class="text-center">
                <img src="@/img/main.png" class="img-fluid" style="max-height:300px" alt="Responsive image">
            </div>
        </Column>
    </Row>

    <Row additionalClassBlock="block_color">
        <Column additionalClass="text-center">
            <h2>ESO</h2>
            <a href="#" class="btn btn-primary btn-primary-inverse">1 ESO</a>
            <br><br>
            <a href="#" class="btn btn-primary btn-primary-inverse">2 ESO</a>
            <br><br>
            <a href="#" class="btn btn-primary btn-primary-inverse">3 ESO</a>
            <br><br>
            <a href="#" class="btn btn-primary btn-primary-inverse">4 ESO</a>
        </Column>
        <Column additionalClass="text-center">
            <h2>BATXILLERAT</h2>
            <a href="#" class="btn btn-primary btn-primary-inverse">1 BAT</a>
            <br><br>
            <a href="#" class="btn btn-primary btn-primary-inverse">2 BAT</a>
        </Column>
        <Column additionalClass="text-center">
            <h2>SMX</h2>
            <a href="#" class="btn btn-primary btn-primary-inverse">Aplicacions web</a>
        </Column>
    </Row>
</template>

<style scoped></style>

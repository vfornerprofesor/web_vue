<template>
  <div>
    <span :class="['accordion-arrow', { 'accordion-arrow-up': false }]">
    </span>
    <slot name="header"></slot>
  </div>

  <div>
    <slot name="content"></slot>
  </div>

</template>
  
<script>
export default {

};
</script>
  
<style scoped></style>
  <!--
    
Sí, puedes crear un componente al que se le pasen varios slots y aplicar estilos diferentes a cada uno de ellos. Aquí tienes un ejemplo de cómo podrías hacerlo:

html
Copy code
<template>
  <div>
    <div class="first-slot">
      <slot name="first"></slot>
    </div>
    <div class="other-slots">
      <slot name="other"></slot>
    </div>
  </div>
</template>

<style>
  .first-slot {
    /* Estilos para el primer slot */
  }

  .other-slots {
    /* Estilos para los demás slots */
  }
</style>
En este ejemplo, el componente tiene dos contenedores <div> que representan el primer slot y los demás slots respectivamente. Puedes aplicar estilos específicos para cada uno de ellos utilizando las clases CSS correspondientes.

Luego, al utilizar el componente, puedes pasar contenido a cada uno de los slots utilizando las etiquetas <template> con la propiedad slot correspondiente:

html
Copy code
<custom-component>
  <template v-slot:first>
     Contenido del primer slot 
  </template>
  <template v-slot:other>
    Contenido de los demás slots
  </template>
</custom-component>
De esta manera, puedes aplicar estilos diferentes a cada slot según tus necesidades.
-->
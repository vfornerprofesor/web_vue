<template>
    <div>
        <template v-if="ordered">
            <ol>
                <slot></slot>
            </ol>
        </template>
        <template v-else>
            <ul>
                <slot></slot>
            </ul>
        </template>
    </div>
</template>
<!--

  <List :ordered="true">
    <li><Text text="uno" /></li>
    <li><Text text="dos" /></li>
  </List>
  
-->
<script>
export default {
    name: 'List',
    props: {
        ordered: {
            type: Boolean,
            default: false
        }
    }
}
</script>
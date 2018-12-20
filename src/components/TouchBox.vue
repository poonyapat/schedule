<template>
    <div :style="style" @click="forceUpdate" @mouseover="update">&nbsp;</div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean
        },
        editable: Boolean
    },
    computed: {
      style(){
           return `background-color: ${this.value? 'green': '#900'}; width: 100;`  
      } 
    },
    methods: {
        update() {
            if (this.editable)
                this.$emit('input', !this.value)
        },
        forceUpdate(){
                this.$emit('input', !this.value)
        }
    },
}
</script>

<style>
</style>

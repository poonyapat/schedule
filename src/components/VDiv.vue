<template>
    <div :class="[mainStyle, addOnClass, boxHover]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            mainStyle: {
                type: String,
                default: "blue-shadow-box"
            },
            addOnClass: {
                type: String,
                default: null
            },
            onHover: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            boxHover(){
                if (this.onHover){
                    return 'boxHover'
                }
                return 'blue-shadow-box-0'
            }
        }
    }
</script>
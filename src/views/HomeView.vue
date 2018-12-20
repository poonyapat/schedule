<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12>
                <router-link :to="{name: 'InputView'}">
                    <v-div on-hover>
                        <h2>Input</h2>
                        <p>Add your information</p>
                    </v-div>
                </router-link>
            </v-flex>
            <v-flex xs12>
                <router-link :to="{name: 'OutputView'}">
                    <v-div on-hover>
                        <h2>Output</h2>
                        <p>Check you and your friend schedule</p>
                    </v-div>
                </router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import VDiv from '@/components/VDiv'
    export default {
        components: {
            VDiv
        }
    }
</script>

<style>

</style>
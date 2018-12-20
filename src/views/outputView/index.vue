<template>
    <v-container v-if="Object.keys(data).length">
        <v-layout text-xs-center wrap>
            <v-flex xs12 v-for="(user, id) in data" :key="id">
                <v-div>
                    {{user.fullname}}
                    <br />
                    <div v-for="(time, day) in user.schedule" :key="day">
                        {{day}} : {{time}}
                    </div>
                </v-div>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container v-else>
        <v-layout justify-center text-xs-center>
            <v-flex>
                <v-progress-circular :size="200" color="primary" indeterminate></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase'
    import VDiv from '@/components/VDiv'
    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            setData(data) {
                this.data = data.val()
            },
        },
        mounted() {
            firebase.database().ref('/2018/1').on('value', this.setData)
        },
        components: {
            VDiv
        }
    }
</script>

<style>

</style>
<template>
    <v-container v-if="Object.keys(schedules).length">
        <v-layout text-xs-center wrap>
            <v-flex xs12>
                <v-div>
                    <v-autocomplete v-model="ids" :items="keys" label="List IDs (59..., 59..., 60..., ...)" full-width
                        hide-details hide-no-data hide-selected multiple single-line>
                        <template slot="selection" slot-scope="data">
                            <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">
                                {{ data.item }}
                            </v-chip>
                        </template>
                        <template slot="item" slot-scope="data">
                            <v-list-tile-content v-text="`${data.item} - ${schedules[data.item].fullname}`"></v-list-tile-content>
                        </template>
                    </v-autocomplete>
                </v-div>
            </v-flex>
            <v-flex xs12>
                <v-div>
                    <output-table :max="max" :times="schedule"></output-table>
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
    import OutputTable from './outputTable'
    export default {
        data() {
            return {
                ids: [],
                schedules: {},
                max: 0,
                keys: []
            }
        },
        methods: {
            setData(data) {
                this.schedules = data.val()
                this.keys = Object.keys(this.schedules)
            },
            remove (item) {
                const index = this.ids.indexOf(item)
                if (index >= 0) this.ids.splice(index, 1)
            }
        },
        mounted() {
            firebase.database().ref('/2018/1').on('value', this.setData)
        },
        components: {
            VDiv,
            OutputTable
        },
        computed: {
            schedule() {
                let schedule = {
                    monday: {},
                    tuesday: {},
                    wednesday: {},
                    thursday: {},
                    friday: {},
                    saturday: {},
                    sunday: {}
                }
                this.max = 0
                for (let id in this.schedules) {
                    if (this.ids.includes(id)) {
                        for (let day in this.schedules[id].schedule) {
                            let times = this.schedules[id].schedule[day]
                            for (let time in times) {
                                if (!schedule[day][time]) schedule[day][time] = !times[time] + 0
                                else schedule[day][time] += !times[time] + 0
                                if (schedule[day][time] > this.max) {
                                    this.max = schedule[day][time]
                                }
                            }
                        }
                    }
                }
                return schedule
            }
        },
    }
</script>

<style>

</style>
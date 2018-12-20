<template>
    <table id="table" @mousedown="editable = true"  @mouseup="editable = false">
        <tr>
            <th></th>
            <th>{{isXS()?'M':'Monday'}}</th>
            <th>{{isXS()?'T':'Tuesday'}}</th>
            <th>{{isXS()?'W':'Wednesday'}}</th>
            <th>{{isXS()?'Th':'Thursday'}}</th>
            <th>{{isXS()?'F':'Friday'}}</th>
            <th>{{isXS()?'S':'Saturday'}}</th>
            <th>{{isXS()?'Su':'Sunday'}}</th>
        </tr>
        <tr v-for="(val,time) in times['monday']" :key="time">
            <th> {{time}} </th>
            <td>
                <touch-box :editable="editable" v-model="times['monday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['tuesday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['wednesday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['thursday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['friday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['saturday'][time]"></touch-box>
            </td>
            <td>
                <touch-box :editable="editable" v-model="times['sunday'][time]"></touch-box>
            </td>
        </tr>
    </table>
</template>

<script>
    import TouchBox from '@/components/TouchBox'
    export default {
        data() {
            return {
                times: {
                    monday: {},
                    tuesday: {},
                    wednesday: {},
                    thursday: {},
                    friday: {},
                    saturday: {},
                    sunday: {}
                },
                editable: false
            }
        },
        props: ['value'],
        methods: {
            newDateTime() {
                let object = {}
                for (let i = 8; i < 20; i += 0.5) {
                    Object.assign(object, {
                        [this.genTimes(i)]: true
                    })
                }
                return object
            },
            genTimes(n) {
                let half = !!(n % 1)
                n = Math.floor(n)
                let h1 = n>9?n:'0'+n
                let h2
                if (half) h2 = n>8?n+1:'0'+(n+1)
                else h2 = h1
                return `${h1}:${half?'3':'0'}0-${h2}:${half?'0':'3'}0`
            },
            isXS(){
                return window.innerWidth < 576
            }
        },
        mounted() {
            for (let key in this.times) {
                this.times[key] = this.newDateTime()
            }
            this.$emit('input', this.times)
        },
        components: {
            TouchBox
        },
    }
</script>

<style scoped>
    #table {
        width: 100%;
        user-select: none;
    }

    th[data-v-e3d6b044],
    td[data-v-e3d6b044] {
        border-bottom: 1px solid #888;
        border-spacing: 0;
        width: 12%
    }
</style>
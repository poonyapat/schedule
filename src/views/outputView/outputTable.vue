<template>
    <table id="table">
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
            <td v-for="day in days" :key="day" style="width: 12.5%">
                <div :style="`background-color: ${shade(times[day][time])}; width: 100%;`"> {{times[day][time]}} </div>
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
        data() {
            return {
                days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            }
        },
        props: {
            times: {
                type: Object,
                default: ()=> {
                    return {
                        monday: []
                    }
                }
            },
            max: Number
        },
        methods: {
            isXS() {
                return window.innerWidth < 576
            },
            shade(level) {
                let number = parseInt(255 * (this.max - level)/ this.max)
                let hexString = number.toString(16);
                if (hexString.length % 2) {
                    hexString = '0' + hexString;
                }
                if (number === 255)return '#88dd66'
                return `#ff${hexString}${hexString}`
            }
        },
    }
</script>

<style>
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
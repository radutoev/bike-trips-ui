<template>
  <div class="body" style="width: 100%; height: 100%">
    <GChart
    type="BarChart"
    :data="chartData"
    :options="chartOptions"
    style="height:500px"
  />
  </div>
</template>

<script>
import { mapGetters, mapActions , mapMutations} from 'vuex'
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Year', 'January', 'February', 'March','April','May','June','July','August'],
        ['2018', 189604, 213436, 222764, 262338, 358250, 389891, 392076, 189250]
      ],
      chartOptions: {
        chart: {
          title: 'Counts per year',
          subtitle: '2018',
        },
        colors: ['#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2' , '#1565C0', '#E3F2FD']
    }
  }},
  mounted: function () {
    this.getCounts()
  },
  computed : {
    ...mapGetters(['monthlyCounts'])
  },
  methods: {
    ...mapActions(['getCounts']),
    ...mapMutations(['setCounts'])
  }
}
</script>


<style>

</style>
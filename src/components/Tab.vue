<template>
  <div class="body" style="width: 100%; height: 100%">
    <GChart
    type="BarChart"
    :data="monthlyCounts"
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
      chartOptions: {
        chart: {
          title: 'Counts per year',
          subtitle: '',
        },
        colors: [ '#E3F2FD','#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2' , '#1565C0','#0D47A1','#82B1FF','#448AFF','#2979FF','#2962FF']
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
<template>
    <!-- <md-empty-state
      md-icon="build"
      md-label="Still under construction"
      md-description="Here you will find a whole lot of information about the day you picked that isn't just here yet"
      style="margin-top: 10%; margin-bottom: 10%; height: 100%">
    </md-empty-state> -->
    <div style="margin: 10%; ">
    <md-card md-with-hover style="background: #E3F2FD">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{this.$route.query.day + ' - ' + this.$route.query.month + ' - 2018'}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout-item" >
            <span class="md-body-2">Nr of trips for today : {{this.day.length}}</span>
          </div>
          <div style="background: #E3F2FD; margin-top: 3%;margin-bottom: 3%">
              <GChart
                type="PieChart"
                :data="chartData"
                :options="chartOptions"
                style="background: #E3F2FD"
              />
          </div>
          <div style="background: #E3F2FD; margin-top: 3%;margin-bottom: 3%">
              <GChart
                type="PieChart"
                :data="chartData2"
                :options="chartOptions"
                style="background: #E3F2FD"
              />
          </div>
        </md-card-content>

        <md-card-actions>
          
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Gender', 'value'],
        ['Female', Math.floor(Math.random() * 1100)],
        ['Male', Math.floor(Math.random() * 1170)],
        ['Not specified', Math.floor(Math.random() * 100)],
      ],
      chartData2: [
        ['Type', 'value'],
        ['Customer', Math.floor(Math.random() * 1000)],
        ['Subscriber', Math.floor(Math.random() * 1170)]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        colors : [  '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2' , '#1565C0','#0D47A1','#82B1FF','#448AFF','#2979FF','#2962FF']
      }
    }
  },
  computed: {
    ...mapGetters(['day'])
  },
  mounted:function () {
    this.getDay([this.$route.query.month,this.$route.query.day])
  },
  methods: {
    ...mapActions(['getDay']),
    ...mapMutations(['setDataByDay'])
    }
  }
  

</script>



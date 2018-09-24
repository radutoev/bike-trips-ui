<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-transparent">
      <img src='./icons/1280px-Ford_GoBike_logo.svg.png' style="height:30px" @click="showNavigation = true">
      
      <div class="md-toolbar-section-end">
         <h3 style="margin-right:0px">Visualization and Data Analysis</h3>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="clickMethod">
            <md-icon>home</md-icon> 
            <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item @click="toStations">
          <md-icon>location_on</md-icon>
          <span class="md-list-item-text">Stations</span>
        </md-list-item>

        <md-list-item @click="toTrips">
          <md-icon>directions_bike</md-icon>
          <span class="md-list-item-text">Trips</span>
        </md-list-item>

        <md-list-item @click="viewDay">
          <md-icon>today</md-icon>
          <span class="md-list-item-text">View day</span>
        </md-list-item>

        <md-list-item @click="toTabs">
          <md-icon>bar_chart</md-icon>
          <span class="md-list-item-text">Data Analysis</span>
        </md-list-item>

        <md-list-item @click="changeTheme">
          <md-icon>invert_colors</md-icon>
          <span class="md-list-item-text">Personalize</span>
        </md-list-item>

      </md-list>

        
    </md-drawer>

    <md-dialog :md-active.sync="showDialog" style = "height:auto; width: 400px; ">
      <md-dialog-title>Choose which month to visualize</md-dialog-title>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
           <md-field style = "height:auto; width: 90%; left: 5%">
            <label for="month" style="margin: 3px">Month</label>
             <md-select v-model="month" name="month" id="month" style="margin: 3px">
              <md-option value="01">January</md-option>
              <md-option value="02">February</md-option>
              <md-option value="03">March</md-option>
              <md-option value="04">April</md-option>
              <md-option value="05">May</md-option>
              <md-option value="06">June</md-option>
              <md-option value="07">July</md-option>
              <md-option value="08">August</md-option>
              <md-option value="09">September</md-option>
              <md-option value="10">October</md-option>
              <md-option value="11">November</md-option>
              <md-option value="12">December</md-option>
            </md-select>
          </md-field>
          </div>
          </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="goFunction">Go</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showDialog2" style = "height:auto; width: 400px; ">
      <md-dialog-title>Pick a day</md-dialog-title>

        <md-datepicker v-model="selectedDate"  style = "height:auto; width: 90%; left: 5%">
          <label>Select date</label>
        </md-datepicker>

        <md-dialog-actions>
          <md-button class="md-primary" @click="someFunction">Select</md-button>
        </md-dialog-actions>
    </md-dialog>
    <md-content class="md-scrollbar">
        <router-view></router-view>
       
    </md-content>

  </div>
</template>

<script>
  export default {
    name: 'Content',
    components: {
    },  
    data: () => ({
      showNavigation: false,
      showDialog: false,
      showDialog2: false
    }),
    methods: {
      goFunction () {
          this.showDialog = false;
          this.$router.push('/trips/month='+ this.month);
          this.$router.go();
          
      },
      clickMethod() {
          this.$router.push('/stations/1');
          this.showNavigation = false;
      },
      toStations() {
          this.$router.push('/stations');
          this.showNavigation = false;
      },
      toTrips() {
          this.$router.push('/trips');
          this.showNavigation = false
          this.showDialog = true;
      },
      toTabs() {
          this.$router.push('/tab');
          this.showNavigation = false;
      },
      someFunction() {
        this.showDialog2 = false;
        this.$router.push('/day?month='+ (this.selectedDate.getMonth() + 1) + '&day=' + this.selectedDate.getDate());
        this.$router.go();
      },
      changeTheme() {
        this.$router.push('/theme');
        this.showNavigation = false;
      },
      viewDay () {
          this.$router.push('/day');
          this.showNavigation = false;
          this.showDialog2 = true;
      }
}
  }
</script>

<style lang="scss" scoped>
  .page-container {
    height: 100%;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  // .md-content {
  //   padding: 16px;
  // }
  .md-content {
    max-width: 100%;
    max-height: 100%;
    overflow: overlay;
  }

</style>
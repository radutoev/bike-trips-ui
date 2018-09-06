<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Ford GoBike</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-persistent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
            <md-icon>home</md-icon> 
            <span class="md-list-item-text" @click="clickMethod">Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon>location_on</md-icon>
          <span class="md-list-item-text" @click="toStations">Stations</span>
        </md-list-item>

        <md-list-item>
          <md-icon>directions_bike</md-icon>
          <span class="md-list-item-text" @click="toTrips">Trips</span>
        </md-list-item>

        <md-list-item>
          <md-icon>bar_chart</md-icon>
          <span class="md-list-item-text" @click="toTabs">Data Analysis</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content>
        <router-view></router-view>
    </md-content>

  </div>
</template>

<script>
import Trips from './Trips.vue'
  export default {
    name: 'Temporary',
    components: {
        Trips
    },  
    data: () => ({
      showNavigation: false
    }),
    methods: {
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
        this.showNavigation = false;
    },
    toTabs() {
        this.$router.push('/tabs');
        this.showNavigation = false;
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

  .md-content {
    padding: 16px;
  }
</style>
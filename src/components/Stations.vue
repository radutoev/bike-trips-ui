<template>
    <div class="content" style = "width: 100%; height: 100%">
        <div class="upper-content" style="width: 100%; height: 70%">
            <span class="md-display-3" style="color: #00A5E5; text-shadow: 2px 2px 2px #006087;">Grab an eBike and Go </span>
            <vue-flux
                :options="fluxOptions"
                :images="fluxImages"
                :transitions="fluxTransitions"
                ref="slider"
                class="md-elevation-14"
                style="width: 50%; 
                    height: 60%; 
                    margin-left: 25%; 
                    margin-bottom: 1%; 
                    position: relative ;">
            </vue-flux>
            <a class="md-caption">The pictures above belong to Ford Inc ©</a>
            <div class="md-layout-item" 
                style ="width: 50%;
                        margin-left: 25%;
                        margin-top: 5%;
                        margin-bottom: 5%;
                        background: #edeff2;">
                <br>
                <span class="md-title"> About GoBike </span>
                <p class="md-body-2" style="width: 90%; margin-left: 5%">GoBike is a web aplication that allows it's users to visualize data. <br>
                    The dataset we use is provided by Ford Go Bike, a service only available only in San Francisco: Bay Area.<br>
                    It can be found  <router-link to="https://s3.amazonaws.com/fordgobike-data/index.html">here</router-link>.<br>
                    Within this app you can visualize all the stations where you can grab your eBike, and also which route is mostly used by costumers.<br>
                </p>
                <p class="md-body-2" style="width: 90%; margin-left: 5%">
                    Another major part of this app is the data analysis. <br>
                    We analised the given data to determine how the trips are going to increase as the service is getting more and more popular.<br>
                    As the time goes by we are sure that our predictions are going to be more precise than the moment you are reading this.<br>
                </p>
                <br>
            </div>
        
        </div>
        <div class="md-elevation-24">
            <div class="cmd-layout-item" style="width: 100%; height: 10%; margin-bottom: 4%; height: 150px; ">
                <div class="left">
                    <span class="md-subheading" style="margin-right: 50%; line-height: 50px;">GoBike: visualization and data analysis</span>
                    <br>
                    <br>
                    <br>
                    <span class="md-subheading" style="margin-right: 75%; line-height: 50px;">Larisa Micu</span> 
                </div>
                <div class="right">
                    <br>
                    <br>
                    <br style=" line-height: 50px;">
                    <span class="md-subheading" style="margin-left: 75%; line-height: 50px;">Siemens CT</span>
                </div>
            
            </div>
        </div>
    </div>
    
    
</template>

<script>
import { mapGetters, mapActions , mapMutations } from 'vuex'
import { VueFlux, Transitions } from 'vue-flux';

export default {  
    components: {
        'vue-flux': VueFlux
  },  
    data: () => ({
        fluxOptions: {
            autoplay: true
        },
        fluxImages : [
            '//d21xlh2maitm24.cloudfront.net/fgb/FGB-PlusHero-V3.jpg?mtime=20180424130808',
            '//d21xlh2maitm24.cloudfront.net/fgb/split-promo.jpg?mtime=20170530175042',
            '//d21xlh2maitm24.cloudfront.net/fgb/_800x500_crop_bottom-center_100/explore-4.jpg?mtime=20170530153214',
            '//d21xlh2maitm24.cloudfront.net/fgb/_800x500_crop_bottom-center_100/howitworks-4.jpg?mtime=20170530154741'
        ],
        fluxTransitions:  {
            transitionTurn3d: Transitions.transitionSlide
        }
    }),
    computed: {
        ...mapGetters([ 'stations','tripsByMonth'])
    },
    mounted: function() {
        this.listStations(),
        this.gettingTrips()
    },
    methods: {
        ...mapActions(['listStations' , 'gettingTrips', 'ListTripsByMonth']),
        ...mapMutations(['buildHierarchicalTripData', 'getLinks'])
    }
}
</script>

<style lang="scss" scoped>

.content {
    position: relative;
    text-align: center;
    overflow: overlay;
}

.md-display-3 {
    position: relative;
    margin: .5em 0;
    display: block;
}
.left{
    position: relative;
    height:100%;
    width: 50%;
    float: left;
    margin: 0;
    display: block;
}
.right{
    position: relative;
    width: 50%;
    float: right;
    height:100%;
    margin: 0%;
    display: block;
}
</style>


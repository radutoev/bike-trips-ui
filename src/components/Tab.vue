<template>
  <div class="body" style="width: 100%; height: 100%"></div>
</template>

<script>
import d3 from 'd3/d3'
// import svg from 'svg'
import { mapGetters, mapActions , mapMutations} from 'vuex'

export default {
  data () {
    return {}
  },
  mounted: function () {
    this.getCounts()
      .then(this.chart())
      .then(this.resize())
    
  },
  computed : {
    ...mapGetters(['monthlyCounts'])
  },
  methods: {
    ...mapActions(['getCounts']),
    ...mapMutations(['setCounts']),
    chart() {
      // var svg = d3.select('.body').append('svg')
      // .attr("width", "100%").attr("height", "100%"); 
      
      var margin = {top:10, right:10, bottom:30, left:10};

      var width = 150 - margin.left - margin.right;

      var height = 150 - margin.top - margin.bottom;

      var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .03)

      
      var yScale = d3.scale.linear()
          .range([height, 0]);
      // eslint-disable-next-line
      var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");
      // eslint-disable-next-line    
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

      var svgContainer = d3.select(".body").append("svg")
        .attr("width", width+margin.left + margin.right)
        .attr("height",height+margin.top + margin.bottom)
        .append("g").attr("class", "container")
        .attr("transform", "translate("+ margin.left +","+ margin.top +")");

      xScale.domain(this.monthlyCounts.map(function(d) { return d.month; }));
      yScale.domain([0, d3.max(this.monthlyCounts, function(d) { return d.quantity; })]);

      // eslint-disable-next-line
      var xAxis_g = svgContainer.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height) + ")")
        .call(xAxis)
        .selectAll("text");
        
      svgContainer.selectAll(".bar")
          .data(this.monthlyCounts)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return xScale(d.month); })
          .attr("width", xScale.rangeBand())  
          .attr("y", function(d) { return yScale(d.quantity); })
          .attr("height", function(d) { return height - yScale(d.quantity); });
      svgContainer.selectAll(".text")  		
          .data(this.monthlyCounts)
          .enter()
          .append("text")
          .attr("class","label")
          .attr("x", (function(d) { return xScale(d.nr) + xScale.rangeBand() / 4 ; }  ))
          .attr("y", function(d) { return yScale(d.quantity) ; })
          .attr("dy", ".55em")
          .text(function(d) { return (parseInt(d.quantity/1000))+ "K" ; });   	  
      document.addEventListener("DOMContentLoaded", this.resize());
      d3.select(window).on('resize', this.resize()); 

      
          
       
    },
    resize() {
      var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .03);
      var yScale = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");
          
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

      var svgContainer = d3.select(".body").append("svg")
        .attr("width", width * 2)
        .attr("height",height * 2)
        .append("g").attr("class", "container")
        .attr("transform", "translate("+ width +","+ top +")");

      xScale.domain(this.monthlyCounts.map(function(d) { return d.month; }));
      yScale.domain([0, d3.max(this.monthlyCounts, function(d) { return d.quantity; })]);

      // var xAxis_g = svgContainer.append("g")
      //   .attr("class", "x axis")
      //   .attr("transform", "translate(0," + (height) + ")")
      //   .call(xAxis)
      //   .selectAll("text");

      var margin = {top:10, right:10, bottom:30, left:10};
      var width = parseInt(d3.select('.body').style('width'), 10);
      width = width - margin.left - margin.right;

      var height = parseInt(d3.select(".body").style("height"));
      height = height - margin.top - margin.bottom;

      xScale.range([0, width]);
      xScale.rangeRoundBands([0, width], .03);
      yScale.range([height, 0]);

      yAxis.ticks(Math.max(height/50, 2));
      xAxis.ticks(Math.max(width/50, 2));

      d3.select(svgContainer.node().parentNode)
        .style('width', (width + margin.left + margin.right) + 'px');

      svgContainer.selectAll('.bar')
        .attr("x", function(d) { return xScale(d.month); })
        .attr("width", xScale.rangeBand());
        
      svgContainer.selectAll("text")  		
        .attr("x", (function(d) { return xScale(d.month) + xScale.rangeBand() / 2 ; }  ))
        .attr("y", function(d) { return yScale(d.quantity) + 1; })
        .attr("dy", ".75em");   	      

      svgContainer.select('.x.axis').call(xAxis.orient('bottom')).selectAll("text").attr("y",10).call(this.wrap, xScale.rangeBand());
        
      } ,
      wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 2.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", 1.40 + "em");
        while (word == words.pop()) {
          line.push(word);
          tspan.text(line.join(""));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      }); 
      }
  }
}
</script>


<style>

</style>
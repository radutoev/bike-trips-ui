<template>
    <hierarchical-edge-bundling identifier="id" :data="tree" :links="links" node-text="name" style="width: 90%; height: 90%;"/>
</template>

<script>
import {hierarchicalEdgeBundling} from 'vued3tree'

export default {
  components: {
    hierarchicalEdgeBundling
  },
  data() {
    return {
      tree: {
        name: "father",
        children:[{
          name: "son1",
          id: 1
        },{
          name: "son2",
          id: 2
        }, {
          name: "son3",
          id: 4
        },{
          name: "son4",
          id: 3
        },{
          name: "son4",
          id: 5
        },{
          name: "son4",
          id: 6
        },{
          name: "son4",
          id: 7
        },{
          name: "son4",
          id: 8
        },{
          name: "son4",
          id: 9
        },{
          name: "son4",
          id: 10
        },{
          name: "son4",
          id: 11
        },{
          name: "son4",
          id: 12
        },{
          name: "son4",
          id: 13
        },{
          name: "son4",
          id: 14
        },{
          name: "son4",
          id: 15
        },{
          name: "son4",
          id: 16
        },{
          name: "son4",
          id: 17
        },{
          name: "son4",
          id: 18
        },{
          name: "son4",
          id: 19
        },{
          name: "son4",
          id: 20
        },{
          name: "son4",
          id: 21
        },{
          name: "son4",
          id: 22
        },{
          name: "son4",
          id: 23
        }]
      },
      links: [
        {source: 3, target: 1, type: 1},
        {source: 11, target: 4, type: 2},
        {source: 15, target: 6, type: 2},
        {source: 5, target: 23, type: 2},
        {source: 6, target: 14, type: 2},
        {source: 7, target: 10, type: 2},
        {source: 8, target: 9, type: 2},
        {source: 21, target: 5, type: 2},
        {source: 20, target: 7, type: 2},
        {source: 19, target: 17, type: 2},
        {source: 18, target: 22, type: 2},
        {source: 16, target: 18, type: 2},
        {source: 14, target: 15, type: 2},
        {source: 13, target: 3, type: 2},
        {source: 22, target: 2, type: 2},
        {source: 23, target: 13, type: 2}
      ],
      linkTypes: [
        {id: 1, name: 'depends', symmetric: true},
        {id: 2, name: 'implement', inName: 'implements', outName: 'is implemented by'},
        {id: 3, name: 'uses', inName: 'uses', outName: 'is used by'},
      ]
    }
  }
}
</script>

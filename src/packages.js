(function() {
    packages = {
  
      // Lazily construct the package hierarchy from class names.
      root: function(classes) {
        var map = {};
  
        function find(name, data) {
          var node = map[name], i;
          if (!node) {
            node = map[name] = data || {name: name, children: []};
            if (name.length) {
              node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
              node.parent.children.push(node);
              node.key = name.substring(i + 1);
            }
          }
          return node;
        }
  
        classes.forEach(function(d) {
          find(d.start_station_id, d);
        });
  
        return map[""];
      },
  
      // Return a list of imports for the given array of nodes.
      imports: function(nodes) {
        var map = {},
            imports = [],
            importt = [];
            
        // Compute a map from name to node.
        nodes.forEach(function(d) {
          map[d.start_station_id] = d;
        });
        
        var counter = 1;
        // For each import, construct a link from the source to target node.
        nodes.forEach(function(d) {
         /* if (d.children) d.children.forEach(function(i) { */
         if(d.parent)
            imports.push({source: {key: d.start_station_id, parent: d.parent, x: d.x, y: d.y},
                          target: {key: d.end_station_id, parent: d.parent, x: d.parent.children[d.end_station_id].x, y: d.parent.children[d.end_station_id].y}});
            
            
          /*}); */
        });
        
        for (i = 1; i < imports.length; i++) {
          importt.push(imports[i]);
  }
  
        return importt;
      }
  
    };
  })();
  
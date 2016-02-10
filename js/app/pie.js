define(['d3'], function(d3) {
	var pieChart = {
		transformData: function(data, prop) {

			var propUnique = [],	// array for unique values
				newData = [],		// outer array for transformed data
				props = 0;			// count of investigated property values

			// assign each property value equal 
			// to the number of repetitions of this property
			data.forEach(function(i) {
				if ( propUnique[i[prop]] ) propUnique[i[prop]] += 1
					else propUnique[i[prop]] = 1

				props++;		
			});

			// sever key and value from propUnique 
			// and assign each of them to new properties
			// and fill the new array
			for (var k = 0; k < Object.keys(propUnique).length; k++) {
				// get the percentage of each property
				var per = propUnique[Object.keys(propUnique)[k]] / props * 100;

				newData[k] = [];
				newData[k][prop] = Object.keys(propUnique)[k];
				newData[k].count = per;
			}
		
		return newData;

		},

		drawPie: function(data, prop) {
			var piechart = d3.select("body").append("section")
				.attr("id", "piechart");

			piechart.append("h2").text("Ratio by " + prop);
				
			var height = 500, 
			    width = 500, 
			    color = d3.scale.category10();	// color set

			data = this.transformData(data, prop);

			// set radius
			var radius = Math.min(width - 2 , height - 2) / 2;
			 
			// create arc with radius
			var arc = d3.svg.arc()
			    .outerRadius(radius)
			    .innerRadius(0);
			     
			var pie = d3.layout.pie()
			    .sort(null)
			    .value(function(d) { return d.count; });

			var svg = d3.select("#piechart").append("svg")
			        .attr("class", "axis")
			        .attr("width", width)
			        .attr("height", height)
			        .append("g")
			        .attr("transform", 
			            "translate(" +(width / 2) + "," + (height / 2 ) + ")");

			var g = svg.selectAll(".arc")
					.data(pie(data))
					.enter().append("g")
					.attr("class", "arc");  
			 
			g.append("path")
			.attr("d", arc)
			.style("fill", function(d) { return color(d.data[prop]); });

			g.append("text").attr("transform", function(d) {
        		return "translate(" + arc.centroid(d) + ")"; })
			.style("text-anchor", "middle")
			.text(function(d) {
				return d.data.count + "%"
			});
			
			// create map
			var map = d3.select("#piechart").append("ul")
					.attr("class", "map");

			var p = map.selectAll(".tag")
					.data(pie(data))
					.enter().append("li")
					.attr("class", "tag")
					.text(function(d) { return d.data[prop]; });

			p.append("span")
			.style("background-color", function(d) { return color(d.data[prop]); });
		}
	}

	return pieChart;

});
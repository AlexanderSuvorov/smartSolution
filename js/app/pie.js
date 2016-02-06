define(['d3'], function(d3) {
	var pieChart = {
		transformData: function(data, prop) {

			var keyAll = [],
				keyUnique = [],
				newData = [],
				rate = 'rate',
				count = 0;

			data.forEach(function(i) {
				keyAll.push(i[prop])
			});

			for (var i = 0; i < keyAll.length; i++) {
				if (keyUnique[keyAll[i]]) keyUnique[keyAll[i]] += 1
					else keyUnique[keyAll[i]] = 1
			}

			for (k = 0; k < Object.keys(keyUnique).length; k++) {
				newData[k] = [];
				newData[k][prop] = Object.keys(keyUnique)[k];
				newData[k][rate] = keyUnique[Object.keys(keyUnique)[k]];
			}
		
		return newData;

		},

		drawPie: function(data, prop) {
			var height = 500, 
			    width = 500, 
			    margin=30,
				color = d3.scale.category20c();

			data = this.transformData(data, prop);

			// set colors
			var color = d3.scale.category10();
			 
			// set radius
			var radius = Math.min(width - 2*margin, height- 2*margin) / 2;
			 
			// create arc with radius
			var arc = d3.svg.arc()
			    .outerRadius(radius)
			    .innerRadius(0);
			     
			var pie = d3.layout.pie()
			    .sort(null)
			    .value(function(d) { return d.rate; });
			 
			var svg = d3.select("body").append("svg")
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
			 
			g.append("text")
			    .attr("transform", function(d) {
			        return "translate(" + arc.centroid(d) + ")"; })
			    .style("text-anchor", "middle");
			 
		}
	}

	return pieChart;
});
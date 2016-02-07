define(['d3'], function(d3) {
	var pieChart = {
		transformData: function(data, prop) {

			var propUnique = [],	// array for unique values
				newData = [],		// outer array for transformed data
				count = 'count';	// a key containing count of property values 

			// assign each property value equal 
			// to the number of repetitions of this property
			data.forEach(function(i) {
				if ( propUnique[i[prop]] ) propUnique[i[prop]] += 1
					else propUnique[i[prop]] = 1
			});

			// sever key and value from propUnique 
			// and assign each of them to new properties
			// and fill the new array
			for (var k = 0; k < Object.keys(propUnique).length; k++) {
				newData[k] = [];
				newData[k][prop] = Object.keys(propUnique)[k];
				newData[k][count] = propUnique[Object.keys(propUnique)[k]];
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
			var radius = Math.min(width - 2 * margin, height - 2 * margin) / 2;
			 
			// create arc with radius
			var arc = d3.svg.arc()
			    .outerRadius(radius)
			    .innerRadius(0);
			     
			var pie = d3.layout.pie()
			    .sort(null)
			    .value(function(d) { return d.count; });
			 
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
			
			// create map
			var map = d3.select("body").append("div")
					.attr("class", "map");

			var p = map.selectAll(".tag")
					.data(pie(data))
					.enter().append("p")
					.attr("class", "tag")
					.text(function(d) { return d.data[prop]; });

			p.append("span")
			.style("background-color", function(d) { return color(d.data[prop]); });
		}
	}

	return pieChart;

});
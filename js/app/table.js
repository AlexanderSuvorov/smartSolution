define(['jquery'], function($) {

	var Table = {
		getTable: function(data) {
			var myTable = "<table><thead>";
			$.each(data[0], function(head, val) {
				myTable += '<th>' + head + '</th>'
			})
			myTable += '</thead><tbody>'
			$.each(data, function(key, employe) {
				myTable += "<tr>";
				$.each(employe, function(property, value) {
					myTable += "<td>" + value + "</td>"
				})
				myTable += "</tr>";
			})
			myTable += "</tbody></table>";

			return myTable
		},
		
		selectRow: function() {
			$('tr').on('click', function() {
				$(this).toggleClass('select');
			})
		}
	}

	return Table;

});
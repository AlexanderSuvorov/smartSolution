define(function (require) {

	var data = require('json!employers.json'),
    	table = require('./table'),
    	tableHTML = table.getTable(data);

    $('body').append(tableHTML);
    table.selectRow();

    var pie = require('./pie');

    pie.drawPie(data, prop = 'position');

});
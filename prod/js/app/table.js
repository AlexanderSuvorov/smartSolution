define(["jquery"],function(t){var e={getTable:function(e){t("body").append('<section id="table"></section>');var n="<table><thead>";t.each(e[0],function(t,e){n+="<th>"+t+"</th>"}),n+="</thead><tbody>",t.each(e,function(e,c){n+="<tr>",t.each(c,function(t,e){n+="<td>"+e+"</td>"}),n+="</tr>"}),n+="</tbody></table>",t("#table").append(n),this.selectRow()},selectRow:function(){t("tr").on("click",function(){t(this).toggleClass("select")})}};return e});
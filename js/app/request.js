define(function() {
	var request = {
		sendRequest: function(method, url, async) {

		    if (!url) throw new Error('Url required.');

		    method = method || "POST";

		    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

		    var xhr = new XHR();

		    xhr.open(method, url, async);

		    xhr.setRequestHeader("Accept", "json");
		    xhr.setRequestHeader("Content-Type", "application/json");
		    xhr.setRequestHeader("Cache-Control", "no-cache");

		    xhr.send();

		    var responseText = xhr.responseText,
		    	parsedJson;
		    if (responseText) {
		        try {

		            parsedJson = JSON.parse(responseText);

		        } catch(e) {
		            console.log('Incorrect JSON response from server');
		        }
		    }
		    return {
		        status: xhr.status,
		        response: parsedJson
		    };
		}
	}
	return request;
});
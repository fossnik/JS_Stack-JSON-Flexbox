$(document).ready(function() {
	$.getJSON("json/ltcorderbook.json", function(json) {
		HtmlFromJson(json.result)
	});
});

function HtmlFromJson(result) {
	$('#JS-fill').append(
		"<tr>" +
			"<th class='flex-item'>Order Time</th>" +
			"<th class='flex-item'>Price</th>" +
			"<th class='flex-item'>Quantity</th>" +
		"</tr>"
	);

	$.each(result.BuyOrders, function(index, buyOrder) {
		$('#JS-fill').append(
			"<tr>" +
				"<td class='flex-item'>" + buyOrder.OrderTime + "</td>" +
				"<td class='flex-item'>" + buyOrder.Price + "</td>" +
				"<td class='flex-item'>" + buyOrder.Quantity + "</td>" +
			"</tr>"
		);
	});
};

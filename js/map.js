
function initMap() {
	var myLatlng = {lat: 42.018061, lng: -87.807233};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatlng
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map
	});

		map.addListener('center_changed', function() {
		window.setTimeout(function() {
			map.panTo({lat: 42.010448, lng: -87.799654});
		}, 3000);
	});
}





var Homepage = (function () {
	var _mapDfd = new $.Deferred();
	return {
		init: function(){
			this.fullPage();
		},
		fullPage: function(){
			var menu = $('#my_menu');
			var anchors = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];

			$('.fullpages').fullpage({
				slidesNavigation: true,
				controlArrows: false,
				responsiveWidth: 768,
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
				menu: menu,
				afterLoad: function (anchorLink) {
					menu
						.removeClass(anchors.join(' '))
						.addClass(anchorLink)
				},
				afterRender: function () {
					_mapDfd.resolve()
				}
			});
		},
		ready: function(fn){
			_mapDfd.promise()
				.done(fn);
		}
	}
})();

function initMap() {
	Homepage.ready(function() {
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
	})


}

$(window).on('load', function(){
	Homepage.init();
});

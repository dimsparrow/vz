var Homepage = {
	init: function(){
		this.fullPage();
		this.initMap();
	},
	fullPage: function(){
		$('.fullpages').fullpage({
			navigation: true,
			navigationPosition: 'left',
			navigationTooltips: ['First page', 'Second page', 'Third and last page'],
			slidesNavigation: true,
			controlArrows: false
		});
	},
	initMap: function(){
		$('#map').map({
		});
	}
};

$(window).on('load', function(){
	Homepage.init();
});


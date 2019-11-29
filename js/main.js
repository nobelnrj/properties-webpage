$(function () {
	$('.multiple-items').slick({
		infinite: true,
		adaptiveHeight: true,
		adaptiveWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		dots: false,
		centerMode: true,
		centerPadding: '0',
		responsive: [
		{
			breakpoint: 768,
			settings: {
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			centerMode: true,
			centerPadding: '20px',
			slidesToShow: 1
			}
		}
		]
	});
});
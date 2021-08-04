//click menu active
$(document).ready(function () {
	$('.header-menu__icon').click(function (event) {
		$('.header-menu__icon, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('select').niceSelect();
});

$(document).ready(function () {
	$(".menu__select-language").on("click", function () {
		$(this)
			.find(".open-dropdown")
			.toggleClass("select-dropdown__none select-dropdown");
	});
	$(".language").text($(".selected").text());
	$(".list-language__dropdown-item").on("click", function () {
		$(".language").text($(this).text());
		$(".selected").removeClass("selected");
		$(this).toggleClass("selected");
		event.stopPropagation();
		$(".menu__select-language")
			.find(".open-dropdown")
			.toggleClass("select-dropdown__none select-dropdown");
	});
	$(".menu__sidebar-button").on("click", function () {
		$(".mobile-header__menu-nav").addClass("menu-nav__active");
	});
	$(".menu-nav__close-button").on("click", function () {
		$(".mobile-header__menu-nav").removeClass("menu-nav__active");
	});
});

$(document).ready(function () {
	$(".menu__select-language").on("click", function () {
		$(this)
			.find(".open-dropdown")
			.toggleClass("select-dropdown__none select-dropdown");
		$(this)
			.find(".select-language__container .icon-dropdown")
			.toggleClass("icon-dropdown--rotate");
		// $(this)
		// 	.find(".select-language__container .icon-dropdown--rotate")
		// 	.toggleClass("icon-dropdown--rotate icon-dropdown");
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
		$(".menu__select-language")
			.find(".select-language__container .icon-dropdown")
			.toggleClass("icon-dropdown--rotate");
	});
	$(".menu__sidebar-button").on("click", function () {
		$(".mobile-header__menu-nav").addClass("menu-nav__active");
		$(".menu-nav__background").css("display", "block");
		$("body").css("overflowY", "hidden");
	});
	$(".menu-nav__close-button").on("click", function () {
		$(".mobile-header__menu-nav").removeClass("menu-nav__active");
		$(".menu-nav__background").css("display", "none");
		$("body").css("overflowY", "unset");
	});
	// $(".menu-nav__category-children").hide();
	$(".menu-nav__category").accordion({
		icons: false,
		collapsible: true,
		active: false,
		heightStyle: "content",
	});
	$(".menu-nav__category").on("click", function () {
		$(this)
			.find(".accordion-container .accordion-button")
			.toggleClass("fa-caret-right fa-caret-down");
	});
	$(".header-top__language").on("click", function () {
		$(this)
			.find(".open-select")
			.toggleClass(
				"select-language__none select-language__list-language"
			);
	});
	$(".header-top__language-item").on("click", function () {
		$(".flag-chose").attr("src", $(this).find(".flag-image").attr("src"));
		$(".language-chose").text($(this).find(".text").text());
		$(".language-item__selected").removeClass("language-item__selected");
		$(this).addClass("language-item__selected");
	});
	var prevScrollpos = 0;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			$(".header").find(".header-top").addClass("header-top--hide");
		} else {
			$(".header").find(".header-top").removeClass("header-top--hide");
		}
		prevScrollpos = currentScrollPos;
	};
	$(".new-post--slider_content").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 800,
		prevArrow: $(".new-post--slider_navigation__prev"),
		nextArrow: $(".new-post--slider_navigation__next"),
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".media-panel--post__item").on("click", function () {
		let img__media = $(this)
			.find(".media-panel--item__wrapper .media-panel--item__image")
			.css("background-image");
		let title__media = $(this).find(".media-panel--item__title").text();
		img__media = img__media.replace('url("', "").replace('")', "");
		$(".img__media-panel").attr("src", img__media);
		// console.log(img__media);
		$(".media-panel--post__link").text(title__media);
		// console.log(title__media);
		$(".post-item__selected").removeClass("post-item__selected");
		$(this).toggleClass("post-item__selected");
		$(this)
			.find(".post-item--title__selected")
			.removeClass("post-item--title__selected");
		$(this)
			.find(".media-panel--item__title")
			.toggleClass("post-item--title__selected");
		event.stopPropagation();
	});
	$(".navbar-item").on("click", function () {
		console.log($(this).index());
		$(".navbar-item__selected").removeClass("navbar-item__selected");
		$(this).toggleClass("navbar-item__selected");
		let index__item = $(this).index();
		$(".media-panel--content__item").removeClass("default");
		$(".media-panel--content__item:eq(" + index__item + ")").toggleClass(
			"default"
		);
		$(".media-panel--content__item:eq(" + index__item + ")")
			.find(
				".media-panel--post .media-panel--post__container .media-panel--post__list:eq(1)"
			)
			.toggleClass("post-item__selected")
			.find(".media-panel--item__title")
			.toggleClass("post-item--title__selected");
		event.stopPropagation();
	});
	$(".introduction-slider--wrapper").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		dots: true,
		appendDots: $(".introduction-slider--pagination"),
		arrows: false,
	});
	$(".recruitment-slider--content").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		prevArrow: $(".recruitment-slider--button__prev"),
		nextArrow: $(".recruitment-slider--button__next"),
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	$(".author-slider--content").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $(".author-slider--button__prev"),
		nextArrow: $(".author-slider--button__next"),
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

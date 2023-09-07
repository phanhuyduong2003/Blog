var RUN = {
    //Thay đổi ngôn ngữ trên điện thoại
    handleSelectLanguageMobile: () => {
        $('.menu__select-language').on('click', function () {
            $(this).find('.open-dropdown').toggleClass('select-dropdown__none select-dropdown');
            $(this).find('.select-language__container .icon-dropdown').toggleClass('icon-dropdown--rotate');
            $('.menu__select-language').find('.open-dropdown').toggleClass('select-dropdown__none select-dropdown');
            $('.menu__select-language').find('.select-language__container .icon-dropdown').toggleClass('icon-dropdown--rotate');
        });
        $('.list-language__dropdown-item').on('click', function () {
            $('.language').text($(this).text());
            $('.selected').removeClass('selected');
            $(this).toggleClass('selected');
            $('.menu__select-language').find('.open-dropdown').toggleClass('select-dropdown__none select-dropdown');
            $('.menu__select-language').find('.select-language__container .icon-dropdown').toggleClass('icon-dropdown--rotate');
            event.stopPropagation();
        });
    },

    //Thay đổi ngôn ngữ
    handleSelectLanguage: () => {
        $('.menu__select-language').on('click', function () {
            $(this).find('.open-dropdown').toggleClass('select-dropdown__none select-dropdown');
            $(this).find('.select-language__container .icon-dropdown').toggleClass('icon-dropdown--rotate');
        });
        $('.language').text($('.selected').text());
        $('.header-top__language').on('click', function () {
            $(this).find('.open-select').toggleClass('select-language__none select-language__list-language');
        });
        $('.header-top__language-item').on('click', function () {
            $('.flag-chose').attr('src', $(this).find('.flag-image').attr('src'));
            $('.language-chose').text($(this).find('.text').text());
            $('.language-item__selected').removeClass('language-item__selected');
        });
    },

    //Đóng mở sidebar
    handleSideBarMobile: () => {
        $('.menu__sidebar-button').on('click', function () {
            $('.mobile-header__menu-nav').addClass('menu-nav__active');
            $('.menu-nav__background').css('display', 'block');
            $('body').css('overflowY', 'hidden');
        });
        $('.menu-nav__close-button').on('click', function () {
            $('.mobile-header__menu-nav').removeClass('menu-nav__active');
            $('.menu-nav__background').css('display', 'none');
            $('body').css('overflowY', 'unset');
            $('body').css('overflowX', 'hidden');
        });
    },

    //Đóng mở submenu
    handleOpenSubmenu: () => {
        $('.menu-nav__category').accordion({
            header: '.accordion-container',
            icons: false,
            collapsible: true,
            active: true,
            heightStyle: 'content',
        });
        $('.menu-nav__category').on('click', function () {
            $('.accordion-button').not($(this).find('.accordion-button')).removeClass('fa-caret-down');
            $('.menu-nav__category').not(this).accordion('option', 'active', false);
            $(this).find('.accordion-button').toggleClass('fa-caret-down');
        });
    },

    //Ẩn menu khi cuộn
    handleMenuOnScroll: () => {
        var prevScrollpos = 0;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                $('.header').find('.header-top').addClass('header-top--hide');
            } else {
                $('.header').find('.header-top').removeClass('header-top--hide');
            }
            prevScrollpos = currentScrollPos;
        };
    },

    //Cài đặt slide cho bài viết mới
    handleSlideNewPost: () => {
        $('.new-post--slider_content').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            // speed: 800,
            prevArrow: $('.new-post--slider_navigation__prev'),
            nextArrow: $('.new-post--slider_navigation__next'),
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
    },

    //Cài đặt slide cho ảnh giới thiệu
    handleSlideIntroduction: () => {
        $('.introduction-slider--wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            // speed: 1000,
            dots: true,
            appendDots: $('.introduction-slider--pagination'),
            arrows: false,
        });
    },

    //Cài đặt slide cho tuyển dụng
    handleSlideRecruitment: () => {
        $('.recruitment-slider--content').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            // autoplay: true,
            autoplaySpeed: 3000,
            // speed: 1000,
            prevArrow: $('.recruitment-slider--button__prev'),
            nextArrow: $('.recruitment-slider--button__next'),
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
    },

    //Cài đặt slide cho tác giả
    handleSlideAuthor: () => {
        $('.author-slider--content').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.author-slider--button__prev'),
            nextArrow: $('.author-slider--button__next'),
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
    },

    //Cài đặt slide cho bài viết liên quan
    handleSlidePostRelated: () => {
        $('.post-slider--content').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.post-slider--prev'),
            nextArrow: $('.post-slider--next'),
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    },

    //Xử lý lựa chọn xem ảnh/video
    handleMediaPanel: () => {
        let all_media = [
            {
                id: 15,
                type: 2,
                title: `Sun* Men's Day 2023: Vui thôi chưa đủ, phải gọi là "đã"!`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/15e74e74-41bd-471d-8827-ad70a8b68857.png',
                detail: {
                    author: '				Đăng bởi Ling + Hằng',
                    view: '1103 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/15e74e74-41bd-471d-8827-ad70a8b68857.png',
                    video_main: '',
                },
            },
            {
                id: 14,
                type: 1,
                title: `[Radio 28/04] Quà tặng âm nhạc: Tạm biệt tháng Tư đầy nắng và gió`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/d9544278-e3a2-4bf9-b9a1-ae7c98e91c5d.png',
                detail: {
                    author: '				Đăng bởi Sun* Radio',
                    view: '180 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/d9544278-e3a2-4bf9-b9a1-ae7c98e91c5d.png',
                    video_main: '',
                },
            },
            {
                id: 13,
                type: 1,
                title: `[Radio 03/03] Happy Sun* Day`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/ecf66d49-198e-40bb-a006-a3b359a1856b.png',
                detail: {
                    author: '				Đăng bởi Sun* Radio',
                    view: '200 Lượt xem',
                    image_main: '',
                    video_main: 'https://player.vimeo.com/video/804159839?app_id=122963',
                },
            },
            {
                id: 12,
                type: 2,
                title: `Cùng nhìn ngắm những khoảnh khắc Giáng sinh rộn ràng của người Sun*`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/346b9674-fcaf-4473-ac7f-47860a3db874.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng (tổng hợp)',
                    view: '604 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/346b9674-fcaf-4473-ac7f-47860a3db874.png',
                    video_main: '',
                },
            },
            {
                id: 11,
                type: 2,
                title: `6000 viên pin - một kỷ lục mới tiếp tục được xác lập tại Ngày hội "Đổi
		pin rinh quà"`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/cd1e6050-67e6-4c01-a3b5-9bc080414bf8.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng',
                    view: '680 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/cd1e6050-67e6-4c01-a3b5-9bc080414bf8.png',
                    video_main: '',
                },
            },
            {
                id: 10,
                type: 1,
                title: `Sun* Radio đặc biệt: Lời cảm ơn những hành động tốt đẹp nhỏ bé`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/fbbcff7e-6fc5-4a72-98ae-81ec30a315d2.jpg',
                detail: {
                    author: '				Đăng bởi Sun* Radio',
                    view: '139 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/fbbcff7e-6fc5-4a72-98ae-81ec30a315d2.jpg',
                    video_main: '',
                },
            },
            {
                id: 9,
                type: 2,
                title: `Cùng những “KOL đặc biệt” lan tỏa cẩm nang hành động Sun*ness tới toàn
		dân!`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/4db94e6a-478a-4e61-be3d-1a7c27e2dd9b.png',
                detail: {
                    author: '				Đăng bởi Phóng viên Sun*ness',
                    view: '554 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/4db94e6a-478a-4e61-be3d-1a7c27e2dd9b.png',
                    video_main: '',
                },
            },
            {
                id: 8,
                type: 2,
                title: `Những "người lái đò" thầm lặng tại Sun*`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/3b9b570b-5044-4e95-aa92-25fe52ae25d2.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng',
                    view: '450 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/3b9b570b-5044-4e95-aa92-25fe52ae25d2.png',
                    video_main: '',
                },
            },
            {
                id: 7,
                type: 2,
                title: `Sunner trải nghiệm 1 tuần trở thành "nghệ nhân" đồ da`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/d8715a29-8256-4afc-8a6a-da725f4ea655.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng',
                    view: '400 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/d8715a29-8256-4afc-8a6a-da725f4ea655.png',
                    video_main: '',
                },
            },
            {
                id: 6,
                type: 2,
                title: `"Rụng tim" trước những khoảnh khắc đáng yêu ngày 20/10 tại Sun*`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/db5f5509-6ff6-4a7e-9569-b6576eb92a81.jpg',
                detail: {
                    author: '				Đăng bởi Hằng + Ling',
                    view: '839 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/db5f5509-6ff6-4a7e-9569-b6576eb92a81.jpg',
                    video_main: '',
                },
            },
            {
                id: 5,
                type: 2,
                title: `Toàn cảnh giải cầu lông Sun* Badminton Autumn 2022`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/6cf58e48-ffa3-4c37-a09b-280efb53827d.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng',
                    view: '459 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/6cf58e48-ffa3-4c37-a09b-280efb53827d.png',
                    video_main: '',
                },
            },
            {
                id: 4,
                type: 2,
                title: `Ấn tượng Trung thu 3 miền của người Sun*`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/2521f270-920e-4384-98b6-4a59f2829644.png',
                detail: {
                    author: '				Đăng bởi Thu Hằng',
                    view: '603 Lượt xem',
                    image_main: 'https://news.sun-asterisk.com/images/440x248/2521f270-920e-4384-98b6-4a59f2829644.png',
                    video_main: '',
                },
            },
            {
                id: 3,
                type: 1,
                title: `[Radio 26/08] Quà tặng âm nhạc: Gửi tới chàng trai có nụ cười tỏa
		nắng...`,
                image_item: 'https://news.sun-asterisk.com/images/440x248/14cb4540-1748-42f6-a11e-364fc0e5cd4d.jpg',
                detail: {
                    author: '				Đăng bởi Sun* Radio',
                    view: '382 Lượt xem',
                    image_main: '',
                    video_main: 'https://player.vimeo.com/video/743263069?app_id=122963',
                },
            },
            {
                id: 2,
                type: 1,
                title: '		[Radio 29/07] Quà tặng âm nhạc: Tớ chỉ biết đến mỗi cậu thôi đấy!!',
                image_item: 'https://news.sun-asterisk.com/images/440x248/6ee05aaf-08da-46a4-b821-8bddf68f049c.jpg',
                detail: {
                    author: '				Đăng bởi Ling',
                    view: '213 Lượt xem',
                    image_main: '',
                    video_main: 'https://player.vimeo.com/video/734590690?app_id=122963',
                },
            },
            {
                id: 1,
                type: 1,
                title: '[Radio 24/06] Quà tặng âm nhạc: Thanh xuân của chúng ta là...',
                image_item: 'https://news.sun-asterisk.com/images/440x248/e2bba25b-7c3f-4ac5-9459-8e0c2c0fd6d6.jpg',
                detail: {
                    author: 'Đăng bởi Ling',
                    view: '114 Lượt xem',
                    image_main: '',
                    video_main: 'https://player.vimeo.com/video/723599348?app_id=122963',
                },
            },
        ];
        let type_navbar = [
            {
                name: 'ALL MEDIA',
                type: 99,
            },
            {
                name: 'VIDEOS',
                type: 1,
            },
            {
                name: 'PHOTOS',
                type: 2,
            },
        ];

        //Lấy ra thể loại mặc định
        const handleGetTypeDefault = () => {
            let type_default = $('.media-panel--content__item');

            $(type_default[0]).removeClass('default');
            $(type_default[0]).addClass('default');
        };

        //Lấy ra danh sách thể loại
        const handleGetListType = () => {
            type_navbar.map((item) => {
                $('.media-panel--header__navbar').append(`<div class="navbar-item" data-type=${item.type}>${item.name}</div>`);
            });
        };

        //Xử lý chuyển động chờ ảnh/video từ dữ liệu
        const handleOverLoading = () => {
            $('.media-panel--post__image').addClass('loading-iframe');
            $('.media-panel--post__iframe').addClass('loading-iframe');
            setTimeout(() => {
                $('.media-panel--post__image').removeClass('loading-iframe');
                $('.media-panel--post__iframe').removeClass('loading-iframe');
            }, 2000);
        };

        //Lấy bài viết mặc định
        const handleGetPostDefault = () => {
            let lastPostID = all_media[0].id;
            const postDefault = () => {
                let handleListPost = all_media.filter((item) => item.id === Number(lastPostID));
                $('.media-panel--post__main').append(
                    `<div class="media-panel--post__wrapper "><a href="" class="media-panel--post__image loading-iframe"><img src="${handleListPost[0].detail.image_main}" alt="" class="img__media-panel" /> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleListPost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleListPost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleListPost[0].detail.view} </span> </div>`,
                );
                handleOverLoading();
            };
            postDefault();
        };

        //Lấy thể loại được chọn mặc định
        const handleGetNavbarDefault = () => {
            let navbarItem = $('.navbar-item');
            $(navbarItem[0]).addClass('navbar-item__selected');
        };

        //Lấy bài viết được chọn mặc định
        const handleGetPostSelected = () => {
            let postItem = $('.media-panel--post__item');
            $(postItem[0]).addClass('post-item__selected');
        };

        //Xử lý chọn bài viết trong danh sách bài viết
        const handleClickPost = () => {
            let id_navbar = type_navbar[0].type;
            let handleTypePost = all_media.filter((item) => (Number(id_navbar) === 99 ? item : item.type === Number(id_navbar)));
            handleTypePost.map((item) => {
                $('.media-panel--post__list').append(
                    `<div class='media-panel--post__item' data-post=${item.id}><div class='media-panel--item__wrapper'><div class='media-panel--item__image' style='background-image: url(${item.image_item});'></div></div><div class='media-panel--item__title'>${item.title}</div></div>`,
                );
                handleGetPostSelected();
                $('.media-panel--post__item').on('click', function () {
                    let id_post = $(this).attr('data-post');

                    let handleListPost = all_media.filter((item) => item.id === Number(id_post));
                    if (handleListPost[0].detail.video_main !== '') {
                        $('.media-panel--post__main').replaceWith(
                            `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__iframe loading-iframe">
<div style="padding: 56.25% 0 0 0; position: relative"><iframe src="${handleListPost[0].detail.video_main}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleListPost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleListPost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleListPost[0].detail.view} </span> </div></div>`,
                        );
                    } else {
                        $('.media-panel--post__main').replaceWith(
                            `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__image loading-iframe"><img src="${handleListPost[0].detail.image_main}" alt="" class="img__media-panel" /> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleListPost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleListPost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleListPost[0].detail.view} </span> </div></div>`,
                        );
                    }
                    $('.post-item__selected').removeClass('post-item__selected');
                    $(this).toggleClass('post-item__selected');
                    $('.media-panel--post__link').text();
                    handleOverLoading();
                    event.stopPropagation();
                });
            });
        };

        //Xử lý chọn thể loại
        const handleClickNavbar = () => {
            $('.navbar-item').on('click', function () {
                $('.media-panel--post__main').replaceWith(`<div class="media-panel--post__main"></div>`);
                $('.media-panel--post__list').replaceWith(`<div class="media-panel--post__list"></div>`);
                let id_navbar = $(this).attr('data-type');
                let handleTypePost = all_media.filter((item) => (Number(id_navbar) === 99 ? item : item.type === Number(id_navbar)));
                handleTypePost.map((item) => {
                    $('.media-panel--post__list').append(
                        `<div class='media-panel--post__item' data-post=${item.id}><div class='media-panel--item__wrapper'><div class='media-panel--item__image' style='background-image: url(${item.image_item});'></div></div><div class='media-panel--item__title'>${item.title}</div></div>`,
                    );
                });
                if (handleTypePost[0].detail.video_main !== '') {
                    $('.media-panel--post__main').replaceWith(
                        `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__iframe loading-iframe">
<div style="padding: 56.25% 0 0 0; position: relative"><iframe src="${handleTypePost[0].detail.video_main}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleTypePost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleTypePost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleTypePost[0].detail.view} </span> </div></div>`,
                    );
                } else {
                    $('.media-panel--post__main').replaceWith(
                        `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__image loading-iframe"><img src="${handleTypePost[0].detail.image_main}" alt="" class="img__media-panel" /> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleTypePost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleTypePost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleTypePost[0].detail.view} </span> </div></div>`,
                    );
                }
                handleOverLoading();
                // handleGetPostDefault();
                handleGetPostSelected();
                handleClickItem();
                let itemClick = $('.navbar-item');
                for (const item of itemClick) {
                    $(item).removeClass('navbar-item__selected');
                }
                $(this).addClass('navbar-item__selected');
            });
        };

        //Xử lý khi chọn bài viết
        const handleClickItem = () => {
            $('.media-panel--post__item').on('click', function () {
                let id_post = $(this).attr('data-post');
                let handleListPost = all_media.filter((item) => item.id === Number(id_post));
                if (handleListPost[0].detail.video_main !== '') {
                    $('.media-panel--post__main').replaceWith(
                        `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__iframe loading-iframe">
<div style="padding: 56.25% 0 0 0; position: relative"><iframe src="${handleListPost[0].detail.video_main}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleListPost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleListPost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleListPost[0].detail.view} </span> </div></div>`,
                    );
                } else {
                    $('.media-panel--post__main').replaceWith(
                        `<div class="media-panel--post__main"><div class="media-panel--post__wrapper "><a href="" class="media-panel--post__image loading-iframe"><img src="${handleListPost[0].detail.image_main}" alt="" class="img__media-panel" /> </a> </div> <div class="media-panel--post__title" > <a href="" class="media-panel--post__link" > ${handleListPost[0].title} </a> </div> <div class="media-panel--post__info" > <span class="media-panel--author"><a href="">${handleListPost[0].detail.author} </a></span > <span class="media-panel--post__line" ></span> <span class="media-panel--view"> ${handleListPost[0].detail.view} </span> </div></div>`,
                    );
                }
                $('.post-item__selected').removeClass('post-item__selected');
                $(this).toggleClass('post-item__selected');
                $('.media-panel--post__link').text();
                handleOverLoading();
                event.stopPropagation();
            });
        };
        handleGetTypeDefault();
        handleGetListType();
        handleGetPostDefault();
        handleGetPostSelected();
        handleGetNavbarDefault();
        handleClickPost();
        handleClickNavbar();
    },
    handleInputComment: () => {
        $('.input-field').on('input', function () {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    },
    handleClickPagination: () => {
        $('.category-navigation--page').on('click', function () {
            $('.category-navigation--active').removeClass('category-navigation--active');
            $(this).toggleClass('category-navigation--active');
        });
    },
    handleFormFooterModal: () => {
        $('.main-footer--modal').iziModal({
            closeButton: true,
            bodyOverflow: true,
            focusInput: false,
        });
        $('.main-footer--form').on('click', function (event) {
            event.preventDefault();
            $('.main-footer--modal').iziModal('open');
        });
        $('.modal-close').on('click', function () {
            $('.main-footer--modal').iziModal('close');
        });
    },
    handleClearInput: () => {
        $('.header-top__search').on('submit', function () {
            $('.header-top__search-field').val('');
        });
        $('.menu-nav__search').on('submit', function () {
            $('.search-field').val('');
        });
    },
    handleRecruitmentModal: () => {
        $('.recruitment-detail').iziModal({
            closeButton: true,
            bodyOverflow: true,
            focusInput: false,
        });
        $('.recruitment-slider--container').on('click', function (event) {
            event.preventDefault();
            $('.recruitment-detail[data-modal="' + $(this).data('click') + '"]').iziModal('open');
        });
        $('.recruitment-detail--closebutton').on('click', function () {
            $('.recruitment-detail[data-modal="' + $(this).data('button') + '"]').iziModal('close');
        });
    },

    init: () => {
        RUN.handleSelectLanguageMobile();
        RUN.handleSelectLanguage();
        RUN.handleSideBarMobile();
        RUN.handleOpenSubmenu();
        RUN.handleMenuOnScroll();
        RUN.handleSlideNewPost();
        RUN.handleSlideIntroduction();
        RUN.handleSlideRecruitment();
        RUN.handleSlideAuthor();
        RUN.handleSlidePostRelated();
        RUN.handleMediaPanel();
        RUN.handleInputComment();
        RUN.handleClickPagination();
        RUN.handleFormFooterModal();
        RUN.handleClearInput();
        RUN.handleRecruitmentModal();
    },
};
$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});

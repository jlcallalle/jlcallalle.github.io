var ancho = $(window).width();
var alto = $(window).height();
var MyApp = {
    home : {
        banner : function(){
            // calcular alto banner home
            //76px (header) + 100px(cajas) = 176
            var alto_imagen = alto;
            var alto_banner = alto_imagen - 185;
            //alert(alto_banner);
            $('.banner-home').css('height', alto_banner+'px');

            $(window).resize(function() {
                //76px (header) + 100px(cajas) = 176
                var alto_imagen = $(window).height();
                var alto_banner = alto_imagen - 185;
                //alert(ancho_banner);
                $('.banner-home').css('height', alto_banner+'px');
            });

            $(window).scroll(function () {
                parallaxBannerHome();
            });

            function parallaxBannerHome() {
                //var altura_del_header = $('header').outerHeight(true);
                if ($(window).scrollTop() >= 0){
                    $('.banner-home ul.slides-container li').find('img').css( "top", $(window).scrollTop()* 0.8 );

                    var imagen_testimo = 'right '+($(window).scrollTop()*0.1-250)+'px';
                    $('.section-testimonials').css('background-position', imagen_testimo );
                }
            }
        },
        slider: function(){
            $('#slides').superslides({
              inherit_width_from: '.banner-home',
              inherit_height_from: '.banner-home'
            });
        },
        productos:function(){
            $(window).load(function(){
                var alto_imagen_prod = $('.container-prod ul.mostrar-desktop li .container-image img').height();
                //alert(alto_imagen_prod);
                $('.container-prod ul.mostrar-desktop li .content-text').css('height', alto_imagen_prod +'px');
            });

            $(window).resize(function() {
                var alto_imagen_prod = $('.container-prod ul.mostrar-desktop li .container-image img').height();
                $('.container-prod ul.mostrar-desktop li .content-text').css('height', alto_imagen_prod +'px');
            });

            var alto_imagen_prod_movil = $('.container-prod ul.mostrar-movil li .container-image img').height();
            //alert(alto_imagen_prod_movil);
            $('.container-prod ul.mostrar-movil li .content-text').css('height', alto_imagen_prod_movil +'px');

            $(window).resize(function() {
            var alto_imagen_prod_movil = $('.container-prod ul.mostrar-movil li .container-image img').height();
            $('.container-prod ul.mostrar-movil li .content-text').css('height', alto_imagen_prod_movil +'px');
            });
        },
        slider_nosotros: function(){
            if ($(window).width()>830) {
                $('.bxslider-nosotros').bxSlider({
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    pager:true,
                    slideMargin: 0,
                     adaptiveHeight: true
                });
            } else {
                sliderNosotros = $('.bxslider-nosotros').bxSlider({
                    infiniteLoop: true,
                    hideControlOnEnd: false,
                    pager:false,
                    slideMargin: 0,
                    touchEnabled: false,
                    //oneToOneTouch: false
                    adaptiveHeight: true
                });
            }
            // enquire.register("screen and (max-width: 40em)", {
            //     match : function() {
            //         sliderNosotros = $('.bxslider-nosotros').bxSlider({
            //             infiniteLoop: false,
            //             hideControlOnEnd: false,
            //             pager:true,
            //             slideMargin: 0
            //         });
            //     },
            //     unmatch : function() {
            //         //sliderNosotros.reloadSlider();
            //     },
            //     setup : function() {}
            // });
        },

        slider_testimonios : function() {
        	$('.slider-testimonios').bxSlider({});
        },

        count_home:function(){
            ban = true;
            alto = $(window).height();
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                var seccion_count = $('#porque').offset().top - alto;

                if (scroll >= seccion_count && ban) {
                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 5000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                    ban = false;
                }
            });
        },
        acordeon_sedes:function(){
            //ACORDEON HOME
            function close_accordion_section() {
                $('.accordion .accordion-section-title').removeClass('active');
                $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
            }

            $('.accordion-section-title').click(function(e) {
                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');

                if($(e.target).is('.active')) {
                    close_accordion_section();
                }else {
                    close_accordion_section();

                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                }

                e.preventDefault();
            });
        }
    },
    carreras : {
        banner : function() {
            $(window).scroll(function () {
                //parallaxBannerCarrera();
            });

            function parallaxBannerCarrera() {
                if ($(window).scrollTop() >= 0){
                    $('.content-banner-carrera img').css( "margin-top", $(window).scrollTop()* 0.52);
                }
            }
        },
        menu : function() {
            /*scoll menu interna*/
            $(function(){
              $.scrollIt();
            });

            /*#########################
            # Scroll To DIV
            #########################*/
            $(window).scroll(function () {
                var alto_imagen = $('.content-banner-carrera').height();
                //console.log($(window).scrollTop())
              if ($(window).scrollTop() >= alto_imagen) {
                $('.menu-interna').addClass('menu-fixed');
              }
              else {
                $('.menu-interna').removeClass('menu-fixed');
              }
            });
        },
        interna : function() {
            $('.owl-malla').owlCarousel({
                loop:false,
                nav:true,
                dots: false,
                items:1,
                margin:30,
                autoHeight:true,
                stagePadding:30,
                smartSpeed:450
            });
        },

        interna_tab_descripcion : function(){
            $('ul.tabs-descripcion li').click(function(){
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs-descripcion li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });

            if ($(window).width() < 490){
                $('ul.tabs-descripcion').click(function(e) {
                    $('ul.tabs-descripcion li').each(function(index, el) {
                      //console.log($(this).attr('class'));
                        if($(this).attr('class') == 'tab-link current') {
                            $(this).animate({width:"15%", width:"84.8%"});
                        } else {
                            $(this).animate({width:"84.8%", width:"15%"});
                        }

                    });
                });

            }

        },

        slider_sedes : function(){
            enquire.register("screen and (min-width: 600px)", {
                match : function() {
                    sliderSedesInterna= $('.bxslider-sedes').bxSlider({
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        minSlides: 1,
                        maxSlides: 3,
                        moveSlides:1,
                        slideWidth: 220,
                        slideMargin: 30,
                        touchEnabled: false,
                        pager:false
                    });
                },
                unmatch : function() {
                    sliderSedesInterna.destroySlider();
                },
                setup : function() {}
            });
        },

        accordion_ciclo_movil(){
            //ACORDEON ciclos
            function close_accordion_section() {
                $('.accordion-ciclos .accordion-section-title').removeClass('active');
                $('.accordion-ciclos .accordion-section-content').slideUp(300).removeClass('open');
            }

            $('.accordion-section-title').click(function(e) {
                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');

                if($(e.target).is('.active')) {
                    close_accordion_section();
                }else {
                    close_accordion_section();

                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $('.accordion-ciclos ' + currentAttrValue).slideDown(300).addClass('open');
                }

                e.preventDefault();
            });
        },

        accordion_sedes_movil(){
            //ACORDEON ciclos
            function close_accordion_sedes_section() {
                $('.accordion-sedes .accordion-section-titleS').removeClass('active');
                $('.accordion-sedes .accordion-section-contentS').slideUp(300).removeClass('open');
            }

            $('.accordion-section-titleS').click(function(e) {
                // Grab current anchor value
                var currentAttrValue = $(this).attr('href');

                if($(e.target).is('.active')) {
                    close_accordion_sedes_section();
                }else {
                    close_accordion_sedes_section();

                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $('.accordion-sedes ' + currentAttrValue).slideDown(300).addClass('open');
                }

                e.preventDefault();
            });
        }
    },
    porque : {
        banner : function() {
            $(window).scroll(function () {
                parallaxBannerPorque();
                parallaxMetodologia();
            });

            function parallaxBannerPorque() {
                if ($(window).scrollTop() >= 0){
                    $('.content-banner-porque img').css( "margin-top", $(window).scrollTop()* 0.10);
                }
            }

            function parallaxMetodologia() {
                //var altura_del_header = $('header').outerHeight(true);
                if ($(window).scrollTop() >= 0){

                    var imagen_testimo = 'left '+($(window).scrollTop()*0.1-10)+'px';
                    $('.section-metodologia').css('background-position', imagen_testimo );
                }
            }
        },
        acreditaciones : function() {
            $('.bxslider-acreditaciones').bxSlider({
                infiniteLoop: false,
                //hideControlOnEnd: true,
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 3,
                moveSlides:1,
                // slideWidth: 360,
                // slideMargin: 50,
                touchEnabled: false,
                adaptiveHeight: true,
                pager:false
            });
        },

        slider_slider_imagen : function(){
            $(window).resize(function()  {
                var alto_imagen =  $('.content-porque .section-acreditaciones .container .bxslider-acreditaciones li figure img').height();
                $('.content-porque .section-acreditaciones .container .bxslider-acreditaciones li .contenido .g-table').css('height', alto_imagen+'px');
            });

            $(window).scroll(function()  {
                var alto_imagen =  $('.content-porque .section-acreditaciones .container .bxslider-acreditaciones li figure img').height();
                $('.content-porque .section-acreditaciones .container .bxslider-acreditaciones li .contenido .g-table').css('height', alto_imagen+'px');
            });

        },

        becas : function() {
            $('.owl-becas').owlCarousel({
                loop:false,
                margin:40,
                nav:true,
                dots: false,
                responsiveClass:true,
                 responsive: {
                   0: {
                     items: 1,
                     margin:10
                   },
                   600: {
                     items: 2
                   },
                   1000: {
                     items: 4
                   }
                 }
            });
        }
    },
    admision : {
        banner_admision : function(){
            $(window).resize(function() {
                var alto_imagen =  $('.content-admision .banner-admision.mostrarD .container-image img').height();
                $('.content-admision .banner-admision.mostrarD.container-image .contenido .g-table').css('height', alto_imagen+'px');
            });

            $( window ).load(function() {
                var alto_imagen =  $('.content-admision .banner-admision.mostrarD .container-image img').height();
                $('.content-admision .banner-admision.mostrarD .container-image .contenido .g-table').css('height', alto_imagen+'px');
            });

            $(window).resize(function() {
                var alto_imagen =  $('.content-admision .banner-admision.mostrarM .container-image img').height();
                $('.content-admision .banner-admision.mostrarM .container-image .contenido .g-table').css('height', alto_imagen+'px');
            });

            $( window ).load(function() {
                var alto_imagen =  $('.content-admision .banner-admision.mostrarM .container-image img').height();
                $('.content-admision .banner-admision.mostrarM .container-image .contenido .g-table').css('height', alto_imagen+'px');
            });
        },
        tab_admision : function(){
            $('#parentHorizontalTabAdmision').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            })
        }
    },
    cuentanos:{
        charla:function(){
            $('.owl-charla').owlCarousel({
                loop:true,
                nav:true,
                dots: false,
                smartSpeed:450,
                responsiveClass:true,
                 responsive: {
                   0: {
                     items: 1,
                     margin:5
                   },
                   600: {
                     items: 1
                   },
                   1000: {
                     items: 1
                   }
                 }
            });
        },
        testimonios:function(){
            $('.owl-testimonials').owlCarousel({
                loop:false,
                margin:40,
                nav:true,
                dots: false,
                responsiveClass:true,
                 responsive: {
                   0: {
                     items: 1,
                     margin:10
                   },
                   600: {
                     items: 1
                   },
                   1000: {
                     items: 2
                   }
                 }
            });
        }
    },
    noticias:{
        menu_tabs:function(){
            $('.mn-noticias ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');

                $('.mn-noticias ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
             })

        }
    },
    matriculaFixed : {
        scrollTop : function() {
        	$(window).scroll(function () {
                // console.log($(window).scrollTop())
              if ($(window).scrollTop() >= 580 && $(window).width() <= 1550) {
                $('.icono-home').addClass('fixed-bottom');
                console.log('>=100');
              }
              else {
                $('.icono-home').removeClass('fixed-bottom');
                console.log('<100');
              }
            });



        }
    }

}

$(document).ready(function(){
    if($('.banner-home').length){
        MyApp.home.banner();
        MyApp.home.slider();
    }
    if($('.container-prod').length){
        MyApp.home.productos();
    }
    if($('.slider-home-nosotros').length){
        MyApp.home.slider_nosotros();
    }
    if($('.slider-testimonios').length){
        MyApp.home.slider_testimonios();
    }
    if($('.section-porque').length){
        MyApp.home.count_home();
    }
    if($('.section-sedes-home').length){
        MyApp.home.acordeon_sedes();
    }
    if($('.content-sedes').length){
        MyApp.home.acordeon_sedes();
    }
    if($('.menu-interna').length){
        MyApp.carreras.menu();
        MyApp.carreras.interna();
    }
    if($('.section-inversion').length){
        MyApp.carreras.slider_sedes();
    }
    if($('.section-descripcion').length){
        MyApp.carreras.banner();
    }
     if($('.content-banner-carrera').length){
        //MyApp.carreras.interna_tab_descripcion();
    }
    MyApp.carreras.interna_tab_descripcion();

    if($('.carrera-interna').length){
        MyApp.carreras.accordion_ciclo_movil();
    }
     if($('.section-inversion').length){
        MyApp.carreras.accordion_sedes_movil();
    }
    if($('.section-acreditaciones').length){
        MyApp.porque.acreditaciones();
        MyApp.porque.slider_slider_imagen();
    }
    if($('.section-becas').length){
        MyApp.porque.becas();
    }
    if($('.content-banner-porque').length){
        MyApp.porque.banner();
    }
    if($('.content-admision').length){
        MyApp.admision.banner_admision();
        MyApp.admision.tab_admision();
    }
    if($('.section-descripcion').length){
        MyApp.cuentanos.charla();
    }
    if($('.section-lista-testimonios').length){
        MyApp.cuentanos.testimonios();
    }
     if($('.section-lista-noticias').length){
        MyApp.noticias.menu_tabs();
    }

    MyApp.matriculaFixed.scrollTop();


});

//DATAPICKER
$( function() {
    $( ".datepicker" ).datepicker();
});

$(document).ready(function(){
    var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);

    //Menu Desplegable
    $('.mn-movil').click(function(e) {
        $('header nav').css('display', 'block');
    });

    //Productos(carrera, diplomados, cursos cortos)
   var owl = $('.owl-carousel');
   owl.owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    responsiveClass:true,
     responsive: {
       0: {
         items: 1
       },
       600: {
         items: 2
       },
       1030: {
         items: 3
       }
     }
   })


    "use strict";
    //$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //$('.menu > ul > li > ul:not(:has(ul))').parent().addClass('eli');

    // $(".menu > ul > li").click(function(e) {
    //     $(this).addClass('menu-dropdown-icon').siblings().removeClass('menu-dropdown-icon');

    //     if ($(window).width() > 1024) {
    //         $(".menu > ul > li").children("ul").hide();
    //         if ($(this).children("ul").hasClass('desplegado')) {
    //             $(this).children("ul").removeClass('desplegado');
    //         } else {
    //             $(".menu > ul > li").children("ul").removeClass('desplegado');
    //             $(this).children("ul").addClass('desplegado');
    //             $(this).children("ul").show();
    //         }
    //         e.preventDefault();
    //     }
    // });

    $('.menu > ul > li.submenu').hover(function(e) {
        $(this).addClass('menu-dropdown-icon').siblings().removeClass('menu-dropdown-icon');

        if ($(window).width() > 1200) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });

    // $('.menu > ul > li.submenu').click(function(e) {
    //     console.log($(this));
    //     if ($(window).width() <= 1200) {
    //         $('.menu > ul > li').removeClass('bg-opt');
    //         $(this).addClass('bg-opt');
    //     }
    // });

    $('.menu > ul > li.submenu').mouseover(function(e) {
        $(this).addClass('menu-dropdown-icon');
    });


    $('.menu > ul > li.submenu').mouseout(function(e) {
    //console.log('hover li');
        $(this).removeClass('menu-dropdown-icon');
    });

    $(".menu > ul > li").click(function(e) {
        if ($(window).width() <= 1200) {
        $(".menu > ul > li").children("ul").hide();
            if ($(this).children("ul").hasClass('desplegado')) {
                $(this).children("ul").removeClass('desplegado');
            } else {
                $(".menu > ul > li").children("ul").removeClass('desplegado');
                $(this).children("ul").addClass('desplegado');
                $(this).children("ul").show();
            }
        e.preventDefault();
        }
        e.stopPropagation; // stop the click from bubbling
        $(this).closest('li').find('.selected').removeClass('selected');
        $(this).parent().addClass('selected');
    });

    // $(".menu > ul > li").click(function(e) {
    //     if ($(window).width() <= 1200) {
    //     if ($(this).hasClass('bg-opt')) {
    //         $(this).removeClass('bg-opt');
    //     } else {
    //         $(this).addClass('bg-opt');
    //     }
    //     }
    // });

    $(".mn-movil").click(function(e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      $(this).css('display', 'none');
      $('.mn-movil-cerrar').css('display', 'block');
      e.preventDefault();
    });

    $(".mn-movil-cerrar").click(function(e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      $(this).css('display', 'none');
      $('.mn-movil').css('display', 'block');
      $('header nav').css('display', 'none');
      e.preventDefault();
    });



    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                overlay: {
                  locked: false
                },
                media : {},
                buttons : {}
            }
     });
        
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(238,238,238,0.85)'
                }
            }
        }
    });



    $('.fancybox').fancybox();
    //  Popup agregar productos  //#seleccionar_cliente
	$(".btn-contacto").fancybox({
		wrapCSS    : 'fancybox-contatenos',
	// }).trigger('click')
	});


    $(function() {
        $(".fancyboxIframe").fancybox({
            maxWidth    : 900,
            maxHeight   : 600,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
            transitionIn  : 'elastic',
            transitionOut : 'elastic',
        iframe: {
            scrolling : 'true',
            preload   : true
        },
        // helpers : {
        //     overlay: {
        //       locked: false
        //     }
        // }
        });

    });






});

$(document).ready(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    })

    $("div.holder").jPages({
        containerID: "itemContainer",
        perPage: 8,
        keyBrowse: true,
        minHeight: false,
        next:false,
        previous:false
    });

});

$( function() {
    $( ".select-programas" ).selectmenu();
    $( ".select" ).selectmenu();
    $('select.styled').customSelect();
}
);

$("#form-carrera").validate({
	rules: {
		nombres: {
			required: true,
		},
		apellidos: {
			required: true,
		},
		email: {
			required: true,
			email: true
		}
	}
});



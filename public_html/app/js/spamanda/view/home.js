/*jslint browser:true*/
/*global App, Saga, $, jQuery*/

(function (asset) {
    "use strict";
    var div,
        debug = Saga.Debug,
        d = Saga.Dom,
        e = d.getById,
        u = Saga.Util,
        initSequence = function () {
            debug.log(asset.name + ".initSequence()");
            var options = {
                    thumbs: false,
                    nextButton: false,
                    prevButton: false,
                    pagination: true,
                    animateStartingFrameIn: true,
                    autoPlay: true,
                    autoPlayDelay: 3000,
                    preloader: true,
                    preloadTheseFrames: [1],
                    preloadTheseImages: [
                        "app/images/smalldot1.png"
                    ]
                },
                mySequence = $("#sequence").sequence(options).data("sequence");

            debug.log(asset.name + ".initSequence()", mySequence, $("#sequence"), $("#sequence").sequence(options).data("sequence"));
        },
        initThemeStuff = function () {
            debug.log(asset.name + ".initThemeStuff()");

            $('html, body').ready(function () {
                jQuery('#mycollapsible').collapse("hide");
            });

            $('html, body').ready(function () {
                jQuery('#bxslider1').bxSlider();
            });

            /*
            function scrollToTop() {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            }
            */

            $('.collapse').live('show', function () {
                $(this).parent().find('.accordion-heading').addClass('open'); //add active state to button on open
            });

            $('.collapse').live('hide', function () {
                $(this).parent().find('.accordion-heading').removeClass('open'); //remove active state to button on close
            });
        },
        init = function () {
            debug.log(asset.name + ".init()");

            initSequence();

            initThemeStuff();
        },
        deinit = function () {
            debug.log(asset.name + ".deinit()");


        };

    Saga.Util.extend(asset.View, App.SimpleView(asset));

    Saga.AssetManager.on(asset.name + ":inited", init);
    Saga.AssetManager.on(asset.name + ":hidden", deinit);

}(App.Assets.Home));
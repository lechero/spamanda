/*jslint browser:true*/
/*global App, Saga*/

App.Manager = (function () {
    "use strict";
    var pub,
        debug = Saga.Debug,
        keyboard = Saga.Keyboard,
        model,
        d = Saga.Dom,
        u = Saga.Util,
        e = d.elem,
        sequence = false,
        load = Saga.StackLoader(),

        routeChanged = function (route) {
            debug.log("App.Manager.routeChanged() -> ", route);
        },
        menuShown = function () {
            //Saga.Route.showPage('home');

            Saga.Route.on("vars:changed", routeChanged);
            Saga.Route.init(App.Routes);
        },
        startSite = function () {
            debug.log("App.Manager.startSite()");

            Saga.AssetManager.once("Menu:shown", menuShown);
            Saga.AssetManager.show(App.Assets.Menu);
        },
        itemLoaded = function (item, l) {
            debug.log("itemLoaded", (Math.floor((App.Preload.length - item.length) * 100 / App.Preload.length)));
        },
        templatesLoaded = function () {
            load.on("loaded", itemLoaded);
            load.load(App.Preload, startSite);
        },
        init = function () {
            debug.levels(["log", "info", "error", "warn", "trace"]);
            debug.log("App.Manager.init()");

            Saga.AssetManager.init(App.Assets);
            Saga.AssetManager.initTemplates(App.Templates, templatesLoaded);
        },
        initSequence = function () {
            //debug.log(asset.name + ".initSequence()");
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
                mySequence;
            sequence = $("#sequence").sequence(options).data("sequence");
            //debug.log(asset.name + ".initSequence()", mySequence, $("#sequence"), $("#sequence").sequence(options).data("sequence"));
        },
        toggleSlider = function (page) {
            if (App.Slider.hasOwnProperty(page)) {
                e('sequenceSliderContainer').innerHTML = "";
                e('sequenceSliderPagination').innerHTML = "";

                var indicator,
                    slide,
                    slides = App.Slider[page];

                u.each(slides, function (data, id) {
                    indicator = document.createElement('div');
                    d.addClass(indicator, "paginationslider");
                    slide = document.createElement('li');
                    if (id === 0) {
                        d.addClass(slide, "animate-in");
                        d.addClass(indicator, "current");
                    }
                    slide.innerHTML = App.Templates.Slide({
                        slide: data
                    });
                    e('sequenceSliderContainer').appendChild(slide);
                    e('sequenceSliderPagination').appendChild(indicator);
                });

                e('sequenceSlider').style.display = "block";

                initSequence();
            } else {
                e('sequenceSlider').style.display = "none";
                if (sequence) {
                    sequence.destroy();
                    sequence = false;
                }
            }
        };

    pub = {
        toggleSlider: function (page) {
            toggleSlider(page);
        },
        routeChanged: function (hv) {
            routeChanged(hv);
        },
        init: function () {
            init();
        }
    };

    u.extend(pub, Saga.Event());

    return pub;
}());
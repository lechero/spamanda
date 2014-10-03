/*jslint browser:true*/
/*global App, Saga, qq*/

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
            };
            var mySequence = $("#sequence").sequence(options).data("sequence");

            debug.log(asset.name + ".initSequence()", mySequence);
        },
        init = function () {
            debug.log(asset.name + ".init()");

            initSequence();

        },
        deinit = function () {
            debug.log(asset.name + ".deinit()");


        };

    Saga.Util.extend(asset.View, App.SimpleView(asset));

    Saga.AssetManager.on(asset.name + ":inited", init);
    Saga.AssetManager.on(asset.name + ":hidden", deinit);

}(App.Assets.Home));
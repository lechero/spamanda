/*jslint browser:true*/
/*global App, Saga, $, jQuery*/

(function (asset) {
    "use strict";
    var div,
        debug = Saga.Debug,
        d = Saga.Dom,
        e = d.getById,
        u = Saga.Util,
        init = function () {
            debug.log(asset.name + ".init()");

            App.Manager.toggleSlider(asset.name);

        },
        deinit = function () {
            debug.log(asset.name + ".deinit()");
        };

    Saga.Util.extend(asset.View, App.SimpleView(asset));

    Saga.AssetManager.on(asset.name + ":inited", init);
    Saga.AssetManager.on(asset.name + ":hidden", deinit);

}(App.Assets.Services));

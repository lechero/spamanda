/*jslint browser:true*/
/*global Saga, App, TweenLite*/

(function () {
    "use strict";
    var root = this,
        setup = {
            Holders: { // you could define holders here, not mandatory
                Menu: 'holderMenu',
                Content: 'holderContent'
            },
            Assets: {
                Menu: {
                    files: {
                        html: 'app/html/menu.html',
                        js: 'app/js/spamanda/view/menu.js'
                    },
                    holder: 'holderMenu'
                },
                Home: {
                    files: {
                        html: 'app/html/home.html',
                        js: 'app/js/spamanda/view/home.js'
                    },
                    holder: 'holderContent'
                },
                About: {
                    files: {
                        html: 'app/html/about.html',
                        js: 'app/js/spamanda/view/about.js'
                    },
                    holder: 'holderContent'
                },
                Contact: {
                    files: {
                        html: 'app/html/contact.html',
                        js: 'app/js/spamanda/view/contact.js'
                    },
                    holder: 'holderContent'
                }
            },
            Templates: {},
            Routes: {
                'default': function () {
                    Saga.Route.showPage("home");
                },
                'home': function () {
                    Saga.AssetManager.show(App.Assets.Home);
                },
                'about': function () {
                    Saga.AssetManager.show(App.Assets.About);
                },
                'contact': function () {
                    Saga.AssetManager.show(App.Assets.Contact);
                }
            },
            Preload: [
                'app/js/libs/tweenlite/TweenLite.min.js',
                'app/js/libs/tweenlite/CSSPlugin.min.js',
                'app/js/theme/jquery.js',
                'app/js/theme/jquery-migrate.js',
                'app/js/theme/jquery-migrate.js',
                'app/js/theme/jquery.sequence.js',
                'app/js/theme/jquery.bxslider.js',
                'app/js/theme/bootstrap.js',
                'app/js/spamanda/simple-animation.js',
                'app/js/spamanda/simple-view.js'
            ]
        };

    root.App = setup;

    Saga.Dom.addLoadEvent(function () {
        App.Manager.init();
    });
}.call(this));
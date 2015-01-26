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
                Massages: {
                    files: {
                        html: 'app/html/massages.html',
                        js: 'app/js/spamanda/view/massages.js'
                    },
                    holder: 'holderContent'
                },
                Beautycare: {
                  files: {
                    html: 'app/html/beautycare.html',
                    js: 'app/js/spamanda/view/beautycare.js'
                  },
                  holder: 'holderContent'
                },
                SpaPackages: {
                  files: {
                    html: 'app/html/packages.html',
                    js: 'app/js/spamanda/view/packages.js'
                  },
                  holder: 'holderContent'
                },
                Portfolio: {
                    files: {
                        html: 'app/html/portfolio.html',
                        js: 'app/js/spamanda/view/portfolio.js'
                    },
                    holder: 'holderContent'
                },
                // News: {
                //     files: {
                //         html: 'app/html/news.html',
                //         js: 'app/js/spamanda/view/news.js'
                //     },
                //     holder: 'holderContent'
                // },
                Contact: {
                    files: {
                        html: 'app/html/contact.html',
                        js: 'app/js/spamanda/view/contact.js'
                    },
                    holder: 'holderContent'
                }
            },
            Slider: {
                Home: [
                    {
                        'title': "Thai Spa and Wellness",
                        'subtitle': "Well-being and relaxation",
                        'content': "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.<span>Lorem ipsum dolor sit amet</span> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
                        'url': "#services",
                        'btnText': "Hurry Up",
                        'image': "app/images/model1.png"
                    },
                    {
                        'title': "Thai Spa and Wellness",
                        'subtitle': "Well-being and relaxation",
                        'content': "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.<span>Lorem ipsum dolor sit amet</span> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
                        'url': "#services",
                        'btnText': "Hurry Up",
                        'image': "app/images/model1.png"
                    },
                    {
                        'title': "Thai Spa and Wellness",
                        'subtitle': "Well-being and relaxation",
                        'content': "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.<span>Lorem ipsum dolor sit amet</span> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
                        'url': "#services",
                        'btnText': "Hurry Up",
                        'image': "app/images/model1.png"
                    }
                ]
            },
            Templates: {
                Slide: 'app/html/slide.template.html'
            },
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
                'massages': function () {
                    Saga.AssetManager.show(App.Assets.Massages);
                },
                'beautycare': function () {
                  Saga.AssetManager.show(App.Assets.Beautycare);
                },
                'packages': function () {
                  Saga.AssetManager.show(App.Assets.SpaPackages);
                },
                'portfolio': function () {
                    Saga.AssetManager.show(App.Assets.Portfolio);
                },
                'news': function () {
                    Saga.AssetManager.show(App.Assets.News);
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
                'app/js/theme/quicksand1.js',
                'app/js/theme/quicksand.js',
                'app/js/theme/prettyphoto.js',
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

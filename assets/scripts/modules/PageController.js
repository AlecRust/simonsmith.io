
define(function(require) {
    var $           = require('jquery');
    var mediator    = require('mediator');
    var Spinner     = require('modules/Spinner');
    var Scroller    = require('modules/Scroller');
    var PageUpdater = require('modules/PageUpdater');

    function PageController(elements) {
        $.each(elements, function(key, value) {
            this[key] = $(value);
        }.bind(this));

        new Spinner(this.container, {
            show: 'content:get:before',
            hide: 'content:get:always'
        });

        new Scroller({
            scroll: 'content:get:done'
        });

        new PageUpdater(this.nav, this.injectTarget, {
            updatePage: 'content:get:done'
        });

        this.setInitialPage();
        this.attachEvents();
    }

    PageController.prototype = {

        setInitialPage: function() {
            $.getJSON(location.href, { ajax: true }, function(json) {
                history.replaceState(json, null, location.href);
            });
        },

        attachEvents: function() {
            this.container.on('click', this.links.selector, this.getPageContent.bind(this));

            window.addEventListener('popstate', function(event) {
                var json = event.state;

                if (!json) {
                    return;
                }
                
                mediator.publish('content:get:done', {
                    response: json,
                    type: 'popstate'
                });
            }.bind(this));
        },

        getPageContent: function(event) {
            var $elem = $(event.currentTarget);
            var req = $.ajax({
                data: { ajax: true },
                dataType: 'json',
                context: this,
                timeout: 6000,
                url: $elem.attr('href'),
                beforeSend: function() {
                    mediator.publish('content:get:before');
                }
            });

            req.always(function() {
                mediator.publish('content:get:always');
            });
            req.fail(function() {
                mediator.publish('content:get:fail', { element: $elem });
            });
            req.done(function(json) {
                mediator.publish('content:get:done', {
                    response: json,
                    type: 'ajax',
                    element: $elem
                });
            });

            event && event.preventDefault();
        }

    };

    return PageController;
});
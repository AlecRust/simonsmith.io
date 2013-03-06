
define(function(require) {
    var $        = require('jquery');
    var mediator = require('mediator');

    function Spinner(container, events) {
        this.container = $(container);

        this.elem = $('<div></div>', {
            'class': 'loading',
            'aria-hidden': true
        }).hide();
        this.elem.appendTo(this.container);

        mediator.subscribe(events.show, this.show, null, this);
        mediator.subscribe(events.hide, this.hide, null, this);
    }

    Spinner.prototype = {

        show: function() {
            this.elem.attr('aria-hidden', false).show();
            this.container.attr('aria-busy', true);
        },

        hide: function() {
            this.elem.attr('aria-hidden', true).hide();
            this.container.attr('aria-busy', false);
        }

    };

    return Spinner;
});
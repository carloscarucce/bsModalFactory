(function($){

    /**
     * Build a bootstrap modal
     */
    var bsModalFactory = {
        /**
         * Default options
         */
        defaultOptions: {
            //general
            appendTo: window.body,
            fading: true,
            id: null,
            width: '600px',
            showsOnBuild: false,

            //header options
            showHeader: true,
            closeButton: true,
            title: '',

            //content
            contents: ''
        },

        /**
         * Build a modal instance
         *
         * @param options
         * @returns {modal}
         */
        build: function(options) {
            return new modal(options);
        }
    };

    var modal = function(options) {

        options = $.extend(bsModalFactory.defaultOptions, options);
        var _modal = this;

        /*
         * Build DOM elements
         */
        var $root = $('<div class="modal" tabindex="-1" role="dialog"></div>');
        var $dialog = $('<div class="modal-dialog" role="document"></div>').appendTo($root);
        var $content = $('<div class="modal-content"></div>').appendTo($dialog);

        //# Header
        var $header = $('<div class="modal-header"></div>');
        var $title = $('<h4 class="modal-title"></h4>').appendTo($header);

        //# Contents
        var $body = $('<div class="modal-body"></div>').appendTo($content);

        /*
         * Apply properties
         */
        function build() {
            _modal.setWidth(options.width);

            if (options.id !== null) {
                $root.attr('id', options.id);
            }

            if (options.fading) {
                $root.addClass('fade');
            }

            if (options.showHeader) {
                $body.before($header);

                if (options.closeButton) {
                    $header.prepend(
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                        '</button>'
                    );
                }

                _modal.setTitle(options.title);
            }

            _modal.setBodyContents(options.contents);

            $root.appendTo(options.appendTo);

            if (options.showsOnBuild) {
                _modal.show();
            }
        }

        /**
         * Set bootstrap options to the modal.
         * Visit http://getbootstrap.com/javascript/#modals-options
         * for more details.
         *
         * @param bsOptions
         */
        this.applyBSOptions = function (bsOptions) {
            bsOptions = bsOptions || {};
            $root.modal(bsOptions);
        };

        /**
         *
         * @returns {*}
         */
        this.getDOM = function () {
            return $root[0];
        };

        /**
         * Hide modal
         */
        this.hide = function () {
            $root.modal('hide');
        };

        /**
         * Listens to a bootstrap modal event.
         * See http://getbootstrap.com/javascript/#modals-events
         * for more details
         *
         * @param eventName
         * @param callback
         */
        this.on = function (eventName, callback) {
            $root.on(eventName, callback);
        };

        /**
         * Set modal title text
         *
         * @param title
         */
        this.setTitle = function (title) {
            $title.text(title);
        };

        /**
         *
         * @param width
         */
        this.setWidth = function (width) {
            $dialog.css({
                "width": width
            });
        };

        /**
         *
         * @param contents
         */
        this.setBodyContents = function (contents) {
            $body.html(contents);
        };

        /**
         * Show modal
         */
        this.show = function () {
            $root.modal('show');
        };

        build();

    };

    /**
     * Make factory accessible
     */
    window.bsModalFactory = bsModalFactory;

})(jQuery);

"use strict";

(function($) {

    // Add js class to html
    $('html').addClass('js');

    // The plugin
    $.fn.coverride = function( options ) {

        // @bool iOS
        var iOS = /iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent);

        // Settings
        var settings = $.extend( {}, $.fn.coverride.defaults, options );

        // Do the things
        return this.each(function() {

            var $video = $(this);

            // Fade in video
            if( $video[0].currentTime > 0 ) {
                // It's already started playing
                $video.fadeTo( settings.fadeIn, 1, function(){
                    $video.addClass('is-playing');
                });
            } else {
                // It hasn't started yet, wait for the playing event
                $video.on('playing', function(){
                    $video.fadeTo( settings.fadeIn, 1, function(){
                        $video.addClass('is-playing');
                    });
                });
            }


            // if( iOS ) {

            // }


            // Mimic background-size: cover with video element
            $.fn.coverride.fitVideo( $video );
            $(window).resize(function(){
                $.fn.coverride.fitVideo( $video );
            });


        });


    };


    // Default settings
    $.fn.coverride.defaults = {
        fadeIn: 300
    };


    // Fit video
    $.fn.coverride.fitVideo = function( $video ) {

        var $container = $video.parent();

        // Start by setting some CSS
        $container.css({
            'position': 'relative',
            'overflow': 'hidden'
        });
        $video.css({
            'min-width': 'auto',
            'min-height': 'auto',
            'width': '100%',
            'height': 'auto',
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'transform': 'translate(-50%,-50%)'
        });

        // In general we're done, unless the container is taller than the video
        var container_height = $container.height(),
            video_height = $video.height();

        if( container_height > video_height ) {
            // Container height is > than video height
            $video.css({
                'height': '100%',
                'width': 'auto'
            });
        }

    };


    // Auto run based on data attributes
    $(document).ready(function(){
        $('[data-coverride]').each(function(){
            var options = {};
            if($(this).data('coverride-fade-in')) {
                options.fadeIn = $(this).data('coverride-fade-in');
            }
            $(this).coverride( options );
        });
    });


}(jQuery));
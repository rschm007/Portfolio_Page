$(document).ready(function () {
    
    // defining typewrite function
    (function ( $ ) {
        $.fn.typewrite = function ( options ) {
            var settings = {
                'selector': this,
                'extra_char': '',
                'delay':    100,
                'trim':     false,
                'callback': true
            };
            if (options) $.extend(settings, options);
    
            /* This extra closure makes it so each element
             * matched by the selector runs sequentially, instead
             * of all at the same time. */
            function type_next_element(index) {
                var current_element = $(settings.selector[index]);
                var final_text = current_element.text();
                if (settings.trim) final_text = $.trim(final_text);
                current_element.html("").show();
    
                function type_next_character(element, i) {
                    element.html( final_text.substr(0, i)+settings.extra_char );
                    if (final_text.length >= i) {
                        setTimeout(function() {
                            type_next_character(element, i+1);
                        }, settings.delay);
                    }
                    else {
                        if (++index < settings.selector.length) {
                            type_next_element(index);
                        }
                        else if (settings.callback) settings.callback();
                    }
                }
                type_next_character(current_element, 0);
            }
            type_next_element(0);
            return this;
        };
    })(jQuery);
    
    // bold text that results from typewriter function
    $("Robert Schmahl").css("font-weight", "bold");
    
    // calling typewriter callback
    $(".typewriter").typewrite({
        // on callback, insert button under text
        'callback': function(){
            $()
        }
    })

    // when user hovers over nav links, they should become bold, then return to normal weight after pointer leaves
    $("h3").mouseover(function() {
        $(this).addClass("font-medium").removeClass("font-normal");
    });
    $("h3").mouseout(function() {
        $(this).addClass("font-normal").removeClass("font-medium");
    });

    // portfolio menu content
    // content 1. When user mouseovers image, convert image to grayscale and have a pop-up module that displays "graphic design" text
});
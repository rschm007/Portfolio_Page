$(document).ready(function () {
  // defining var to hold the loader div
  let $loader = $(".loader");

  // removing the loader from the visible DOM
  $loader.removeClass("loader--active");

  document.querySelector(".btn").addEventListener("click", function () {
    $loader.addClass("loader--active");

    window.setTimeout(function () {
      $loader.classList.remove("loader--active");
    }, 5000);
  });

  // defining typewrite function
  (function ($) {
    $.fn.typewrite = function (options) {
      var settings = {
        selector: this,
        extra_char: "",
        delay: 70,
        trim: false,
        callback: true,
      };
      if (options) $.extend(settings, options);

      /* This extra closure makes it so each element
       * matched by the selector runs sequentially, instead
       * of all at the same time. */
      function type_next_element(index) {
        var current_element = $(settings.selector[index]);
        var final_text = current_element.text();
        if (settings.trim) final_text = $.trim(final_text);
        // reveal letters as they are typed
        current_element.html("").addClass("visible").removeClass("invisible");

        function type_next_character(element, i) {
          element.html(final_text.substr(0, i) + settings.extra_char);
          if (final_text.length >= i) {
            setTimeout(function () {
              type_next_character(element, i + 1);
            }, settings.delay);
          } else {
            if (++index < settings.selector.length) {
              type_next_element(index);
            } else if (settings.callback) settings.callback();
          }
        }
        type_next_character(current_element, 0);
      }
      type_next_element(0);
      return this;
    };
    // bold certain text that appears
    $("div:contains('Robert')").css("font-weight", "bold");
  })(jQuery);

  // calling typewriter callback
  $(".typewriter").typewrite({
    // on callback, insert button under text
    callback: function () {
      $(".introduction").append(
        `<i class="fas fa-chevron-circle-down fa-lg animate-bounce m-10" alt="A chevron arrow icon"></i>`
      );
    },
  });
});

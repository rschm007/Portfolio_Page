// defining a nav constant to append after typewriter function
const nav = `<nav class='flex flex-wrap content-start mt-20 mx-auto'>
 <button id="home" class="btn_nav text-xl mx-5 px-4 py-3 rounded-lg active" type="button">Home</button>
 <button id="projects" class="btn_nav text-xl mx-5 px-4 py-3 rounded-lg" type="button">Projects</button>
 <button id="skills" class="btn_nav text-xl mx-5 px-4 py-3 rounded-lg" type="button">Skills</button>
 <button id="about" class="btn_nav text-xl mx-5 px-4 py-3 rounded-lg" type="button">About</button>
 <button id="contact" class="btn_nav text-xl mx-5 px-4 py-3 rounded-lg" type="button">Contact</button>
</nav>
`;

$(document).ready(function () {
  $(".loader").removeClass("loader--active").addClass("invisible");
  // defining typewrite function
  (function ($) {
    $.fn.typewrite = function (options) {
      const settings = {
        selector: this,
        extra_char: "",
        delay: 50,
        trim: false,
        callback: true,
      };
      if (options) $.extend(settings, options);

      /* This extra closure makes it so each element
       * matched by the selector runs sequentially, instead
       * of all at the same time. */
      function type_next_element(index) {
        let current_element = $(settings.selector[index]);
        let final_text = current_element.text();
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
  })(jQuery);

  // calling typewriter callback
  $(".typewriter").typewrite({
    // on callback, insert button under text
    callback: function () {
      $(".introduction").append(nav);
    },
  });

  // pageRender function that holds animation properties
  function pageRender(linkVal) {
    // render page content
    // setTimeout(function () {
      location.href = `${linkVal}`;
    // }, 1500);
  }

  // nav button logic
  $(document).on("click", ".btn_nav", function () {
    let linkVal = $(this).attr("id");
    // render page
    pageRender(linkVal);
  });
});

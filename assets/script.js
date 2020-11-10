$(document).ready(function () {
  // defining template literals for nav buttons
  const nav = `<nav class="row-span-1">
  <button class="btn_nav fadeIn projectsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Projects</button>
  <button class="btn_nav fadeIn skillsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Skills</button>
  <button class="btn_nav fadeIn homeLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Home</button>
  <button class="btn_nav fadeIn aboutLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">About</button>
  <button class="btn_nav fadeIn contactLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Contact</button>
  </nav>
  `;
  
  // defining typewrite function
  (function ($) {
    $.fn.typewrite = function (options) {
      var settings = {
        selector: this,
        extra_char: "",
        delay: 55,
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
  })(jQuery);

  // calling typewriter callback
  $(".typewriter").typewrite({
    // on callback, insert button under text
    callback: function () {
      $(".introduction").append(nav);
    },
  });

  // add animation function
  $(document).on("click", ".btn_nav", function () {
    // grab the value of the button
    let btnTxt = $(this).text();

    // animate content
    $(".page_style").addClass("animate_content");
    $(".page_description").fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
      $(".page__style").removeClass("animate_content");
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function () {
      $(".page__style").removeClass("fadeIn");
    }, 1500);
    // properties for projects page
    if (btnTxt === "Projects") {
      setTimeout(function () {
        $("main").addClass("from-green-900 via-green-600 to-teal-600").removeClass(" from-indigo-900 via-blue-800 to-blue-600");
        $(".introduction").empty().append(`
        <div class="row-span-3"></div>
        <h1 class="row-span-1 font-medium text-4xl">
          Projects
        </h1>
        ${nav}
        `);
      }, 1600);
    } 
  });
});

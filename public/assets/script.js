// defining a nav constant to append after typewriter function
const nav = `<nav class='flex flex-wrap content-start mt-20 mx-auto'>
 <button class="btn_nav fadeIn homeLink text-xl mx-5 px-4 py-3 rounded-lg active" type="button">Home</button>
 <button class="btn_nav fadeIn projectsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Projects</button>
 <button class="btn_nav fadeIn skillsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Skills</button>
 <button class="btn_nav fadeIn aboutLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">About</button>
 <button class="btn_nav fadeIn contactLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Contact</button>
</nav>
`;
$(document).ready(function () {
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


  $('.btn_nav').click(function() {
    // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  
  });
  
  // nav button logic
  // on click show page after 1500ms
  $(document).on('click', '.homeLink', function() {
    console.log('home')
    setTimeout(function() {
      location.href = "/index";
    }, 1500);
  });
  
  $(document).on('click', '.projectsLink', function() {
    console.log('projects')
    setTimeout(function() {
      location.href = "/projects";
    }, 1500);
  });
  
  $(document).on('click', '.skillsLink', function() {
    console.log('skills')
    setTimeout(function() {
      location.href = "/skills";
    }, 1500);
  });
  
  $(document).on('click', '.aboutLink', function() {
    console.log('about')
    setTimeout(function() {
      location.href = "/about";
    }, 1500);
  });
  
  $(document).on('click', '.contactLink', function() {
    console.log('contact')
    setTimeout(function() {
      location.href = "/contact";
    }, 1500);
  });

});


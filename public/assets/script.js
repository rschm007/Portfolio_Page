// // barba import
// import barba from '@barba/core';

// // GSAP page transition
// function pageTransition() {
//   let tl = gsap.timeline();
//   tl.to('main', { duration: .5, scaleY: })
// }

// // define delay function for async promise interval 
// function delay(interval) {
//   interval = interval || 2000;  
//   return new Promise(done => {
//     setTimeout(() => {
//       done();
//     }, interval)
//   });
// }

// barba.init({
//   sync: true,
//   transitions: [{
//     async leave(data) {
//       const done = this.async();
//       pageTransition();
//       await delay(1500);
//       done();
//     }
//   }]
// });

// defining a nav constant to append after typewriter function
const nav = `<nav class='flex flex-wrap content-start mt-20 mx-auto'>
<a href='./index.html' class="btn_nav fadeIn homeLink text-xl mx-5 px-4 py-3 rounded-lg active" type="button">Home</a>
<a href='./projects.html' class="btn_nav fadeIn projectsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Projects</a>
<a href='./skills.html' class="btn_nav fadeIn skillsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Skills</a>
<a href='./about.html' class="btn_nav fadeIn aboutLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">About</a>
<a href='./contact.html' class="btn_nav fadeIn contactLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Contact</a>
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
});

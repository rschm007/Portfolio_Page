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
  // ====================================================
  // TYPEWRITER FUNCTION FOR HOMEPAGE
  // ====================================================
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
  // ====================================================
  // GSAP AND BARBA PAGE TRANSITION ANIMATION PROPERTIES
  // ====================================================
  // 
  // define gsap pageTransition animation
  function pageTransition() {
    let timeline = gsap.timeline();
    // this is where the 5 list items come up on the page during the animation
    timeline.to("ul.transition li", {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.2
    });
    timeline.to("ul.transition li", {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: "bottom left",
      stagger: 0.1,
      delay: 0.2
    });
  }

  // define gsap contentAnimation
  // this animation will cause DOM objects to fade in from an opacity of 0
  function contentAnimation() {
    let timeline = gsap.timeline();
    timeline.from('.wrapper', { duration: 1, opacity: 0, delay: 0.1 })
  }

  // set delay function
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  // barba init
  barba.init({
    sync: true,
    transitions: [{
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },
      async enter(data) {
        contentAnimation();
      },
      async once(data) {
        contentAnimation();
      }
    }]
  })
});

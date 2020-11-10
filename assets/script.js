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
        $("main")
          .addClass("from-green-900 via-green-600 to-teal-600")
          .removeClass(" from-indigo-900 via-blue-800 to-blue-600");
        $("header")
          .addClass("grid-rows-2 grid-cols-9")
          .removeClass("introduction grid-rows-6 grid-flow-col")
          .empty().append(`
        <div class="row-span-1 col-span-9"></div>
        ${nav}
        <div class="col-span-1"></div>
        <div class="grid grid-cols-3 col-span-7 justify-center text-blue-900">
          <div class="project1 col-span-1 bg-gray-100 w-auto h-auto mx-5 rounded-lg">
            <h2 class="text-2xl font-bold mt-4 p-2">Babel</h2>
            <h3 class="font-normal p-2 mb-4">Generates recipes based off of desired ingredients</h3>
            <a href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"><img src="../assets/imgs/webdevo_gif1.gif" alt="An animated gif of the Recipe Generator web app"></img></a>
            <a href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"><i class="fas fa-link fa-2x m-2 p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120"></i></a>
            <a href="https://github.com/https-github-com-steversonTong/Recipe-Generatorf"><i class="fab fa-github-square fa-3x m-2 p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120"></i></a>
          </div>
          <div class="project2 col-span-1 bg-gray-100 w-auto h-auto mx-5 rounded-lg">
            <h2 class="text-2xl font-bold mt-4 p-2">Day Planner</h2>
            <h3 class="font-normal p-2 mb-4">Plan your day and track the current time</h3>
            <a href="https://rschm007.github.io/Day-Planner/"><img src="../assets/imgs/webdevo_gif2.gif" alt="An animated gif of the Day Planner web app"></img></a>
            <a href="https://rschm007.github.io/Day-Planner/"><i class="fas fa-link fa-2x m-2 p-2 transition duration-500 ease-in-out hover:-translate-y-1 transform hover:scale-120"></i></a>
            <a href="https://github.com/rschm007/Day-Planner"><i class="fab fa-github-square fa-3x m-2 p-2 transition duration-500 ease-in-out hover:-translate-y-1 transform hover:scale-120"></i></a>
          </div>
          <div class="project3 col-span-1 bg-gray-100 w-auto h-auto mx-5 rounded-lg">
            <h2 class="text-2xl font-bold mt-4 p-2">Weather Dashboard</h2>
            <h3 class="font-normal p-2 mb-4">Use the OpenWeatherAPI to search forecasts</h3>
            <a href="https://rschm007.github.io/Weather-Dashboard/"><img src="../assets/imgs/webdevo_gif3.gif" alt="An animated gif of the Weather Dashboard web app"></img></a>
            <a href="https://rschm007.github.io/Weather-Dashboard/"><i class="fas fa-link fa-2x m-2 p-2 transition duration-500 ease-in-out hover:-translate-y-1 transform hover:scale-120"></i></a>
            <a href="https://github.com/rschm007/Weather-Dashboard"><i class="fab fa-github-square fa-3x m-2 p-2 transition duration-500 ease-in-out hover:-translate-y-1 transform hover:scale-120"></i></a>
          </div>
        </div>
        <div class="col-span-1"></div>
        `);
        $("nav").addClass("col-span-9");
        $(".projectsLink").addClass("active");
      }, 1600);
    }
  });
});

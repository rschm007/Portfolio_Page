$(document).ready(function () {
  // defining template literals for nav buttons
  const nav = `<nav class="row-span-1">
  <button class="btn_nav fadeIn homeLink text-xl mx-5 px-4 py-3 rounded-lg active" type="button">Home</button>
  <button class="btn_nav fadeIn projectsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Projects</button>
  <button class="btn_nav fadeIn skillsLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Skills</button>
  <button class="btn_nav fadeIn aboutLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">About</button>
  <button class="btn_nav fadeIn contactLink text-xl mx-5 px-4 py-3 rounded-lg" type="button">Contact</button>
  </nav>
  `;

  const emailForm = `
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPRB1YR4bfALbPptVAUAsYcGRWLpsgmQ_AsvHbNk6xTerFbg/viewform?embedded=true" class="bg-gray-100 rounded-lg shadow-lg" width="520" scrolling="no" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

  const resumeDownload = `
  <a href="../assets/downloads/2020-Resume-RobertSchmahl.pdf" download="2020-Resume-RobertSchmahl.pdf" class="resumeLink bg-gray-100 mt-16 rounded-lg h-auto w-48 py-5 px-3">
    <i class="fa fa-download fa-2x" style="color: Mediumslateblue;"></i><p class="text-2x text-indigo-800">Download my resume <em class="text-sm"><br>(pdf 110kb)</em></p></a>
  </a>
  `;

  const hoverEnlarge = `duration-500 ease-in-out hover:-translate-y-1 transform hover:scale-120`;

  // defining styles to be used throughout
  const h2Styles = `text-2xl font-bold mt-4 p-2`;
  const h3Styles = `font-normal p-2 mb-4`;
  const pStyles = `mt-2 p-2`;

  // defining typewrite function
  (function ($) {
    $.fn.typewrite = function (options) {
      var settings = {
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

  // define pageRender function for animation
  function pageRender() {
    // animate content
    $(".page_style").addClass("animate_content");
    $(".page_description").fadeOut(100).delay(2800).fadeIn();

    setTimeout(function () {
      $(".page_style").removeClass("animate_content");
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function () {
      $(".page__style").removeClass("fadeIn");
    }, 1500);
  };

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
    // properties for projects page
    if (btnTxt == "Projects") {
      pageRender();
      // defining unique styles for project cards
      const projectCard = `col-span-1 bg-gray-100 w-auto h-auto mx-5 rounded-lg`;

      setTimeout(function () {
        if ($(".overlay")[0]) {
          $(".overlay").remove();
        }
        $("main")
          .addClass("from-green-900 via-green-600 to-teal-600")
          .removeClass(" from-indigo-900 via-blue-800 to-blue-600");
        $(".page_description")
          .addClass("grid-rows-2 grid-cols-9")
          .removeClass("introduction grid-rows-6 grid-flow-col")
          .empty().append(`
        <div class="row-span-1 col-span-9"></div>
        ${nav}
        <div class="col-span-1"></div>
        <div class="grid grid-cols-3 col-span-7 justify-center text-blue-900">
          <div class="project1 ${projectCard}">
            <h2 class="${h2Styles}">Babel</h2>
            <h3 class="${h3Styles}">Generates recipes based off of desired ingredients</h3>
            <a href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"><img src="../assets/imgs/webdevo_gif1.gif" alt="An animated gif of the Recipe Generator web app"></img></a>
            <a href="https://https-github-com-steversontong.github.io/Recipe-Generatorf/"><i class="fas fa-link fa-2x m-2 p-2 ${hoverEnlarge}"></i></a>
            <a href="https://github.com/https-github-com-steversonTong/Recipe-Generatorf"><i class="fab fa-github-square fa-3x m-2 p-2 ${hoverEnlarge}"></i></a>
          </div>
          <div class="project2 ${projectCard}">
            <h2 class="${h2Styles}">Day Planner</h2>
            <h3 class="${h3Styles}">Plan your day and track the current time</h3>
            <a href="https://rschm007.github.io/Day-Planner/"><img src="../assets/imgs/webdevo_gif2.gif" alt="An animated gif of the Day Planner web app"></img></a>
            <a href="https://rschm007.github.io/Day-Planner/"><i class="fas fa-link fa-2x m-2 p-2 ${hoverEnlarge}"></i></a>
            <a href="https://github.com/rschm007/Day-Planner"><i class="fab fa-github-square fa-3x m-2 p-2 ${hoverEnlarge}"></i></a>
          </div>
          <div class="project3 ${projectCard}">
            <h2 class="${h2Styles}">Weather Dashboard</h2>
            <h3 class="${h3Styles}">Use the OpenWeatherAPI to search forecasts</h3>
            <a href="https://rschm007.github.io/Weather-Dashboard/"><img src="../assets/imgs/webdevo_gif3.gif" alt="An animated gif of the Weather Dashboard web app"></img></a>
            <a href="https://rschm007.github.io/Weather-Dashboard/"><i class="fas fa-link fa-2x m-2 p-2 ${hoverEnlarge}"></i></a>
            <a href="https://github.com/rschm007/Weather-Dashboard"><i class="fab fa-github-square fa-3x m-2 p-2 ${hoverEnlarge}"></i></a>
          </div>
        </div>
        <div class="col-span-1"></div>
        `);
        $("nav").addClass("col-span-9");
        $(".btn_nav").removeClass("active");
        $(".projectsLink").addClass("active");
      }, 1600);
    }

    // properties for skills page
    if (btnTxt == "Skills") {
      pageRender();
      // defining unique in-line styles for skills cards
      const skillsCardStyles = `col-span-1 bg-gray-100 w-auto h-auto mx-5 p-10 rounded-lg`;
      const skillsCardH3 = `text-xl text-pink-800 font-semibold mt-4 p-3`;
      const skillsIconStyles = `fa-4x mt-8`;

      setTimeout(function () {
        if ($(".overlay")[0]) {
          $(".overlay").remove();
        }
        $("main")
          .addClass("from-orange-700 via-orange-500 to-yellow-400")
          .removeClass(" from-indigo-900 via-blue-800 to-blue-600");
        $(".page_description")
          .addClass("grid-rows-2 grid-cols-9")
          .removeClass("introduction grid-rows-6 grid-flow-col")
          .empty().append(`
        <div class="row-span-1 col-span-9"></div>
        ${nav}
        ${resumeDownload}
        <div class="col-span-1"></div>
        <div class="grid grid-cols-3 col-span-7 justify-center text-blue-900">
          <div class="skills1 ${skillsCardStyles}">
            <i class="fas fa-cogs ${skillsIconStyles}"></i>
            <h2 class="${h2Styles}">Developer</h2>
            <p class="${pStyles}">I am a full-stack web developer, able to tackle projects from front-end to back-end.</p>
            <h3 class="${skillsCardH3}">Specialties:</h3>
            <p>UX, UI, Web, Mobile, Brands</p>
            <h3 class="${skillsCardH3}">Dev Tools & Languages:</h3>
            <dl>
              <dt>HTML/Pug</dt>
              <dt>CSS/Sass</dt>
              <dt>Javascript</dt>
              <dt>Bootstrap</dt>
              <dt>Tailwindcss</dt>
              <dt>Node</dt>
              <dt>Visual Studio Code</dt>
              <dt>Github</dt>
              <dt>Terminal</dt>
            </dl>

          </div>
          <div class="skills2 ${skillsCardStyles}">
            <i class="fas fa-pencil-ruler ${skillsIconStyles}"></i>
            <h2 class="${h2Styles}">Designer</h2>
            <p class="${pStyles}">I strive to create elegant designs that create impactful user interactions.</p>
            <h3 class="${skillsCardH3}">Things I love to design:</h3>
            <dl>
              <dt>UX, UI</dt>
              <dt>Logos</dt>
              <dt>Posters</dt>
              <dt>Social Media Images</dt>
              <dt>Web</dt>
              <dt>Mobile</dt>
              <dt>Apps</dt>
              <dt>Storefronts</dt>
            </dl>

          </div>
          <div class="skills3 ${skillsCardStyles}">
            <i class="fas fa-users ${skillsIconStyles}"></i>
            <h2 class="${h2Styles}">Collaborator</h2>
            <p class="${pStyles}">I love working in teams, and I draw upon diverse experiences to inform my collaborating.</p>
            <h3 class="${skillsCardH3}">Experiences I draw from:</h3>
            <dl>
              <dt>2+ years government experience</dt>
              <dt>3+ years web development</dt>
              <dt>4+ years graphic design</dt>
              <dt>4+ years small business owner</dt>
              <dt>4+ years event coordination</dt>
              <dt>4+ years web design</dt>
              <dt>6+ years photography</dt>
              <dt>8+ years customer service</dt>
            </dl>
          </div>
        </div>
        <div class="col-span-1"></div>
        `);
        $("nav").addClass("col-span-9");
        $(".btn_nav").removeClass("active");
        $(".skillsLink").addClass("active");
        $(".resumeLink")
          .addClass(
            `col-span-9 resumeLinkSkills ${hoverEnlarge} bg-yellow-100 shadow-lg h-32`
          )
          .removeClass(`col-span-9 h-auto bg-gray-100`);
        $(".fa-download").css("color: Tomato");
      }, 1600);
      setTimeout(function () {
        $("main").addClass("h-full").removeClass("h-screen");
      }, 3250);
    }

    // properties for home page
    if (btnTxt == "Home") {
      pageRender();
      setTimeout(function () {
        if ($(".overlay")[0]) {
          $(".overlay").remove();
        }
        $("body").empty().append(`
        <main
        class="wrapper page_style bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 h-screen w-screen"
      >
        <div
          class="introduction page_description grid grid-rows-6 grid-flow-col justify-center text-center gap-10 text-white"
        >
          <div class="row-span-3"></div>
          <h1 class="row-span-1 font-medium text-4xl">
            Hi, my name is Robert.
          </h1>
          <h1 class="row-span-1 font-normal text-3xl">
            I am a full-stack web developer and graphic designer.
          </h1>
          ${nav}
        </div>
      </main>
     `);
        $(".btn_nav").removeClass("active");
        $(".homeLink").addClass("active");
      }, 1600);
    }

    // properties for about page
    if (btnTxt == "About") {
      pageRender();
      const aboutH2 = `text-2xl font-bold text-gray-100 pt-4 text-5xl`;
      const aboutH3 = `text-xl font-semibold text-blue-900 pt-1 pb-4 text-xl`;
      const aboutContentCards = `col-span-7 h-auto rounded-lg shadow-lg text-blue-900 p-4`;

      setTimeout(function () {
        if ($(".overlay")[0]) {
          $(".overlay").remove();
        }
        $("main")
          .addClass("from-blue-900 via-teal-400 to-teal-200")
          .removeClass(" from-indigo-900 via-blue-800 to-blue-600")
          .prepend(`<div class="overlay bg-local"></div>`);
        $(".page_description")
          .addClass("grid-rows-2 grid-cols-9")
          .removeClass("introduction grid-rows-6 grid-flow-col")
          .empty().append(`
            <div class="row-span-1 col-span-9"></div>
            ${nav}
            <div class="aboutHeader col-span-7 justify-center h-auto w-64">
              <h2 class="${aboutH2}">Who is Robert Schmahl?</h2>
              <h3 class="${aboutH3} pb-4">Or, How I Learned to Stop Worrying and Love the Process</h2>
            </div>
            <div class="aboutContent1 bg-gray-300 ${aboutContentCards}">
              <p class="${pStyles}">I, Robert Schmahl, am a full-stack web developer and graphic designer. Hopefully you already knew that because you took the time to watch the typewriter animation on the home page (thanks for doing that!). I am currently living in Irvine, CA. I earned my degree in Political Science from UC Riverside and then signed up with AmeriCorps to
              begin an illustrious career in politics.</p>
            </div>
            <div class="aboutContent2 col-span-9 justify-center text-2xl h-auto font-extrabold text-blue-900 p-4">
              <p class="${pStyles}">Spoiler Alert: I am no longer working in politics</p>
            </div>
            <div class="aboutContent3 bg-gray-100 ${aboutContentCards}">
              <p class="${pStyles}">Turns out, I am much more of a creative than a politician. It wasn't all a loss, though -
              during my time in national service I discovered I had a knack for graphic design. So after completing my tour I decided I would make a go at being a professional artist.
              After a short misadventure working as a fishmonger I landed a steady gig as a graphic designer at a live theatre. Suddenly, I was living the dream! I was being paid to be creative, and I even got free show tickets! </p>
            </div>
            <div class="aboutContent4 col-span-9 justify-center text-5xl h-auto font-extrabold text-blue-900 p-4">
              <p class="${pStyles}">Then, COVID-19</p>
            </div>
            <div class="aboutContent5 bg-gray-100 ${aboutContentCards}">
              <p class="${pStyles}">Like many people, I was suddenly without a job. After thinking hard about what I wanted from my career, I decided to attend the UCI Full Stack Flex Bootcamp.
              So far, My journey in web development has been a lot like many self-learning journeys I've undertaken, with one exception: </p>
            </div>
            <div class="aboutContent6 col-span-9 justify-center text-3xl h-auto font-extrabold text-blue-900 p-4">
              <p class="${pStyles}">I really feel like this work is for me</p>
            </div>
            <div class="col-span-1"></div>
            `);
        $("nav").addClass("col-span-9");
        $(".btn_nav").removeClass("active");
        $(".aboutLink").addClass("active");
      }, 1600);
      setTimeout(function () {
        $("main").addClass("h-full").removeClass("h-screen");
      }, 3250);
    }

    // properties for contact page
    if (btnTxt == "Contact") {
      pageRender();
      if ($(".overlay")[0]) {
        $(".overlay").remove();
      }
      setTimeout(function () {
        $("main")
          .addClass("from-purple-800 via-indigo-700 to-indigo-400")
          .removeClass("from-indigo-900 via-blue-800 to-blue-600");
        $(".page_description")
          .addClass("grid-rows-2 grid-cols-9")
          .removeClass("introduction grid-rows-6 grid-flow-col")
          .empty().append(`
          <div class="row-span-1 col-span-9"></div>
        ${nav}
        <div class="col-span-2"></div>
        <div class="col-span-3">
          ${emailForm}
        </div>
        <div class="col-span-3 grid grid-rows-5">
          ${resumeDownload}
          <div class="row-span-1">          
            <a href="https://www.linkedin.com/in/robert-schmahl/" class="linkedin row-span-1">
              <i class="fab fa-linkedin fa-7x p-4  ${hoverEnlarge}"></i>
            </a>
            <a href="https://github.com/rschm007" class="github row-span-1">
              <i class="fab fa-github-square fa-7x p-4 ${hoverEnlarge}"></i>
            </a>
          </div>
        </div>
        `);
        $("nav").addClass("col-span-9");
        $(".btn_nav").removeClass("active");
        $(".contactLink").addClass("active");
        $(".resumeLink").addClass(`${hoverEnlarge} row-span-1 mx-40`);
      }, 1600);
      setTimeout(function () {
        $("main").addClass("h-full").removeClass("h-screen");
      }, 3250);
    }
  });
});

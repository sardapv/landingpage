$(document).ready(() => {
  /* sticky navigation */
  $(".js--select-feature").waypoint(
    (direction) => {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    {
      offset: "70px",
    }
  );

  $(".js--hero-button-1").click((e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  });

  $(".js--hero-button-2").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".js--select-feature").offset().top,
      },
      1000
    );
  });

  /* IMP - without jquery also can be done like below */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        duration: 5000,
      });
    });
  });

  /* animations on scroll */
  $(".js--animate-feature").waypoint(
    () => {
      $(".js--animate-feature").addClass(
        "animate__animated  animate__fadeInUp animated "
      );
    },
    {
      offset: "50%",
    }
  );

  $(".js--animate-pictures-row1").waypoint(
    () => {
      $(".js--animate-pictures-row1").addClass(
        "animate__animated  animate__fadeInLeft animated "
      );
    },
    {
      offset: "50%",
    }
  );

  $(".js--animate-pictures-row2").waypoint(
    () => {
      $(".js--animate-pictures-row2").addClass(
        "animate__animated  animate__fadeInRight animated "
      );
    },
    {
      offset: "70%",
    }
  );

  $(".js--animate-mobile").waypoint(
    () => {
      $(".js--animate-mobile").addClass(
        "animate__animated  animate__flipInY animated "
      );
    },
    {
      offset: "70%", //note this
    }
  );

  $(".js--animate-cities").waypoint(
    () => {
      $(".js--animate-cities").addClass(
        "animate__animated  animate__fadeIn animated "
      );
    },
    {
      offset: "50%", //note this
    }
  );

  $(".js--animate-plans").waypoint(
    () => {
      $(".js--animate-plans").addClass(
        "animate__animated  animate__zoomIn animated "
      );
    },
    {
      offset: "80%", //note this
    }
  );

  $(".js--hamburger").click((e) => {
    e.preventDefault();
    hideShowmenu();
  });

  hideShowmenu = () => {
    $(".js--menu").slideToggle(300);

    if ($(".js--menu").hasClass("hide")) {
      $(".js--menu").addClass("show");
      $(".js--menu").removeClass("hide");
      $(".js--hamburger").attr("name", "close");
    } else {
      $(".js--menu").removeClass("show");
      $(".js--menu").addClass("hide");
      $(".js--hamburger").attr("name", "menu");
    }
  };
});

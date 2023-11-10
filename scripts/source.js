$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    if ($(window).width()< 760) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 180,
        },
        800
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 140,
        },
        800
      );
    }
  }
});

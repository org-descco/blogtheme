const youtube = document.querySelector("body").querySelectorAll(".youtube");

if (youtube.length > 0) {
  for (var i = 0; i < youtube.length; i++) {
    const source =
      "https://img.youtube.com/vi/" +
      youtube[i].dataset.embed +
      "/hqdefault.jpg";

    const image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      if (!!this.dataset.playlist) {
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute(
          "src",
          "https://www.youtube.com/embed/videoseries?list=" +
            this.dataset.playlist +
            "&autoplay=1"
        );
      } else {
        iframe.setAttribute("allow", "autoplay");
        iframe.setAttribute(
          "src",
          "https://www.youtube.com/embed/" +
            this.dataset.embed +
            "?rel=0&showinfo=0&autoplay=1"
        );
      }
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
}

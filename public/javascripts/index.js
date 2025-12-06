$(window).on("load", function () {
  $("#homescene").mapster({
    scaleMap: true,

    fillColor: "ffffff",
    fillOpacity: 0.2,
    strokeColor: "00008b",
    strokeWidth: 2,

    onClick: function (e) {
      window.location.href = this.href;
    },
  });
});

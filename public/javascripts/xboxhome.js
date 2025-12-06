$(window).on("load", function () {
  $("#xboxhomescene").mapster({
    scaleMap: true,

    fillColor: "107C10",
    fillOpacity: 0.2,
    strokeColor: "00008b",
    strokeWidth: 2,

    onClick: function (e) {
      window.location.href = this.href;
    },
  });
});

$(window).on("load", function () {
  $("#minecraftscene").mapster({
    scaleMap: true,

    fillColor: "00008b",
    fillOpacity: 0.2,
    strokeColor: "00008b",
    strokeWidth: 2,

    onClick: function (e) {
      window.location.href = this.href;
    },
  });
});

$(function() {
  $("#btnSave").click(function() {
    html2canvas($("logo-badge"), {
      onrendered: function(canvas) {
        theCanvas = canvas;
        document.body.appendChild(canvas);

        // Convert and download as image
        Canvas2Image.saveAsPNG(canvas, 300, 300);
        $("#img-out").append(canvas);
        // Clean up
        document.body.removeChild(canvas);
      }
    });
  });
});
